function ServiceContent() {
  return (
    <section className="py-12 md:py-16" data-aos="fade-up" data-aos-duration="800">
      <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-800">
          What we do
        </h2>
        <p className="mt-2 text-2xl md:text-3xl font-light text-dg-dark">
          Services built to support every stage of your product.
        </p>

        <div className="mt-8 grid gap-6 md:gap-8 md:grid-cols-2">
          {/* 1. Product & Web Application Development */}
          <div
            className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="0"
          >
            <h3 className="text-lg md:text-xl font-semibold text-dg-dark">
              Product &amp; Web Application Development
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              We design and engineer high-performance web applications that are secure, scalable, and built to evolve
              with your business.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              What we build
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-gray-700 list-disc list-inside">
              <li>Startup MVPs and product platforms</li>
              <li>SaaS applications</li>
              <li>Internal tools and admin dashboards</li>
              <li>API-first systems and integrations</li>
              <li>Performance, scalability, and security enhancements</li>
            </ul>
          </div>

          {/* 2. AI & Machine Learning Solutions */}
          <div
            className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <h3 className="text-lg md:text-xl font-semibold text-dg-dark">
              AI &amp; Machine Learning Solutions
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              We apply artificial intelligence to real business problems, helping organizations automate, predict, and
              optimize.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Key solutions
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-gray-700 list-disc list-inside">
              <li>Predictive analytics and forecasting</li>
              <li>Intelligent chatbots and virtual assistants</li>
              <li>Recommendation and personalization engines</li>
              <li>Natural language processing (NLP)</li>
              <li>Computer vision solutions</li>
            </ul>
          </div>

          {/* 3. Data Science & Analytics */}
          <div
            className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <h3 className="text-lg md:text-xl font-semibold text-dg-dark">
              Data Science &amp; Analytics
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              We help businesses turn complex data into clear insights that support smarter decisions.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Capabilities
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-gray-700 list-disc list-inside">
              <li>Data engineering and pipelines</li>
              <li>Advanced analytics and modeling</li>
              <li>Business intelligence dashboards</li>
              <li>Reporting and visualization</li>
              <li>Data strategy consulting</li>
            </ul>
          </div>

          {/* 4. Cloud & DevOps Engineering */}
          <div
            className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <h3 className="text-lg md:text-xl font-semibold text-dg-dark">
              Cloud &amp; DevOps Engineering
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-700">
              We build cloud-native systems that are resilient, cost-efficient, and ready to scale.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Our expertise includes
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-gray-700 list-disc list-inside">
              <li>Cloud architecture on AWS, Azure, and GCP</li>
              <li>CI/CD pipelines and automation</li>
              <li>Infrastructure as code</li>
              <li>Monitoring, performance tuning, and security</li>
            </ul>
          </div>

          {/* 5. UI/UX Design */}
          <div
            className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition md:col-span-2"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="400"
          >
            <div className="md:flex md:items-start md:justify-between gap-6">
              <div className="md:max-w-xl">
                <h3 className="text-lg md:text-xl font-semibold text-dg-dark">
                  UI/UX Design
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-700">
                  We create intuitive, elegant user experiences that align with business goals and user needs.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:min-w-[220px]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Design approach
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                  <li>User research and discovery</li>
                  <li>Wireframes and interactive prototypes</li>
                  <li>Design systems and UI libraries</li>
                  <li>Usability testing and iteration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceContent;
