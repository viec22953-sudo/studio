import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star, ShieldCheck, Award, Phone } from "lucide-react";
import HeatSavingsCalculator from "./heat-savings-calculator";

const stats = [
  { value: "96%", label: "Heat Blocked" },
  { value: "99%", label: "UV Rejected" },
  { value: "$150+", label: "Monthly Savings" },
];

const trustBadges = [
  { icon: Star, text: "4.9 ★ Rated" },
  { icon: Award, text: "500+ Installs" },
  { icon: ShieldCheck, text: "Lifetime Warranty" },
];

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-car");

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          sizes="100vw"
          className="object-cover scale-105"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="absolute inset-0 bg-mesh-hero" />

      {/* Content */}
      <div className="relative container max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: PAS Copy */}
          <div className="space-y-8">
            {/* Trust Badges — Inline */}
            <div
              className="flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-foreground/50"
                >
                  <badge.icon className="h-3.5 w-3.5 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* PROBLEM — Headline */}
            <div
              className="space-y-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.25s" }}
            >
              <h1 className="font-headline text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
                <span className="text-foreground">San Antonio Heat Is</span>
                <br />
                <span className="text-gradient-amber">Costing You Money</span>
              </h1>
            </div>

            {/* AGITATE — Subheadline */}
            <p
              className="text-foreground/60 text-base md:text-lg leading-relaxed font-light max-w-xl animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              Every summer day without protection, UV rays silently crack your
              dash, fade your furniture, and add{" "}
              <span className="text-primary font-medium">$150+ to your electric bill</span>.
              The longer you wait, the more you lose.
            </p>

            {/* SOLUTION — Stat Counters */}
            <div
              className="flex flex-wrap gap-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.55s" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-headline text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Dual CTA */}
            <div
              className="flex flex-col sm:flex-row items-start gap-3 pt-2 animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              <Button
                asChild
                size="lg"
                className="text-base font-headline uppercase tracking-wider glow-amber hover:scale-105 transition-all duration-300"
              >
                <a href="#contact">Get Your Free Quote</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base font-headline uppercase tracking-wider border-foreground/20 hover:border-primary hover:text-primary transition-all duration-300"
              >
                <a href="tel:+12105550199" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Micro-copy */}
            <p
              className="text-foreground/30 text-xs font-light tracking-wide animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.85s" }}
            >
              Automotive · Residential · Commercial — Free estimates, same-week installs
            </p>
          </div>

          {/* Right: Heat Savings Calculator */}
          <div
            className="animate-fade-in-up opacity-0 hidden lg:block"
            style={{ animationDelay: "0.5s" }}
          >
            <HeatSavingsCalculator />
          </div>
        </div>
      </div>

      {/* Mobile Calculator — below hero copy for smaller screens */}
      <div className="absolute bottom-0 left-0 right-0 lg:hidden">
        {/* Fade gradient into next section */}
        <div className="h-8 bg-gradient-to-b from-transparent to-background" />
      </div>
    </section>
  );
}
