import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import TrustBar from '@/components/landing/trust-bar';
import AboutSection from '@/components/landing/about-section';
import ServicesSection from '@/components/landing/services-section';
import HowItWorksSection from '@/components/landing/how-it-works-section';
import GallerySection from '@/components/landing/gallery-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import FAQSection from '@/components/landing/faq-section';
import QuoteSection from '@/components/landing/quote-section';
import Footer from '@/components/landing/footer';
import FloatingCTA from '@/components/landing/floating-cta';
import HeatSavingsCalculator from '@/components/landing/heat-savings-calculator';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Mobile-only calculator — hidden on lg where it's inline in the hero */}
        <section className="lg:hidden w-full py-12 px-4">
          <div className="container max-w-md mx-auto">
            <HeatSavingsCalculator />
          </div>
        </section>
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <QuoteSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}