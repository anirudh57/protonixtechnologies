function CareerContact() {
    return (
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#1a1510] to-[#0a0806]">
            <div
                className="px-4 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl text-center"
                data-aos="fade-up"
                data-aos-duration="900"
            >
                <h2 className="text-2xl md:text-3xl font-light text-[#e5e0d8]">
                    Ready to build what&apos;s next?
                </h2>
                <p className="mt-4 text-sm md:text-base font-light text-[#e5e0d8]/80">
                    We&apos;re always interested in meeting engineers,
                    designers, and product thinkers who care about building
                    great digital products.
                </p>
                <p className="mt-6 text-sm md:text-base font-light text-[#e5e0d8]/80">
                    Email us at{" "}
                    <a
                        href="mailto:careers@yourcompany.com"
                        className="text-amber-400/90 underline decoration-amber-500/50 hover:text-amber-300 hover:decoration-amber-400 transition"
                    >
                        careers@yourcompany.com
                    </a>{" "}
                    with your profile, portfolio, or LinkedIn.
                </p>
            </div>
        </section>
    );
}

export default CareerContact;
