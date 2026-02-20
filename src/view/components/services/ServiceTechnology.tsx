const techStacks = [
  {
    label: 'Frontend',
    tag: 'UI & Experience',
    icon: '🖥️',
    items: ['React', 'Next.js', 'Angular', 'Vue'],
    delay: 0,
  },
  {
    label: 'Backend',
    tag: 'APIs & Logic',
    icon: '⚙️',
    items: ['Node.js', 'Python', 'Java'],
    delay: 100,
  },
  {
    label: 'AI & Data',
    tag: 'Intelligence',
    icon: '🧠',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    delay: 200,
  },
  {
    label: 'Cloud & DevOps',
    tag: 'Infrastructure',
    icon: '☁️',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    delay: 300,
  },
  {
    label: 'Databases',
    tag: 'Storage',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    delay: 400,
  },
];

function ServiceTechnology() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" data-aos="fade-up" data-aos-duration="700">
      <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="md:flex md:items-start md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Technologies we work with
            </h2>
            <p className="mt-2 text-2xl md:text-3xl font-light text-digient-dark">
              A pragmatic stack chosen for stability and scale.
            </p>
            <p className="mt-3 text-sm md:text-base text-white">
              We work with a focused set of technologies so we can bring depth, not just checkboxes, to every
              engagement.
            </p>
          </div>

          <div className="mt-4 md:mt-0 rounded-2xl border border-dg-blue/30 bg-white/90 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.08)] text-xs text-gray-600 max-w-sm">
            <p className="font-semibold text-gray-800 text-sm">Balanced across the stack</p>
            <p className="mt-1">
              From the frontend experience to data and infrastructure, our teams know how choices in one layer impact
              the whole system.
            </p>
          </div>
        </div>

        {/* Tech grid cards with icons */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700">
          {techStacks.map((stack) => (
            <div
              key={stack.label}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)] hover:-translate-y-1 transition"
              data-aos="fade-up"
              data-aos-delay={stack.delay}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-dg-blue/10">
                    <span className="text-base">{stack.icon}</span>
                  </div>
                  <p className="text-sm font-semibold text-dg-dark">{stack.label}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-digient-light px-2.5 py-1 text-xs uppercase font-semibold tracking-[0.16em] text-white">
                  {stack.tag}
                </span>
              </div>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceTechnology;
