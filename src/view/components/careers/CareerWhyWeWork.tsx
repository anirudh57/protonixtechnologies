const cardClass =
    "group relative rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] p-6 shadow-[0_0_24px_rgba(180,120,60,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(200,140,80,0.2),0_8px_24px_rgba(0,0,0,0.25)] hover:border-amber-700/50 overflow-hidden";

function CareerWhyWeWork() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#1a1510] to-[#0a0806]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-light text-[#e5e0d8] mb-10 md:mb-12">
                    Why work here
                </h2>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            title: "Product-driven challenges",
                            desc: "Solve meaningful product problems and shape features with real impact.",
                        },
                        {
                            title: "Modern technology exposure",
                            desc: "Work with contemporary stacks while exploring new ideas and tools.",
                        },
                        {
                            title: "Culture of growth",
                            desc: "Learn continuously through feedback, ownership, and collaboration.",
                        },
                    ].map((item, i) => (
                        <div key={i} className={cardClass}>
                            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-600/70 to-amber-800/50 rounded-l-2xl" />
                            <div className="pl-4">
                                <h3 className="text-lg font-semibold text-[#e5e0d8] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-light text-[#e5e0d8]/80 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CareerWhyWeWork;
