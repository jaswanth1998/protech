import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';

function IndustryCard({ icon, name, description, services = [] }) {
  return (
    <div className="group h-full rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg md:p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-muted transition-colors duration-300 group-hover:bg-primary/15">
        <Icon name={icon} size="lg" className="text-primary-dark" />
      </div>
      <h2 className="mt-5 font-heading text-2xl font-semibold text-navy-dark">{name}</h2>
      <p className="mt-3 leading-relaxed text-slate">{description}</p>
      {services.length > 0 && (
        <div className="mt-5 border-t border-gray-100 pt-5">
          <p className="text-sm font-semibold text-navy-dark">Relevant Services:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="rounded-full border border-primary/20 bg-primary-muted px-3 py-1 text-xs font-semibold text-navy-dark transition-all hover:border-primary hover:bg-primary hover:text-navy-dark"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default IndustryCard;
