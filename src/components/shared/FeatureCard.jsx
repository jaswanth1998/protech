import Icon from '@/components/ui/Icon';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group h-full rounded-xl border border-gray-100 bg-white p-6 text-center shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg md:p-8">
      {icon && (
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-muted transition-colors duration-300 group-hover:bg-primary/15">
          <Icon name={icon} size="lg" className="text-primary-dark" />
        </div>
      )}
      <h3 className="mt-5 font-heading text-xl font-semibold text-navy-dark">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate">{description}</p>
    </div>
  );
}

export default FeatureCard;
