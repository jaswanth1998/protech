import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { LuX, LuChevronDown, LuChevronUp } from 'react-icons/lu';
import { navLinks, ctaButton } from '@/data/navigation';

/**
 * MobileMenu — full-screen overlay + slide-in panel.
 * Renders via React Portal into a dedicated <div> appended to document.body
 * to guarantee it sits above everything regardless of parent stacking contexts.
 */

// Lazily create & cache the portal container
let portalRoot = null;
function getPortalRoot() {
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.id = 'mobile-menu-portal';
    document.body.appendChild(portalRoot);
  }
  return portalRoot;
}

function MobileMenu({ isOpen, onClose }) {
  const { pathname } = useLocation();
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Open animation
  useEffect(() => {
    if (isOpen) {
      // Schedule setVisible then setAnimating across two frames so the
      // CSS transition has a rendered frame to start from (avoids sync setState).
      let raf1, raf2;
      raf1 = requestAnimationFrame(() => {
        setVisible(true);
        raf2 = requestAnimationFrame(() => {
          setAnimating(true);
        });
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    } else {
      let rafId;
      rafId = requestAnimationFrame(() => {
        setAnimating(false);
      });
      const timer = setTimeout(() => {
        setVisible(false);
        setServicesOpen(false);
      }, 300);
      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Focus close button on open
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  const handleKeyDown = useCallback((e) => {
    if (e.key !== 'Tab' || !panelRef.current) return;
    const focusable = panelRef.current.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  const handleNavClick = useCallback(() => {
    setServicesOpen(false);
    onClose();
  }, [onClose]);

  if (!visible) return null;

  return createPortal(
    <>
      {/* Full-screen backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          backgroundColor: 'rgba(26, 32, 44, 0.6)',
          opacity: animating ? 1 : 0,
          transition: 'opacity 300ms ease',
        }}
      />

      {/* Slide-in panel — onKeyDown is required for the focus-trap; dialog container keyboard handling is a standard a11y pattern */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          width: '85vw',
          maxWidth: '320px',
          backgroundColor: '#ffffff',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
          transform: animating ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms cubic-bezier(0.32, 0.72, 0, 1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Top bar — Menu label + close */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            borderBottom: '1px solid #f0f0f0',
            flexShrink: 0,
          }}
        >
          <span className="font-heading text-base font-bold text-navy-dark">Menu</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <LuX size={22} />
          </button>
        </div>

        {/* Navigation links */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 16px' }}>
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.path} style={{ borderBottom: '1px solid #f7f7f7' }}>
                  {/* Services toggle */}
                  <button
                    onClick={() => setServicesOpen((prev) => !prev)}
                    aria-expanded={servicesOpen}
                    className="flex w-full items-center justify-between py-3.5 text-base font-medium text-navy transition-colors hover:text-primary-dark focus:outline-none"
                  >
                    <span>{link.label}</span>
                    {servicesOpen ? <LuChevronUp size={20} /> : <LuChevronDown size={20} />}
                  </button>

                  {/* Sub-links */}
                  {servicesOpen && (
                    <div
                      style={{
                        marginLeft: '12px',
                        paddingLeft: '12px',
                        borderLeft: '2px solid rgba(57, 233, 145, 0.25)',
                        marginBottom: '12px',
                      }}
                    >
                      {link.children.map((child) => {
                        const isActive = pathname === child.path;
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={handleNavClick}
                            className={`block rounded-md px-2 py-2 text-sm transition-colors hover:bg-gray-50 ${
                              isActive ? 'font-semibold text-primary-dark' : 'text-slate'
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                      <Link
                        to="/services"
                        onClick={handleNavClick}
                        className="mt-1 block rounded-md px-2 py-2 text-sm font-semibold text-primary-dark hover:bg-gray-50"
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNavClick}
                style={{ borderBottom: '1px solid #f7f7f7' }}
                className={`block py-3.5 text-base font-medium transition-colors hover:text-primary-dark ${
                  isActive ? 'text-primary-dark' : 'text-navy'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA at bottom */}
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid #f0f0f0',
            flexShrink: 0,
          }}
        >
          <Link
            to={ctaButton.path}
            onClick={handleNavClick}
            className="block w-full rounded-lg bg-primary py-3.5 text-center text-base font-semibold text-navy-dark transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {ctaButton.label}
          </Link>
        </div>
      </div>
    </>,
    getPortalRoot(),
  );
}

export default MobileMenu;
