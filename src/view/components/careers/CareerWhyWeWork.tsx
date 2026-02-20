function CareerWhyWeWork() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-light text-dg-dark mb-12">
                    Why work here
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
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
                        <div
                            key={i}
                            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-6"
                        >
                            <span className="absolute left-0 top-0 h-full w-1 bg-dg-blue rounded-l-2xl" />
                            <h3 className="text-lg font-medium text-dg-dark mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm font-light text-dg-dark/80">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CareerWhyWeWork;
