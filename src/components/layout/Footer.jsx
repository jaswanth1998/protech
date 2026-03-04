import { Link } from 'react-router-dom';
import { LuLinkedin, LuTwitter, LuMapPin, LuPhone, LuMail, LuArrowRight } from 'react-icons/lu';
import { footerLinks } from '@/data/navigation';
import { company } from '@/data/company';
import Container from '@/components/ui/Container';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-navy relative overflow-hidden pt-16 text-gray-300 lg:pt-20">
      {/* Subtle top accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Logo + Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Pro-Tech Home">
              <img src="/protech/favicon.svg" alt="" className="h-8 w-8" aria-hidden="true" />
              <span className="font-heading text-lg font-bold text-white">{company.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              {company.tagline}. Delivering reliable IT infrastructure and networking solutions for
              businesses across industries.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href={company.social.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-light/30 text-gray-400 transition-all hover:bg-primary/20 hover:text-primary"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-light/30 text-gray-400 transition-all hover:bg-primary/20 hover:text-primary"
              >
                <LuTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    <LuArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    <LuArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Get In Touch
            </h3>
            <address className="mt-4 space-y-4 not-italic">
              <p className="flex items-start gap-3 text-sm text-gray-400">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-light/30">
                  <LuMapPin className="h-4 w-4 text-primary" />
                </span>
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.province} {company.address.postal}
                </span>
              </p>
              <p className="flex items-center gap-3 text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-light/30">
                  <LuPhone className="h-4 w-4 text-primary" />
                </span>
                <a href={`tel:${company.phone}`} className="text-gray-400 hover:text-primary">
                  {company.phone}
                </a>
              </p>
              <p className="flex items-center gap-3 text-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-light/30">
                  <LuMail className="h-4 w-4 text-primary" />
                </span>
                <a href={`mailto:${company.email}`} className="text-gray-400 hover:text-primary">
                  {company.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </Container>

      {/* Copyright Bar */}
      <div className="mt-12 border-t border-white/10 lg:mt-16">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
