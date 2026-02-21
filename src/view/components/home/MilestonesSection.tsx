const MILESTONES = [
  { value: "2000+", label: "Projects Delivered" },
  { value: "100+", label: "Teams Of Experts" },
  { value: "12+", label: "Years Of Excellence" },
  { value: "500+", label: "Businesses Served" },
];

function SeparatorIcon() {
  return (
    <div className="flex shrink-0 items-center justify-center px-4 md:px-6">
      <div className="flex items-center">
        <span className="h-px w-4 md:w-8 bg-[#2a221a]" aria-hidden />
        <span
          className="mx-1.5 h-6 w-6 shrink-0 rounded-full border-2 border-[#2a221a] shadow-sm"
          style={{
            background: "conic-gradient(#3b82f6 0deg 60deg, #eab308 60deg 120deg, #f97316 120deg 180deg, #ef4444 180deg 240deg, #ec4899 240deg 300deg, #a855f7 300deg 360deg)",
          }}
          aria-hidden
        />
        <span className="h-px w-4 md:w-8 bg-[#2a221a]" aria-hidden />
      </div>
    </div>
  );
}

function MilestonesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a1510] to-[#0a0806]">
      <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-light text-[#e5e0d8] max-w-3xl mx-auto leading-tight">
          A Time-Tested Journey Of Bespoke{" "}
          <span className="font-semibold text-amber-400">Growth And Success</span>
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-8 md:gap-0">
          {MILESTONES.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <div className="text-center min-w-[120px] md:min-w-[160px]">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e5e0d8] tracking-tight">
                  {item.value}
                </p>
                <p className="mt-1 text-sm md:text-base font-medium text-[#e5e0d8]/80">
                  {item.label}
                </p>
              </div>
              {index < MILESTONES.length - 1 && (
                <span className="hidden md:inline">
                  <SeparatorIcon />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MilestonesSection;
