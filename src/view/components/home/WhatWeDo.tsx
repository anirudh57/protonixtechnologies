import { useEffect } from "react";
import { useResponsive } from "../../../utils/useResponsive";

const reasons = [
  {
    title: "Product & Web Engineering",
    desc: "Scalable websites and web applications built for performance, security, and growth.",
  },
  {
    title: "AI & Machine Learning",
    desc: "Experienced teams who can understand complex problems and design future-proof solutions.",
  },
  {
    title: "Data Science & Analytics",
    desc: "Actionable insights through advanced analytics and intelligent dashboards.",
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud-native architecture and automation designed for reliability and scale.",
  },
  {
    title: "UI/UX Design",
    desc: "Thoughtful, user-centric design that enhances adoption and engagement.",
  },
];

function Section02() {
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  return (
    <section className="lg:my-8 my-16">
      <div className="px-4 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl lg:py-12 lg:px-0 h-full">
        {isMobile ? (
          <div className="md:px-4 mx-auto text-center md:max-w-screen-md lg:max-w-full">
            <h2 className="font-light text-3xl md:text-6xl text-dg-dark uppercase">
              WHAT WE DO
            </h2>
            <p className="mb-8 font-light sm:px-4 my-4 md:my-8 text-gray-700">
              We are a technology consulting and engineering firm focused on building
              high-quality digital products for startups and innovation-led organizations.
            </p>

            <div className="flex flex-col gap-4 px-2">
              {reasons.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                  className="group rounded-2xl border border-gray-200 bg-white/90 px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)] backdrop-blur-sm text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-digient-dark  text-xs font-semibold text-white shadow-md">
                      {index + 1}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-digient-dark via-gray-200 to-transparent group-hover:from-dg-blue group-hover:via-dg-blue/50" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-dg-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left block, similar to Lamp / WhyCompanyChooseUs */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                WHAT WE DO
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-dg-dark leading-tight">
                What We <span className="font-semibold">Do</span>
              </h2>
              <p className="font-light text-gray-700">
                We are a technology consulting and engineering firm focused on building
                high-quality digital products for startups and innovation-led organizations.
              </p>
            </div>

            {/* Right: service cards */}
            <div className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {reasons.map((item, index) => (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={index * 100}
                    className="group rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-digient-dark text-xs font-semibold text-white shadow-md">
                        {index + 1}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-dg-blue via-gray-200 to-transparent group-hover:from-dg-blue group-hover:via-dg-blue/50" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-dg-dark mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section02;