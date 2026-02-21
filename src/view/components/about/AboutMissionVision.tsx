const cardClass =
  "rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] p-5 shadow-[0_0_24px_rgba(180,120,60,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(200,140,80,0.2),0_8px_24px_rgba(0,0,0,0.25)] hover:border-amber-700/50";

function AboutMissionVision() {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-r from-[#1a1510] to-[#0a0806]">
      <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8 grid gap-4 md:gap-6 md:grid-cols-2">
        <div className={cardClass}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600/90">Our Mission</h3>
          <p className="mt-2 text-[#e5e0d8]/90 text-sm md:text-base leading-relaxed">
            To help startups and modern enterprises build scalable, intelligent, and reliable digital products
            through world-class engineering.
          </p>
        </div>

        <div className={cardClass}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600/90">Our Vision</h3>
          <p className="mt-2 text-[#e5e0d8]/90 text-sm md:text-base leading-relaxed">
            To be a trusted technology partner for ambitious companies building the next generation of digital
            platforms.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMissionVision;
