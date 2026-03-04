import Icon from '@/components/ui/Icon';

function ProcessStep({ steps = [] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step.step || index} className="group relative text-center">
          {/* Connecting line (desktop only, not on last item) */}
          {index < steps.length - 1 && (
            <div className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-0.5 w-[calc(100%-5rem)] bg-gradient-to-r from-primary/40 to-primary/10 md:block" />
          )}

          {/* Step circle */}
          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-navy-dark shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
            {step.icon ? <Icon name={step.icon} size="md" className="text-navy-dark" /> : step.step}
          </div>

          <h3 className="mt-5 font-heading text-xl font-semibold text-navy-dark">{step.title}</h3>
          <p className="mt-2 leading-relaxed text-slate">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProcessStep;
