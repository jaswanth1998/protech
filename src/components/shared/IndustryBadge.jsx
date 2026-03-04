import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';

function IndustryBadge({ icon, name, slug }) {
  return (
    <Link
      to={`/industries#${slug}`}
      className="group flex flex-col items-center rounded-xl border border-transparent bg-gray-50 p-6 text-center transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-md lg:p-8"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-muted transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
        <Icon name={icon} size="md" className="text-primary-dark" />
      </div>
      <h3 className="mt-4 font-heading text-sm font-semibold text-navy-dark">{name}</h3>
    </Link>
  );
}

export default IndustryBadge;
