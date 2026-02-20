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
    <section className="my-16">
  <div className="px-4 mx-auto max-w-3xl text-center">
    
    {/* Heading */}
    <h2 className="font-light text-3xl md:text-6xl text-dg-dark uppercase">
      Call to Action
    </h2>

    {/* Description */}
    <p className="mt-6 text-sm md:text-lg font-light text-gray-600">
      Looking for a reliable technology partner to bring your idea to life or scale your product?
    </p>

    {/* Button */}
    <div className="mt-10 flex justify-center">
      <button
        id="get-in-touch"
        onClick={() =>
          onOpenQuoteDrawer("Talk to Our Team", "Contact Our Team")
        }
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="inline-flex items-center justify-center rounded-full bg-digient-dark px-10 py-4 md:px-14 md:py-5 text-base md:text-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[#00b8d4]"
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

