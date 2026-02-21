import { useEffect, useRef, useState } from "react";
import { useResponsive } from "../../../utils/useResponsive";

const reasons = [
  {
    title: "Startup-friendly, outcome-driven approach",
    description: "We focus on shipping value quickly and iterating with you—no long engagements or rigid processes. Your goals and timelines drive how we work.",
    image: "/images/svg/startup.jpg",
  },
  {
    title: "Senior engineers and solution architects",
    description: "Our teams bring deep technical and product experience. You get people who can design systems, make trade-offs, and own delivery end to end.",
    image: "/images/svg/engineers.jpg",
  },
  {
    title: "Clear communication and transparent execution",
    description: "Regular updates, honest timelines, and no surprises. We keep you in the loop so you can plan and make decisions with confidence.",
    image: "/images/svg/communication.jpg",
  },
  {
    title: "Scalable systems designed for future growth",
    description: "We build with scale and change in mind—so your product can grow with your business without costly rewrites or bottlenecks.",
    image: "/images/svg/scalability.jpg",
  },
  {
    title: "Long-term partnership mindset",
    description: "We invest in understanding your context and success. Many of our best relationships start with one project and grow into ongoing partnerships.",
    image: "/images/svg/partnership.jpg",
  },
];

// Stack offset (rem) from top for each card - each card a bit lower than the previous (overlay)
const CARD_TOP_OFFSETS = [0, 2, 4, 6, 8]; // 0rem, 2rem, 4rem, 6rem, 8rem

function CardBlock({
  item,
  index,
  scrollProgress,
}: {
  item: (typeof reasons)[0];
  index: number;
  scrollProgress: number;
}) {
  const topRem = CARD_TOP_OFFSETS[index];
  const isFirst = index === 0;
  const threshold = (index + 1) / reasons.length;
  const slideStart = isFirst ? -0.01 : Math.max(0, threshold - 0.18);
  const slideEnd = Math.min(1, threshold + 0.02);
  const progress = isFirst
    ? 1
    : scrollProgress <= slideStart
      ? 0
      : scrollProgress >= slideEnd
        ? 1
        : (scrollProgress - slideStart) / (slideEnd - slideStart);
  // Start from bottom of screen (100vh below) and slide up to final position
  const translateY = `${(1 - progress) * 100}vh`;

  // Count how many cards are stacked on top of this one (already visible)
  const cardsInFront = Array.from({ length: reasons.length - 1 - index }, (_, k) => index + 1 + k).filter(
    (j) => scrollProgress > Math.max(0, (j + 1) / reasons.length - 0.18)
  ).length;
  const scale = 1 - cardsInFront * 0.04; // each card behind shrinks by 4%

  const isHidden = !isFirst && progress === 0;

  return (
    <div
      className="absolute left-0 right-0 mx-auto w-full max-w-6xl px-4 transition-transform duration-500 ease-out"
      style={{
        top: `${topRem}rem`,
        zIndex: index + 1,
        transform: `translateY(${translateY}) scale(${scale})`,
        transformOrigin: "top center",
        visibility: isHidden ? "hidden" : "visible",
        pointerEvents: isHidden ? "none" : "auto",
      }}
    >
      <div className="rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] shadow-[0_0_24px_rgba(180,120,60,0.12)] overflow-hidden flex p-10">
        <div className="w-2/5 min-w-[180px] shrink-0 bg-[#0a0806]/50 flex items-center justify-center aspect-square max-h-[220px] sm:max-h-[260px] rounded-xl overflow-hidden">
          {item.image ? (
            <img src={item.image} alt="" className="w-full h-full object-cover rounded-xl" />
          ) : (
            <span className="text-[#e5e0d8]/40 text-sm text-center px-4">Add image</span>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-center p-6 sm:p-8">
          <p className="text-lg sm:text-xl font-medium leading-snug text-[#e5e0d8]">
            {item.title}
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#e5e0d8]/80 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyCompanyChooseUs() {
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  // Mobile: keep original grid layout
  if (isMobile) {
    return (
      <section className="bg-gradient-to-r from-[#1a1510] to-[#0a0806] py-18 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-16">
          <div className="text-center py-4 sm:py-1">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white uppercase">
              WHY COMPANIES CHOOSE US
            </h2>
          </div>
          <div className="mt-12">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              {reasons.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                  className="rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] shadow-[0_0_24px_rgba(180,120,60,0.12)] overflow-hidden flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-2/5 shrink-0 bg-[#0a0806]/50 aspect-video sm:aspect-square flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[#e5e0d8]/40 text-sm text-center px-4">Add image</span>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-6 sm:p-7">
                    <p className="text-sm sm:text-base md:text-lg font-medium leading-snug text-[#e5e0d8]">
                      {item.title}
                    </p>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#e5e0d8]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop: fixed viewport; scroll drives cards sliding up from below and stacking
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const SCROLL_DRIVER_VH = 600;

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const driverHeight = (SCROLL_DRIVER_VH / 100) * window.innerHeight;
      const scrollable = driverHeight - window.innerHeight;
      if (scrollable <= 0) {
        setScrollProgress(1);
        return;
      }
      const progress = (window.scrollY - sectionTop + window.innerHeight) / scrollable;
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-[#1a1510] to-[#0a0806]"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-16">
        {/* Scroll driver: tall div so user scrolls; sticky viewport stays fixed */}
        <div style={{ height: `${SCROLL_DRIVER_VH}vh` }}>
          <div className="sticky top-16 flex h-screen flex-col">
            <div className="shrink-0 text-center py-4 sm:py-1">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white uppercase">
                WHY COMPANIES CHOOSE US
              </h2>
            </div>
            {/* Cards stay here; each slides up from below as scroll progresses */}
            <div className="relative flex-1 min-h-0 overflow-hidden mt-[50px]">
              {reasons.map((item, index) => (
                <CardBlock
                  key={item.title}
                  item={item}
                  index={index}
                  scrollProgress={scrollProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}