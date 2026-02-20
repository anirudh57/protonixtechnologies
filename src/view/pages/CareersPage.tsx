import { useEffect } from 'react';
import CareerHero from '../components/careers/CareerHero';
import CareerWhyWeWork from '../components/careers/CareerWhyWeWork';
import CareerContact from '../components/careers/CareerContact';


function CareersPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
    }
  }, []);
  return (
    <>
    <CareerHero />
    <CareerWhyWeWork />
    <CareerContact />
    </>
  );
}

export default CareersPage;


