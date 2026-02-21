const TICKER_ITEMS = [
  "Product Engineering",
  "AI & Machine Learning",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Data & Analytics",
  "Cloud & DevOps",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "Scalable Systems",
  "API Development",
  "UI/UX Design",
  "TensorFlow",
  "Startups to Enterprise",
];

function ScrollingStrip() {
  const duplicated = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="relative overflow-hidden border-y border-[#2a221a] bg-gradient-to-r from-[#1a1510] to-[#0a0806] py-3 md:py-4">
      <div className="scrolling-strip-mask">
        <div className="scrolling-strip-inner">
          {duplicated.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="scrolling-strip-item whitespace-nowrap px-6 md:px-8 text-sm md:text-base font-light text-[#e5e0d8]/90"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollingStrip;
