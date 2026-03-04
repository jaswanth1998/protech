import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LuChevronDown } from 'react-icons/lu';

function NavDropdown({ label, items = [], isOpen, onToggle, activePath }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isOpen) onToggle();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  function handleKeyDown(event) {
    if (event.key === 'Escape' && isOpen) {
      onToggle();
    }
  }

  return (
    <div ref={dropdownRef} className="relative" role="none" onKeyDown={handleKeyDown}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 text-sm font-medium text-navy transition-colors hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:text-base"
      >
        {label}
        <LuChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
          {/* Arrow */}
          <div
            className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-gray-100 bg-white"
            aria-hidden="true"
          />

          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onToggle}
              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-primary-muted hover:text-primary-dark ${
                activePath === item.path
                  ? 'bg-primary-muted font-semibold text-primary-dark'
                  : 'text-navy'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mx-4 my-1 border-t border-gray-100" />
          <Link
            to="/services"
            onClick={onToggle}
            className="block px-4 py-2.5 text-sm font-semibold text-primary-dark transition-colors hover:bg-primary-muted"
          >
            View All Services &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavDropdown;
