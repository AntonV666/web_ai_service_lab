import { useState } from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ProductsSection from './components/ProductsSection';
import HowItWorksSection from './components/HowItWorksSection';
import ServicesSection from './components/ServicesSection';
import AboutCtaSection from './components/AboutCtaSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import LegalPage from './components/LegalPage';
import SuccessPage from './components/SuccessPage';
import CookieNotice from './components/CookieNotice';
import YandexMetrika from './components/YandexMetrika';
import { reachGoal } from './analytics';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = window.location.pathname;

  const openContactModal = () => {
    reachGoal('contact_form_open');
    setIsContactOpen(true);
  };

  if (pathname === '/privacy') {
    return <LegalPage variant="privacy" />;
  }

  if (pathname === '/personal-data') {
    return <LegalPage variant="personal-data" />;
  }

  if (pathname === '/success') {
    return (
      <>
        <YandexMetrika />
        <SuccessPage />
        <CookieNotice />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header onOpenContact={openContactModal} />

      <main>
        <HeroSection onOpenContact={openContactModal} />
        <ProblemSection />
        <ServicesSection />
        <ProductsSection />
        <HowItWorksSection />
        <AboutCtaSection onOpenContact={openContactModal} />
      </main>

      <Footer onOpenContact={openContactModal} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <CookieNotice />
      <YandexMetrika />
    </div>
  );
}
