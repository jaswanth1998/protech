import Container from '@/components/ui/Container';

function LogoStrip({ logos = [], title }) {
  return (
    <section className="border-y border-gray-100 bg-gray-50/50 py-12 md:py-16">
      <Container>
        {title && (
          <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate">
            {title}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="opacity-50 transition-all duration-300 hover:opacity-100"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto grayscale transition-all hover:grayscale-0"
                  loading="lazy"
                  width={120}
                  height={32}
                />
              ) : (
                <span className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-bold tracking-wide text-navy-light shadow-sm">
                  {logo.alt}
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default LogoStrip;
