import { useEffect } from 'react';

interface GetInTouchProps {
  onOpenQuoteDrawer: (title: string, btnLabel: string) => void;
}

function Section05({ onOpenQuoteDrawer }: GetInTouchProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);

  return (
    <>
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#1a1510] to-[#0a0806]">
        <div className="px-4 mx-auto max-w-3xl text-center">
          <h2 className="font-light text-3xl md:text-5xl lg:text-6xl text-[#e5e0d8] uppercase tracking-tight">
            Get in touch
          </h2>
          <p className="mt-6 text-sm md:text-lg font-light text-[#e5e0d8]/80 max-w-xl mx-auto">
            Looking for a reliable technology partner to bring your idea to life or scale your product?
          </p>
          <div className="mt-10 flex justify-center">
            <button
              id="get-in-touch"
              onClick={() =>
                onOpenQuoteDrawer("Talk to Our Team", "Contact Our Team")
              }
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="inline-flex items-center justify-center rounded-xl border border-amber-600/60 bg-gradient-to-br from-[#2d2218] to-[#1a1510] px-10 py-4 md:px-14 md:py-5 text-base md:text-lg font-medium text-[#e5e0d8] shadow-[0_0_24px_rgba(180,120,60,0.12)] transition-all duration-300 hover:border-amber-500/70 hover:shadow-[0_0_32px_rgba(200,140,80,0.2)] hover:-translate-y-0.5"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section05;

