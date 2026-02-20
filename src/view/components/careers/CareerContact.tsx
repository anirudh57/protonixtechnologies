function CareerContact() {
    return (
        <section className="py-12 md:py-16 bg-[#f7f7f8]">
            <div
                className="px-4 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl text-center"
                data-aos="fade-up"
                data-aos-duration="900"
            >
                <h2 className="text-2xl md:text-3xl font-light text-dg-dark">
                    Ready to build what&apos;s next?
                </h2>
                <p className="mt-4 text-sm md:text-base font-light text-dg-dark">
                    We&apos;re always interested in meeting engineers,
                    designers, and product thinkers who care about building
                    great digital products.
                </p>
                <p className="mt-6 text-sm md:text-base font-light text-dg-dark">
                    Email us at{" "}
                    <a
                        href="mailto:careers@yourcompany.com"
                        className="underline hover:text-dg-blue"
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
