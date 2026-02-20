import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // Update canonical URL on route change
    const cleanUrl = window.location.href.split('?')[0].replace(/[?&]utm_[^&]+/g, '');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', cleanUrl);
  }, [location]);

  useEffect(() => {
    // Initialize / refresh AOS on route change so pages with data-aos are visible
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init();
      (window as any).AOS.refresh();
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;


