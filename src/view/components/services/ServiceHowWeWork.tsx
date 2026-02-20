const steps = [
  {
    label: 'Discovery & Product Alignment',
    desc: 'We understand your vision, users, and business goals.',
    icon: '🔍',
    delay: 0,
  },
  {
    label: 'Architecture & Planning',
    desc: 'We design a scalable technical foundation.',
    icon: '📐',
    delay: 100,
  },
  {
    label: 'Design & Engineering',
    desc: 'Agile development with frequent feedback loops.',
    icon: '⚙️',
    delay: 200,
  },
  {
    label: 'Quality Assurance',
    desc: 'Rigorous testing for reliability and performance.',
    icon: '✅',
    delay: 300,
  },
  {
    label: 'Launch & Scale',
    desc: 'Smooth deployment with monitoring and optimization.',
    icon: '🚀',
    delay: 400,
  },
  {
    label: 'Ongoing Partnership',
    desc: 'Continuous improvements and long-term support.',
    icon: '🤝',
    delay: 500,
  },
];

function ServiceHowWeWork() {
  return (
    <section className="py-12 md:py-16 bg-gray-100" data-aos="fade-up" data-aos-duration="800">
      <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-800 text-center">
          How we work
        </h2>
        <p className="mt-2 text-center text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
          A structured yet flexible delivery model that keeps vision, design, and engineering aligned from day one.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.label}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition"
              data-aos="fade-up"
              data-aos-delay={step.delay}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-dg-blue/10">
                  <span className="text-sm">{step.icon}</span>
                </div>
                <div>

                  <p className="text-sm font-semibold text-dg-dark">
                    {step.label}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceHowWeWork;
