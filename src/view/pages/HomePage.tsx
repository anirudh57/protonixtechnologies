import { useState } from 'react';
import Hero from '../components/home/Hero';
import OurDomain from '../components/home/WhyCompanyChooseUs';
import WhatWeDo from '../components/home/WhatWeDo';
// import OurServices from '../components/home/OurServices';
import InHouse from '../components/home/InHouse';
import GetInTouch from '../components/home/GetInTouch';
import QuoteDrawer from '../../layout/QuoteDrawer';

function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('Explore Our Capabilities');
  const [drawerBtnLabel, setDrawerBtnLabel] = useState('Get a Quote');

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = (title: string, btnLabel: string) => {
    // update content
    setDrawerTitle(title);
    setDrawerBtnLabel(btnLabel);
    // ensure close then open (in case we want to retrigger)
    closeDrawer();
    setTimeout(() => {
      setIsDrawerOpen(true);
    }, 0);
  };

  return (
    <>
      <Hero onOpenQuoteDrawer={openDrawer} />
      <WhatWeDo />
      <OurDomain />
      {/* <OurServices /> */}
      <InHouse />
      <GetInTouch onOpenQuoteDrawer={openDrawer} />
      <QuoteDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        title={drawerTitle}
        btnLabel={drawerBtnLabel}
      />
    </>
  );
}

export default HomePage;


