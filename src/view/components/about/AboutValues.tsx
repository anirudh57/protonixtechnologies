const valueCardClass =
  "h-full rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] p-5 shadow-[0_0_24px_rgba(180,120,60,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(200,140,80,0.2),0_8px_24px_rgba(0,0,0,0.25)] hover:border-amber-700/50 text-center";

function AboutValues() {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-r from-[#1a1510] to-[#0a0806]">
      <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600/90 text-center">Our Values</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className={valueCardClass}>
            <h3 className="text-base font-semibold text-[#e5e0d8]">Engineering Excellence</h3>
            <p className="mt-2 text-[#e5e0d8]/80 text-xs md:text-sm leading-relaxed">
              World-class engineers who sweat the details—performance, reliability, and security by design.
            </p>
          </div>

          <div className={valueCardClass}>
            <h3 className="text-base font-semibold text-[#e5e0d8]">Transparency and Ownership</h3>
            <p className="mt-2 text-[#e5e0d8]/80 text-xs md:text-sm leading-relaxed">
              Clear communication, visible roadmaps, and teams who take responsibility for outcomes.
            </p>
          </div>

          <div className={valueCardClass}>
            <h3 className="text-base font-semibold text-[#e5e0d8]">Continuous Innovation</h3>
            <p className="mt-2 text-[#e5e0d8]/80 text-xs md:text-sm leading-relaxed">
              Curiosity and experimentation that keep your product ahead, from AI to UX refinement.
            </p>
          </div>

          <div className={valueCardClass}>
            <h3 className="text-base font-semibold text-[#e5e0d8]">Client Success</h3>
            <p className="mt-2 text-[#e5e0d8]/80 text-xs md:text-sm leading-relaxed">
              We win when you win—our work is measured by impact, adoption, and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
