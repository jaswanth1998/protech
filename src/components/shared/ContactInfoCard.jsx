import Icon from '@/components/ui/Icon';

function ContactInfoCard({ icon, title, children }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
      {icon && (
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-muted">
          <Icon name={icon} size="sm" className="text-primary-dark" />
        </div>
      )}
      <h3 className="font-heading text-lg font-semibold text-navy-dark">{title}</h3>
      <div className="mt-3 text-slate">{children}</div>
    </div>
  );
}

export default ContactInfoCard;
