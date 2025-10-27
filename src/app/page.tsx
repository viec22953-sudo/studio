import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import AboutSection from '@/components/landing/about-section';
import ServicesSection from '@/components/landing/services-section';
import GallerySection from '@/components/landing/gallery-section';
import QuoteSection from '@/components/landing/quote-section';
import Footer from '@/components/landing/footer';
import FloatingCTA from '@/components/landing/floating-cta';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <QuoteSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}