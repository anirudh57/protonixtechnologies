const cardClass =
  "rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] p-5 md:p-6 shadow-[0_0_24px_rgba(180,120,60,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(200,140,80,0.2),0_8px_24px_rgba(0,0,0,0.25)] hover:border-amber-700/50";
const textClass = "text-[#e5e0d8]";
const textMutedClass = "text-[#e5e0d8]/80";
const labelClass = "text-xs font-semibold uppercase tracking-[0.18em] text-[#e5e0d8]/70";
const listClass = "mt-2 space-y-1.5 text-sm text-[#e5e0d8]/80 list-disc list-inside";

function ServiceContent() {
  return (
    <section className="bg-gradient-to-r from-[#1a1510] to-[#0a0806] py-12 md:py-16" data-aos="fade-up" data-aos-duration="800">
      <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e5e0d8]/80">
          What we do
        </h2>
        <p className="mt-2 text-2xl md:text-3xl font-light text-[#e5e0d8]">
          Services built to support every stage of your product.
        </p>

        <div className="mt-8 grid gap-6 md:gap-8 md:grid-cols-2">
          {/* 1. Product & Web Application Development */}
          <div className={cardClass} data-aos="fade-up" data-aos-duration="700" data-aos-delay="0">
            <h3 className={`text-lg md:text-xl font-semibold ${textClass}`}>
              Product &amp; Web Application Development
            </h3>
            <p className={`mt-2 text-sm md:text-base ${textMutedClass}`}>
              We design and engineer high-performance web applications that are secure, scalable, and built to evolve
              with your business.
            </p>
            <p className={`mt-3 ${labelClass}`}>What we build</p>
            <ul className={listClass}>
              <li>Startup MVPs and product platforms</li>
              <li>SaaS applications</li>
              <li>Internal tools and admin dashboards</li>
              <li>API-first systems and integrations</li>
              <li>Performance, scalability, and security enhancements</li>
            </ul>
          </div>

          {/* 2. AI & Machine Learning Solutions */}
          <div className={cardClass} data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            <h3 className={`text-lg md:text-xl font-semibold ${textClass}`}>
              AI &amp; Machine Learning Solutions
            </h3>
            <p className={`mt-2 text-sm md:text-base ${textMutedClass}`}>
              We apply artificial intelligence to real business problems, helping organizations automate, predict, and
              optimize.
            </p>
            <p className={`mt-3 ${labelClass}`}>Key solutions</p>
            <ul className={listClass}>
              <li>Predictive analytics and forecasting</li>
              <li>Intelligent chatbots and virtual assistants</li>
              <li>Recommendation and personalization engines</li>
              <li>Natural language processing (NLP)</li>
              <li>Computer vision solutions</li>
            </ul>
          </div>

          {/* 3. Data Science & Analytics */}
          <div className={cardClass} data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
            <h3 className={`text-lg md:text-xl font-semibold ${textClass}`}>
              Data Science &amp; Analytics
            </h3>
            <p className={`mt-2 text-sm md:text-base ${textMutedClass}`}>
              We help businesses turn complex data into clear insights that support smarter decisions.
            </p>
            <p className={`mt-3 ${labelClass}`}>Capabilities</p>
            <ul className={listClass}>
              <li>Data engineering and pipelines</li>
              <li>Advanced analytics and modeling</li>
              <li>Business intelligence dashboards</li>
              <li>Reporting and visualization</li>
              <li>Data strategy consulting</li>
            </ul>
          </div>

          {/* 4. Cloud & DevOps Engineering */}
          <div className={cardClass} data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
            <h3 className={`text-lg md:text-xl font-semibold ${textClass}`}>
              Cloud &amp; DevOps Engineering
            </h3>
            <p className={`mt-2 text-sm md:text-base ${textMutedClass}`}>
              We build cloud-native systems that are resilient, cost-efficient, and ready to scale.
            </p>
            <p className={`mt-3 ${labelClass}`}>Our expertise includes</p>
            <ul className={listClass}>
              <li>Cloud architecture on AWS, Azure, and GCP</li>
              <li>CI/CD pipelines and automation</li>
              <li>Infrastructure as code</li>
              <li>Monitoring, performance tuning, and security</li>
            </ul>
          </div>

          {/* 5. UI/UX Design */}
          <div className={`${cardClass} md:col-span-2`} data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
            <div className="md:flex md:items-start md:justify-between gap-6">
              <div className="md:max-w-xl">
                <h3 className={`text-lg md:text-xl font-semibold ${textClass}`}>UI/UX Design</h3>
                <p className={`mt-2 text-sm md:text-base ${textMutedClass}`}>
                  We create intuitive, elegant user experiences that align with business goals and user needs.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:min-w-[220px]">
                <p className={labelClass}>Design approach</p>
                <ul className={listClass}>
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
