import { useEffect } from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceContent from '../components/services/ServiceContent';
import ServiceHowWeWork from '../components/services/ServiceHowWeWork';
import ServiceTechnology from '../components/services/ServiceTechnology';
import ServiceCaseStudies from '../components/services/ServiceCaseStudies';
import ServiceInsights from '../components/services/ServiceInsights';

function ServicesPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  return (
    <main className="bg-white">
      <ServiceHero />
      <ServiceContent />
      <ServiceHowWeWork />
      <ServiceTechnology />

      {/* Case Study & Insights */}
      <section className="py-12 md:py-16 bg-gray-50" data-aos="fade-up" data-aos-duration="800">
        <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 md:px-8 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          <ServiceCaseStudies />
          <ServiceInsights />
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;


