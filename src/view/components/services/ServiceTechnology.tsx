const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techStripItems: { name: string; logo: string }[] = [
  { name: "React", logo: `${CDN}/react/react-original.svg` },
  { name: "Next.js", logo: `${CDN}/nextjs/nextjs-original.svg` },
  { name: "Angular", logo: `${CDN}/angularjs/angularjs-original.svg` },
  { name: "Vue", logo: `${CDN}/vuejs/vuejs-original.svg` },
  { name: "Node.js", logo: `${CDN}/nodejs/nodejs-original.svg` },
  { name: "Python", logo: `${CDN}/python/python-original.svg` },
  { name: "Java", logo: `${CDN}/java/java-original.svg` },
  { name: "TensorFlow", logo: `${CDN}/tensorflow/tensorflow-original.svg` },
  { name: "PyTorch", logo: `${CDN}/pytorch/pytorch-original.svg` },
  { name: "AWS", logo: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { name: "Azure", logo: `${CDN}/azure/azure-original.svg` },
  { name: "Docker", logo: `${CDN}/docker/docker-original.svg` },
  { name: "Kubernetes", logo: `${CDN}/kubernetes/kubernetes-plain.svg` },
  { name: "PostgreSQL", logo: `${CDN}/postgresql/postgresql-original.svg` },
  { name: "MySQL", logo: `${CDN}/mysql/mysql-original.svg` },
  { name: "MongoDB", logo: `${CDN}/mongodb/mongodb-original.svg` },
];

const techStacks: { label: string; tag: string; items: string[]; delay: number; span: number }[] = [
  { label: 'Frontend', tag: 'UI & Experience', items: ['React', 'Next.js', 'Angular', 'Vue'], delay: 0, span: 2 },
  { label: 'Backend', tag: 'APIs & Logic', items: ['Node.js', 'Python', 'Java'], delay: 100, span: 1 },
  { label: 'AI & Data', tag: 'Intelligence', items: ['TensorFlow', 'PyTorch', 'Scikit-learn'], delay: 200, span: 1 },
  { label: 'Cloud & DevOps', tag: 'Infrastructure', items: ['AWS', 'Azure', 'Docker', 'Kubernetes'], delay: 300, span: 2 },
  { label: 'Databases', tag: 'Storage', items: ['PostgreSQL', 'MySQL', 'MongoDB'], delay: 400, span: 2 },
];

function getLogo(name: string): string | null {
  const slug = name.replace(/\s+/g, '').replace('.', '').toLowerCase();
  const m: Record<string, string> = {
    react: `${CDN}/react/react-original.svg`,
    nextjs: `${CDN}/nextjs/nextjs-original.svg`,
    angular: `${CDN}/angularjs/angularjs-original.svg`,
    vue: `${CDN}/vuejs/vuejs-original.svg`,
    nodejs: `${CDN}/nodejs/nodejs-original.svg`,
    python: `${CDN}/python/python-original.svg`,
    java: `${CDN}/java/java-original.svg`,
    tensorflow: `${CDN}/tensorflow/tensorflow-original.svg`,
    pytorch: `${CDN}/pytorch/pytorch-original.svg`,
    aws: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    azure: `${CDN}/azure/azure-original.svg`,
    docker: `${CDN}/docker/docker-original.svg`,
    kubernetes: `${CDN}/kubernetes/kubernetes-plain.svg`,
    postgresql: `${CDN}/postgresql/postgresql-original.svg`,
    mysql: `${CDN}/mysql/mysql-original.svg`,
    mongodb: `${CDN}/mongodb/mongodb-original.svg`,
  };
  return m[slug] ?? null;
}

const cardClass =
  "rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] p-5 shadow-[0_0_24px_rgba(180,120,60,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(200,140,80,0.2),0_8px_24px_rgba(0,0,0,0.25)] hover:border-amber-700/50";

function ServiceTechnology() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#1a1510] to-[#0a0806]" data-aos="fade-up" data-aos-duration="700">
      {/* Centered intro */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e5e0d8]/90">
          Our stack
        </h2>
        <p className="mt-2 text-2xl md:text-4xl font-light text-[#e5e0d8] max-w-2xl mx-auto">
          Tools we trust to build, ship, and scale.
        </p>
        <p className="mt-3 text-sm md:text-base text-[#e5e0d8]/80 max-w-xl mx-auto">
          We lean on a curated set of technologies so every project gets real expertise—not surface-level familiarity.
        </p>
        <p className="mt-4 text-xs uppercase tracking-widest text-amber-600/90">
          Frontend · Backend · Data · Cloud
        </p>
      </div>

      {/* Full-width scrolling strip */}
      <div className="mt-10 w-full overflow-hidden border-y border-amber-900/40 bg-[#0a0806]/60 py-4">
        <div className="scrolling-strip-mask">
          <div className="scrolling-strip-inner scrolling-strip-tech">
            {[...techStripItems, ...techStripItems].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="scrolling-strip-tech-item flex flex-shrink-0 items-center gap-3 rounded-xl border border-amber-900/30 bg-gradient-to-br from-[#2d2218]/80 to-[#1a1510]/80 px-4 py-2.5 mr-4 md:mr-6"
              >
                <img
                  src={tech.logo}
                  alt=""
                  className="h-7 w-7 object-contain md:h-8 md:w-8"
                  loading="lazy"
                />
                <span className="whitespace-nowrap text-sm font-medium text-[#e5e0d8] md:text-base">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bento-style stack grid: row1 [Frontend x2] [Backend] [AI], row2 [Cloud x2] [Databases x2] */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-sm">
          {techStacks.map((stack) => (
            <div
              key={stack.label}
              className={`${cardClass} flex flex-col ${stack.span === 2 ? 'lg:col-span-2' : ''}`}
              data-aos="fade-up"
              data-aos-delay={stack.delay}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-600/90">
                {stack.tag}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-[#e5e0d8]">{stack.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.items.map((item) => {
                  const logo = getLogo(item);
                  return (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg border border-amber-800/40 bg-[#0a0806]/60 px-2.5 py-1.5"
                    >
                      {logo ? (
                        <img src={logo} alt="" className="h-5 w-5 object-contain flex-shrink-0" loading="lazy" />
                      ) : (
                        <span className="flex h-5 w-5 items-center justify-center text-xs text-amber-600/80">•</span>
                      )}
                      <span className="text-xs font-medium text-[#e5e0d8]/90">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceTechnology;
