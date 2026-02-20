function AboutMissionVision() {
  return (
    <section className="py-8 md:py-6 bg-gray-50">
      <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8 grid gap-4 md:gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-800">Our Mission</h3>
          <p className="mt-2 text-gray-700 text-sm md:text-base leading-relaxed">
            To help startups and modern enterprises build scalable, intelligent, and reliable digital products
            through world-class engineering.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-800">Our Vision</h3>
          <p className="mt-2 text-gray-700 text-sm md:text-base leading-relaxed">
            To be a trusted technology partner for ambitious companies building the next generation of digital
            platforms.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMissionVision;
