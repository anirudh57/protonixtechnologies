import { useEffect } from 'react';
import { useResponsive } from '../../../utils/useResponsive';

const services = [
  {
    title: 'Mobile Application Development',
    description: 'Intuitive and high-performance mobile applications that connect your business with customers on the go',
    delay: 300,
  },
  {
    title: 'Web Application Development',
    description: 'Focusing on building robust, scalable, and secure solutions tailored to your business needs',
    delay: 600,
  },
  {
    title: 'UI / UX Design',
    description: 'Creating visually stunning and aesthetically pleasing but also intuitive, ensuring a seamless interaction with your digital products',
    delay: 900,
  },
  {
    title: 'Software Consultation',
    description: 'Provide expert guidance to help you navigate the complexities of technology',
    delay: 900,
  },
];

function Section03() {
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  return (
    <section className="my-8">
      <div className="px-4 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl text-center lg:py-12 lg:px-12 h-full content-center">
        <div className="md:px-4 mx-auto text-center md:max-w-screen-md lg:max-w-full">
          <h2 className="font-light text-3xl md:text-6xl text-dg-dark uppercase">
            OUR SERVICES
          </h2>

          {isMobile ? (
            <>
              <div className="mt-4">
                {services.map((service) => (
                  <div
                    key={service.title}
                    data-aos="fade-in"
                    data-aos-duration="2500"
                    data-aos-delay={service.delay}
                    className="grid grid-cols-1 md:grid-cols-2 border border-dg-dark p-8 mx-0 mb-8 bg-white w-full shadow-[0px_6px_0px_0px] shadow-dg-blue"
                  >
                    <div className="my-auto text-left">
                      <h3 className="text-xl md:text-2xl">{service.title}</h3>
                    </div>
                    <div className="my-auto text-left">
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="mb-8 font-light sm:px-16 lg:px-24 2xl:px-48 my-4 md:my-8 text-justify lg:text-center">
                At Digient, our services are designed to transform your vision into reality through innovative and bespoke digital solutions. We approach every project with a commitment to excellence, ensuring that each service we offer is precisely tailored to meet the unique demands of your business. By leveraging the latest technologies and industry best practices, we provide solutions that are not only functional but also future-ready, empowering your brand to thrive in a competitive marketplace.
              </p>

              <div className="mt-4">
                {services.map((service) => (
                  <div
                    key={service.title}
                    data-aos="fade-in"
                    data-aos-duration="2500"
                    data-aos-delay={service.delay}
                    className="grid grid-cols-1 md:grid-cols-2 border border-dg-dark p-8 mr-6 mb-8 bg-white w-full shadow-[8px_6px_0px_0px] shadow-dg-blue"
                  >
                    <div className="my-auto text-left">
                      <h3 className="text-xl md:text-2xl">{service.title}</h3>
                    </div>
                    <div className="my-auto text-left">
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Section03;

