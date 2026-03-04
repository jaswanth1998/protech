import SEO from '@/components/shared/SEO';
import Button from '@/components/ui/Button';
import { LuHouse, LuArrowRight } from 'react-icons/lu';

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found — Pro-Tech IT Consulting"
        description="The page you are looking for does not exist."
      />
      <div className="gradient-navy-radial relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
        <div className="hero-dot-pattern absolute inset-0" aria-hidden="true" />
        <div className="relative z-10">
          <p className="font-heading text-8xl font-bold text-primary md:text-9xl">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-gray-400">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" variant="primary" size="lg" icon={LuHouse}>
              Back to Home
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              icon={LuArrowRight}
              iconPosition="right"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
