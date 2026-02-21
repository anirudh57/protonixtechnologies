function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1a1510] to-[#0a0806] py-16 md:py-24">
      <div
        className="relative px-4 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <h1 className="mt-4 text-3xl md:text-5xl 2xl:text-6xl font-light md:font-normal leading-tight text-[#e5e0d8]">
          From concept to scale,
          <br className="hidden md:block" />
          we build software that delivers.
        </h1>
        <p className="mt-6 max-w-3xl text-sm md:text-base font-light text-[#e5e0d8]/80">
          End-to-end product engineering, AI, and cloud—aligned to your goals so you can ship faster, iterate with
          confidence, and grow without rewriting the playbook.
        </p>
      </div>
    </section>
  );
}

export default ServiceHero;
