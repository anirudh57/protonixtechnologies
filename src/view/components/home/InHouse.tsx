import { useEffect } from "react";

const reasons = [
  {
    title: "Early-stage and growth-stage startups",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 19V11L12 5L19 11V19H14V14H10V19H5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "SaaS product companies",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 4H19V10H5V4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 14H11V20H5V14Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 14H19V20H15V14Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Digital-first enterprises",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 18V20H16V18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Innovation and R&D teams",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 3C9.23858 3 7 5.23858 7 8C7 9.657 7.895 11.126 9.236 11.914L9 15H15L14.764 11.914C16.105 11.126 17 9.657 17 8C17 5.23858 14.7614 3 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 19H14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function InHouseSection() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  return (
     <section className="py-20 md:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-1.5 text-xs md:text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
            IN-HOUSE & PARTNERS
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl lg:text-[3.25rem] font-light text-dg-dark leading-tight">
            Who We <span className="font-semibold">Work With</span>
          </h2>
        </div>

        {/* Horizontal circle line */}
        <div className="mt-14 md:mt-16">
          <div className="relative max-w-6xl mx-auto">
            {/* connecting line behind circles (desktop) */}
            <div className="hidden md:block absolute left-0 right-0 top-14">
              <div className="mx-12 h-[3px] bg-gradient-to-r from-[#2e3be5] via-[#00cae5] to-[#2e3be5] opacity-40" />
            </div>

            <div className="flex flex-wrap justify-center gap-12 md:gap-16">
              {reasons.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 120}
                  className="flex flex-col items-center text-center gap-5 w-[160px] sm:w-[190px]"
                >
                  {/* circle with icon */}
                  <div className="relative">
                    <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-gradient-to-br from-[#2e3be5] to-[#00cae5] p-[4px] ">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#00cae5] text-white">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* label */}
                  <p className="text-sm sm:text-base md:text-[17px] font-medium text-dg-dark leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}