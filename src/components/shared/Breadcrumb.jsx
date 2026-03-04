import { Link } from 'react-router-dom';
import { LuChevronRight } from 'react-icons/lu';

function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 && <LuChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
              {isLast ? (
                <span className="text-white" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
