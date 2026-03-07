import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuMenu } from 'react-icons/lu';
import { navLinks, ctaButton } from '@/data/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';
import logoSvg from '@/assets/logo.svg';

function Header() {
  const { pathname } = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'border-b border-gray-100'
        }`}
      >
        <Container className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label="Pro-Tech IT Consulting Home"
          >
            <img src={logoSvg} alt="" className="h-8 w-8" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold leading-tight text-navy-dark lg:text-xl">
                Pro-Tech
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.15em] text-slate sm:block">
                IT Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <NavDropdown
                    key={link.path}
                    label={link.label}
                    items={link.children}
                    isOpen={dropdownOpen}
                    onToggle={() => setDropdownOpen(!dropdownOpen)}
                    activePath={pathname}
                  />
                );
              }

              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors hover:text-primary-dark lg:text-base ${
                    isActive ? 'text-primary-dark' : 'text-navy'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Button
              href={ctaButton.path}
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
            >
              {ctaButton.label}
            </Button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open menu"
              className="rounded-lg p-2 text-navy transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary lg:hidden"
            >
              <LuMenu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

export default Header;
