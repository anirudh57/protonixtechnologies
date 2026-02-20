import { useEffect } from "react";
import { useResponsive } from "../../../utils/useResponsive";

interface HeroProps {
    onOpenQuoteDrawer: (title: string, btnLabel: string) => void;
}

function Hero({ onOpenQuoteDrawer }: HeroProps) {
    const { isMobile } = useResponsive();

    useEffect(() => {
        // Initialize AOS if available
        if (typeof window !== "undefined" && (window as any).AOS) {
            (window as any).AOS.init();
        }
    }, []);

    if (isMobile) {
        return (
            <section className="text-white bg-[url('/images/hero_mobile/1-10.webp')] bg-blend-multiply bg-cover h-screen shadow-[0px_-5px_10px_5px] shadow-dg-dark">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 h-3/4 content-center">
                <div>
                        <img
                            src="/images/logo/logo-image.svg"
                            alt="Digient Logo"
                            className="mx-auto mb-4 w-20 h-auto"
                        />
                    </div>
                    <h1 className="my-auto text-base md:text-base">
                        Engineering Intelligent Digital Products for Ambitious
                        Businesses
                    </h1>

                    <h4 className="mb-4 text-4xl font-thin tracking-tight leading-none md:text-5xl lg:text-9xl my-8">
                        <span className="gradient-text">
                            Upgrade your ideas<br></br>Elevate your impact{" "}
                        </span>
                        <br />
                    </h4>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch w-full mb-6 sm:mb-0">
                    <button
                      id="menu-btn-hero"
                      onClick={() =>
                        onOpenQuoteDrawer(
                          "Schedule a Strategy Call",
                          "Request Callback"
                        )
                      }
                      className="
                        element
                        w-full sm:w-auto
                        p-3 md:p-4
                        text-sm md:text-base
                        text-white font-light
                        border border-dg-blue
                        rounded-none
                        hover:bg-dg-blue
                        transition
                      "
                    >
                      Schedule a Strategy Call
                    </button>

                    <button
                      id="menu-btn-hero"
                      onClick={() =>
                        onOpenQuoteDrawer(
                          "Explore Our Capabilities",
                          "Get a Quote"
                        )
                      }
                      className="
                        element
                        w-full sm:w-auto
                        p-3 md:p-4
                        text-sm md:text-base
                        text-white font-light
                        border border-dg-blue
                        rounded-none
                        hover:bg-dg-blue
                        transition
                        sm:ml-0
                      "
                    >
                      Explore Our Capabilities
                    </button>
                  </div>


                    <p className="font-light sm:px-16 xl:px-48">
                        With our cohesive and experienced teams, we ensure the
                        seamless delivery of end-to-end projects, combining
                        efficiency and reliability at every stage of your
                        digital journey
                    </p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="bg-center bg-no-repeat bg-[url('/images/hero_desktop/1-10.webp')] bg-blend-multiply bg-cover text-white h-screen shadow-[0px_0px_10px_0px] shadow-dg-dark">
                <div className="py-8 px-4 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl text-center lg:py-16 lg:px-12 h-full content-center">
                    <div>
                        <img
                            src="/images/logo/logo-image.svg"
                            alt="Digient Logo"
                            className="mx-auto mb-4 w-32 h-auto"
                        />
                    </div>
                    <h1 className="my-auto text-sm md:text-base">
                        Engineering Intelligent Digital Products for Ambitious
                        Businesses
                    </h1>
                    <h2
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                        className="mb-4 text-4xl font-bold tracking-tight md:text-5xl 2xl:text-8xl xl:text-6xl my-8"
                        style={{ lineHeight: "1.2 !important" }}
                    >
                        <span className="gradient-text">
                            Upgrade your ideas<br></br>Elevate your impact
                        </span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 justify-center items-center mt-1">
                        <div>
                            {" "}
                            <button
                                id="menu-btn-hero"
                                onClick={() =>
                                    onOpenQuoteDrawer(
                                        "Schedule a Strategy Call",
                                        "Request Callback"
                                    )
                                }
                                className="element p-3 md:p-4 text-sm md:text-base text-white font-light border border-dg-blue rounded-none my-8 hover:bg-dg-blue transition ease-in-out"
                            >
                                Schedule a Strategy Call
                            </button>
                        </div>
                        <div>
                            <button
                                id="menu-btn-hero"
                                onClick={() =>
                                    onOpenQuoteDrawer(
                                        "Explore Our Capabilities",
                                        "Get a Quote"
                                    )
                                }
                                className="element p-3 md:p-4 text-sm md:text-base text-white font-light border border-dg-blue rounded-none my-8 hover:bg-dg-blue transition ease-in-out"
                            >
                                Explore Our Capabilities
                            </button>
                        </div>
                    </div>

                    {/* <span className="mx-2"></span> */}

                    <p className="mb-8 font-light sm:px-16 xl:px-48">
                        With our cohesive and experienced teams, we ensure the
                        seamless delivery of end-to-end projects, combining
                        efficiency and reliability at every stage of your
                        digital journey
                    </p>
                </div>
            </section>
        </>
    );
}

export default Hero;
