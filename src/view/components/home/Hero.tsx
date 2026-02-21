import { useEffect } from "react";
import { useResponsive } from "../../../utils/useResponsive";

const HERO_VIDEO_SRC = "/videos/home.mp4"; // add your video to public/videos/

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
            <section className="relative text-[#ddd4c4] h-screen overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={HERO_VIDEO_SRC} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1510]/90 to-[#0a0806]/90" aria-hidden />
                <div className="relative flex flex-col justify-center py-8 px-6 sm:px-8 mx-auto max-w-screen-xl lg:px-12 h-full text-left">
                    <div className="mb-6">
                        <img
                            src="/images/logo/logo-image.png"
                            alt="Protonix Technologies Logo"
                            className="w-20 h-auto"
                        />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight max-w-4xl text-[#ddd4c4]">
                        Build what&apos;s next.
                        <br />
                        Ship what matters.
                    </h1>
                    <p className="mt-6 text-base sm:text-lg font-light text-[#ddd4c4]/90 max-w-xl">
                        We partner with startups and enterprises to design, build, and scale digital products—from MVPs to full-scale platforms—with clear communication and a focus on outcomes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                        <button
                            id="menu-btn-hero"
                            onClick={() =>
                                onOpenQuoteDrawer(
                                    "Schedule a Strategy Call",
                                    "Request Callback"
                                )
                            }
                            className="w-full sm:w-auto p-3 md:p-4 text-sm md:text-base font-medium text-[#ddd4c4] border border-amber-600/60 rounded-xl bg-amber-900/30 shadow-[0_0_20px_rgba(180,120,60,0.1)] transition-all duration-300 hover:border-amber-500/70 hover:shadow-[0_0_28px_rgba(200,140,80,0.2)] hover:-translate-y-0.5"
                        >
                            Talk to Our Team
                        </button>
                        <button
                            id="menu-btn-hero"
                            onClick={() =>
                                onOpenQuoteDrawer(
                                    "Explore Our Capabilities",
                                    "Get a Quote"
                                )
                            }
                            className="w-full sm:w-auto p-3 md:p-4 text-sm md:text-base font-medium text-[#ddd4c4] border border-amber-600/50 rounded-xl bg-transparent transition-all duration-300 hover:bg-amber-900/25 hover:border-amber-500/60 hover:shadow-[0_0_20px_rgba(180,120,60,0.12)] hover:-translate-y-0.5"
                        >
                            Explore Our Work
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="relative text-[#ddd4c4] h-screen overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={HERO_VIDEO_SRC} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1510]/90 to-[#0a0806]/90" aria-hidden />
                <div className="relative flex flex-col justify-center py-12 px-6 sm:px-10 lg:px-16 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl h-full text-left">
                    <div className="mb-8">
                        <img
                            src="/images/logo/logo-image.png"
                            alt="Protonix Technologies Logo"
                            className="w-28 md:w-32 h-auto"
                        />
                    </div>
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight leading-[1.1] max-w-5xl text-[#ddd4c4]"
                    >
                        Build what&apos;s next.
                        <br />
                        Ship what matters.
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        className="mt-8 text-lg md:text-xl font-light text-[#ddd4c4]/90 max-w-2xl"
                    >
                        We partner with startups and enterprises to design, build, and scale digital products—from MVPs to full-scale platforms—with clear communication and a focus on outcomes.
                    </p>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="flex flex-col sm:flex-row gap-4 mt-10"
                    >
                        <button
                            id="menu-btn-hero"
                            onClick={() =>
                                onOpenQuoteDrawer(
                                    "Schedule a Strategy Call",
                                    "Request Callback"
                                )
                            }
                            className="w-full sm:w-auto px-8 py-4 text-base md:text-lg font-medium text-[#ddd4c4] border border-amber-600/60 rounded-xl bg-amber-900/30 shadow-[0_0_20px_rgba(180,120,60,0.1)] transition-all duration-300 hover:border-amber-500/70 hover:shadow-[0_0_28px_rgba(200,140,80,0.2)] hover:-translate-y-0.5"
                        >
                            Talk to Our Team
                        </button>
                        <button
                            id="menu-btn-hero"
                            onClick={() =>
                                onOpenQuoteDrawer(
                                    "Explore Our Capabilities",
                                    "Get a Quote"
                                )
                            }
                            className="w-full sm:w-auto px-8 py-4 text-base md:text-lg font-medium text-[#ddd4c4] border border-amber-600/50 rounded-xl bg-transparent transition-all duration-300 hover:bg-amber-900/25 hover:border-amber-500/60 hover:shadow-[0_0_20px_rgba(180,120,60,0.12)] hover:-translate-y-0.5"
                        >
                            Explore Our Work
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
