import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import HomePage from '../view/pages/HomePage';
import AboutUsPage from '../view/pages/AboutUsPage';
import ServicesPage from '../view/pages/ServicesPage';
import ContactUsPage from '../view/pages/ContactUsPage';
import CareersPage from '../view/pages/CareersPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/about-us" element={<MainLayout><AboutUsPage /></MainLayout>} />
      <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
      <Route path="/contact-us" element={<MainLayout><ContactUsPage /></MainLayout>} />
      <Route path="/careers" element={<MainLayout><CareersPage /></MainLayout>} />
    </Routes>
  );
}

export default AppRoutes;


