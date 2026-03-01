import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Car, Home, ShieldCheck, Star, Shield, Award, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    icon: Car,
    title: "Automotive",
    description:
      "Block UV rays, cut glare, and keep your interior cool. We tint everything from daily drivers to show cars.",
  },
  {
    icon: Home,
    title: "Home & Office",
    description:
      "Reduce energy costs, protect furniture from fading, and add privacy to any room — residential or commercial.",
  },
  {
    icon: ShieldCheck,
    title: "Ceramic Film",
    description:
      "Our top-tier ceramic films deliver max heat rejection with zero signal interference. The best film technology available.",
  },
];

const tiers = [
  {
    icon: Star,
    title: "Good",
    features: [
      "Gen 4 dyed film with factory-match color",
      "Never turns purple or fades",
      "Limited National Lifetime Warranty",
    ],
  },
  {
    icon: Shield,
    title: "Better",
    highlight: true,
    features: [
      "Nano ceramic on carbon technology",
      "Up to 80% infrared heat rejection",
      "99% UV rejection · No signal interference",
      "Limited National Lifetime Warranty",
    ],
  },
  {
    icon: Award,
    title: "Best",
    features: [
      "Dye-free nano carbon ceramic",
      "Up to 96% heat reduction",
      "99% UV protection · Won't fade",
      "Limited National Lifetime Warranty",
    ],
  },
];

export default function ServicesSection() {
  const guaranteeImage = PlaceHolderImages.find((img) => img.id === "guarantee-image");

  return (
    <section id="services" className="w-full py-20 md:py-28 lg:py-32">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            Services
          </p>
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            What We Offer
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {services.map((service) => (
            <Card
              key={service.title}
              className="text-center flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:glow-amber-sm"
            >
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3.5 rounded-full mb-4 w-fit">
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="font-headline text-lg uppercase tracking-wide">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm leading-relaxed font-light">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Film Tiers */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            Film Options
          </p>
          <h3 className="font-headline text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl">
            Good · Better · Best
          </h3>
          <p className="mt-3 text-foreground/50 max-w-lg mx-auto font-light">
            Choose the level of protection that fits your needs and budget.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {tiers.map((tier) => (
            <Card
              key={tier.title}
              className={`flex flex-col h-full transition-all duration-300 hover:scale-[1.02] ${tier.highlight ? 'border-primary/30 glow-amber-sm hover:glow-amber' : 'hover:glow-amber-sm'
                }`}
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 text-primary p-3.5 rounded-full mb-4 w-fit">
                  <tier.icon className="h-7 w-7" />
                </div>
                <CardTitle className="font-headline text-lg uppercase tracking-wide">{tier.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2.5 text-sm text-foreground/60">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5 text-xs">✓</span>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shades + Guarantee */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            {guaranteeImage && (
              <Image
                src={guaranteeImage.imageUrl}
                alt={guaranteeImage.description}
                width={800}
                height={600}
                loading="lazy"
                className="rounded-xl object-cover aspect-video"
                data-ai-hint={guaranteeImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-headline text-xl font-bold uppercase tracking-wide mb-2">Shade Selection</h3>
              <p className="text-foreground/60 leading-relaxed font-light">
                From 5% limo tint to 70% ultra-light, we carry a full range. Not sure which shade is right? We&apos;ll help you pick the perfect balance of style, comfort, and legality.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-2 mb-3">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h3 className="font-headline text-xl font-bold uppercase tracking-wide">Our Guarantee</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed font-light">
                Every install comes with a 100% satisfaction guarantee. If your tint fails due to our work or the film itself, we fix or replace it at no cost within the warranty period.
              </p>
              <p className="mt-3 text-sm text-foreground/40 font-light">
                Lifetime workmanship warranty for the original owner. Film backed by manufacturer&apos;s 5–10 year warranty depending on selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
