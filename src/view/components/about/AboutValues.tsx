function AboutValues() {
  return (
    <section className="py-10 md:py-12">
      <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-800 text-center">Our Values</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-center">
            <h3 className="text-base font-semibold text-dg-dark">Engineering Excellence</h3>
            <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
              World-class engineers who sweat the details—performance, reliability, and security by design.
            </p>
          </div>

          <div className="h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-center">
            <h3 className="text-base font-semibold text-dg-dark">Transparency and Ownership</h3>
            <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
              Clear communication, visible roadmaps, and teams who take responsibility for outcomes.
            </p>
          </div>

          <div className="h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-center">
            <h3 className="text-base font-semibold text-dg-dark">Continuous Innovation</h3>
            <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
              Curiosity and experimentation that keep your product ahead, from AI to UX refinement.
            </p>
          </div>

          <div className="h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-center">
            <h3 className="text-base font-semibold text-dg-dark">Client Success</h3>
            <p className="mt-2 text-gray-600 text-xs md:text-sm leading-relaxed">
              We win when you win—our work is measured by impact, adoption, and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
