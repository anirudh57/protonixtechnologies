import { useEffect, useState } from "react";
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
  {
    title: "Software Consultation",
    desc: "Expert guidance to help you navigate the complexities of technology.",
  },
  {
    title: "Agile Delivery",
    desc: "Agile development with frequent feedback loops.",
  },
];

const CARD_CLASS =
  "group rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] px-5 py-5 shadow-[0_0_24px_rgba(180,120,60,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(200,140,80,0.2),0_8px_24px_rgba(0,0,0,0.25)] hover:border-amber-700/50 text-left overflow-hidden";

const WHAT_WE_DO_IMAGE = "/images/what-we-do/hero.webp";

function Section02() {
  const { isMobile } = useResponsive();
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  const headingBlock = (
    <div className="text-center mb-8 md:mb-12 pt-8">
      <span className="inline-flex items-center rounded-full border border-[#2a221a] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#e5e0d8]/80">
        WHAT WE DO
      </span>
      <h2 className="font-light text-3xl md:text-5xl lg:text-6xl text-[#e5e0d8] uppercase mt-3 md:mt-4">
        What We <span className="font-semibold">Do</span>
      </h2>
      <p className="font-light text-[#e5e0d8]/80 mt-4 md:my-6 max-w-2xl mx-auto px-4">
        We are a technology consulting and engineering firm focused on building
        high-quality digital products for startups and innovation-led organizations.
      </p>
    </div>
  );

  const cardEl = (item: (typeof reasons)[0], index: number) => (
    <div
      key={item.title}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={index * 100}
      className={CARD_CLASS}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-700/50 text-[#e5e0d8] text-xs font-semibold">
          {index + 1}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-700/40 to-transparent" />
      </div>
      <h3 className="text-base md:text-lg font-bold text-[#e5e0d8] mb-2">
        {item.title}
      </h3>
      <p className="text-sm md:text-[15px] leading-relaxed text-[#e5e0d8]/80">
        {item.desc}
      </p>
    </div>
  );

  const stickyImageBlock = (
    <div className="sticky top-24 self-start shrink-0 w-full lg:max-w-[420px]">
      <div className="rounded-2xl overflow-hidden border border-[#2a221a] bg-[#0a0806]/60 aspect-[4/5] flex items-center justify-center">
        {!imageError ? (
          <img
            src={'/images/svg/home-right.jpg'}
            alt="What we do"
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-[#e5e0d8]/40 text-sm text-center px-4">
            Add image at {WHAT_WE_DO_IMAGE}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section className="bg-gradient-to-r from-[#1a1510] to-[#0a0806]">
      <div className="px-4 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl lg:px-0">
        {headingBlock}

        {/* Desktop: cards left (scroll), image right (sticky) */}
        {!isMobile ? (
          <div className="flex gap-8 lg:gap-12 pb-12">
            <div className="flex-1 min-w-0 space-y-6">
              {reasons.map((item, index) => cardEl(item, index))}
            </div>
            {stickyImageBlock}
          </div>
        ) : (
          /* Mobile: cards grid then image below */
          <>
            <div className="grid gap-4 px-2 sm:grid-cols-2 py-2">
              {reasons.map((item, index) => cardEl(item, index))}
            </div>
            {/* <div className="mt-8 px-2 lg:hidden">
              <div className="rounded-2xl overflow-hidden border border-[#2a221a] bg-[#0a0806]/60 aspect-video flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={WHAT_WE_DO_IMAGE}
                    alt="What we do"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <span className="text-[#e5e0d8]/40 text-sm text-center px-4">
                    Add image at {WHAT_WE_DO_IMAGE}
                  </span>
                )}
              </div>
            </div> */}
          </>
        )}
      </div>
    </section>
  );
}

export default Section02;