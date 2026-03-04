import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuX, LuChevronDown } from 'react-icons/lu';
import { navLinks, ctaButton } from '@/data/navigation';
import Button from '@/components/ui/Button';

function MobileMenu({ isOpen, onClose }) {
  const { pathname } = useLocation();
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Focus trap and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const menu = menuRef.current;
    const focusableElements = menu.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])',
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    function handleTab(event) {
      if (event.key !== 'Tab') return;
      if (event.shiftKey) {
        if (document.activeElement === firstEl) {
          event.preventDefault();
          lastEl?.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          event.preventDefault();
          firstEl?.focus();
        }
      }
    }

    menu.addEventListener('keydown', handleTab);
    return () => menu.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  function handleClose() {
    setServicesExpanded(false);
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-dark/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <nav
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl"
      >
        {/* Close button */}
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <span className="font-heading text-sm font-bold text-navy-dark">Menu</span>
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            aria-label="Close menu"
            className="rounded-lg p-2 text-navy transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <LuX className="h-6 w-6" />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.path} className="border-b border-gray-50">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    aria-expanded={servicesExpanded}
                    className="flex w-full items-center justify-between py-3.5 text-base font-medium text-navy transition-colors hover:text-primary-dark"
                  >
                    {link.label}
                    <LuChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${servicesExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {servicesExpanded && (
                    <div className="mb-3 ml-4 space-y-1 border-l-2 border-primary/20 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={handleClose}
                          className={`block rounded-md py-2 px-2 text-sm transition-colors hover:bg-primary-muted hover:text-primary-dark ${
                            pathname === child.path
                              ? 'font-semibold text-primary-dark'
                              : 'text-slate'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        onClick={handleClose}
                        className="block rounded-md py-2 px-2 text-sm font-semibold text-primary-dark hover:bg-primary-muted"
                      >
                        View All Services &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleClose}
                className={`block border-b border-gray-50 py-3.5 text-base font-medium transition-colors hover:text-primary-dark ${
                  pathname === link.path ? 'text-primary-dark' : 'text-navy'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button pinned at bottom */}
        <div className="border-t border-gray-100 p-4">
          <Button href={ctaButton.path} variant="primary" size="lg" className="w-full">
            {ctaButton.label}
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;
