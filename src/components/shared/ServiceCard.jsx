import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { LuArrowRight } from 'react-icons/lu';

function ServiceCard({ icon, title, description, slug, variant = 'grid' }) {
  const shouldReduceMotion = useReducedMotion();

  const isCompact = variant === 'compact';

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link
        to={`/services/${slug}`}
        className={`group flex h-full flex-col rounded-xl border border-gray-100 border-t-4 border-t-primary bg-white shadow-md transition-all duration-300 hover:border-primary/30 hover:border-t-primary hover:shadow-xl ${
          isCompact ? 'p-5' : 'p-6 md:p-8'
        }`}
      >
        {/* Icon with accent background */}
        <div
          className={`flex items-center justify-center rounded-xl bg-primary-muted transition-colors duration-300 group-hover:bg-primary/15 ${
            isCompact ? 'h-12 w-12' : 'h-14 w-14'
          }`}
        >
          <Icon name={icon} size={isCompact ? 'md' : 'lg'} className="text-primary-dark" />
        </div>

        <h3
          className={`mt-4 font-heading font-semibold text-navy-dark ${
            isCompact ? 'text-base' : 'text-xl'
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 flex-1 leading-relaxed text-slate ${isCompact ? 'text-sm' : 'text-base'}`}
        >
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark transition-colors group-hover:text-primary-dark">
          Learn More
          <LuArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}

export default ServiceCard;
