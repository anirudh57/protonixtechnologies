import { useEffect } from "react";

const reasons = [
  {
    title: "Startup-friendly, outcome-driven approach",
    color: "from-blue-500 to-sky-400",
    iconBg: "bg-blue-500",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: "Senior engineers and solution architects",
    color: "from-emerald-500 to-green-400",
    iconBg: "bg-emerald-500",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        />
      </svg>
    ),
  },
  {
    title: "Clear communication and transparent execution",
    color: "from-violet-500 to-fuchsia-400",
    iconBg: "bg-violet-500",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 12h4m-4 4h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Scalable systems designed for future growth",
    color: "from-orange-500 to-amber-400",
    iconBg: "bg-orange-500",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0 7-7 7 7M13 5v6h6"
        />
      </svg>
    ),
  },
  {
    title: "Long-term partnership mindset",
    color: "from-rose-500 to-red-400",
    iconBg: "bg-rose-500",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8zM12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"
        />
      </svg>
    ),
  },
];

export default function WhyCompanyChooseUs() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  return (
    <section className="py-18 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-white uppercase">
            WHY COMPANIES CHOOSE US
          </h2>
        </div>

        <div className="mt-12">
          <div className="grid gap-7 md:gap-8 lg:gap-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {reasons.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="relative rounded-3xl border border-white/10 bg-white/7 backdrop-blur-xl shadow-[0_28px_90px_rgba(15,23,42,0.9)] overflow-hidden group flex flex-col h-full"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${item.color}`} />

                <div className="p-6 sm:p-7 flex flex-col gap-5 flex-1">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} shadow-lg shadow-black/40`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm uppercase tracking-[0.18em] text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-slate-50">
                    {item.title}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`absolute -inset-14 bg-gradient-to-br ${item.color} opacity-20 blur-3xl`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}