function AboutBanner() {
  return (
    <section className="relative overflow-hidden bg-dg-dark text-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#2e3be5,_transparent_55%),_radial-gradient(circle_at_bottom,_#2e3be5,_transparent_55%)]" />
      <div
        className="relative px-4 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <p className="text-sm md:text-base font-light uppercase tracking-[0.25em] text-dg-light/90">
          About Digient
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl 2xl:text-6xl font-light md:font-normal leading-tight">
          A compact team building dependable digital products.
        </h1>
        <p className="mt-6 max-w-3xl text-sm md:text-base font-light text-dg-light">
          We combine engineering, design, and data to help ambitious teams go from idea to stable, scalable products.
        </p>
      </div>
    </section>
  );
}

export default AboutBanner;
