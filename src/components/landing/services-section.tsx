
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Car, Home, ShieldCheck, BadgeCheck, Star, Shield, Award } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ServicesSection() {
  const guaranteeImage = PlaceHolderImages.find((img) => img.id === "guarantee-image");

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-full px-4 md:px-6 flex flex-col items-center">
        <div className="space-y-2 mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From your daily driver to your corner office, we've got you covered with premium tinting solutions.
          </p>
        </div>
        <div className="grid items-start justify-center gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <Card className="text-center flex flex-col h-full max-w-sm mx-auto">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <Car className="h-8 w-8" />
              </div>
              <CardTitle>Automotive Tinting</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>
                Protect your vehicle's interior from harmful UV rays, reduce heat and glare, and enhance your privacy and security on the road.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center flex flex-col h-full max-w-sm mx-auto">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <Home className="h-8 w-8" />
              </div>
              <CardTitle>Home & Office Tinting</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>
                Lower energy costs, increase comfort, privacy, and protect your furniture from fading. Ideal for both residential and commercial properties.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center flex flex-col h-full max-w-sm mx-auto">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <CardTitle>Ceramic Film Options</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>
                Choose our top-of-the-line ceramic films for maximum heat rejection without interfering with electronic signals. The ultimate in performance and clarity.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center flex flex-col h-full max-w-sm mx-auto">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <Star className="h-8 w-8" />
              </div>
              <CardTitle>Good</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>
                Our standard tint provides excellent UV protection and privacy, a great starting point for any vehicle.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center flex flex-col h-full max-w-sm mx-auto">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <Shield className="h-8 w-8" />
              </div>
              <CardTitle>Better</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>
                Upgrade to our mid-tier tint for enhanced heat rejection and durability, balancing performance and value.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center flex flex-col h-full max-w-sm mx-auto">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <Award className="h-8 w-8" />
              </div>
              <CardTitle>Best</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>
                Dye-free nano carbon ceramic Reduces heat up to 96% Blocks 99% of harmful UV rays. Guaranteed never to fade. Matches most factory tint. No signal interference. Limited National Lifetime Warranty.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start container">
          <div className="space-y-4">
             {guaranteeImage && (
              <Image
                src={guaranteeImage.imageUrl}
                alt={guaranteeImage.description}
                width={800}
                height={600}
                className="rounded-xl object-cover aspect-video"
                data-ai-hint={guaranteeImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col items-start text-left space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-secondary-foreground">
                <span className="font-semibold">We offer a wide selection of shades to choose from</span>
            </div>
            <p className="text-lg text-foreground/80">
                From 5% limo tint to 70% ultra-light, we’ve got every option to match your style, comfort, and privacy needs.
            </p>
            <p className="text-secondary-foreground font-bold">Need Help Choosing?</p>
            <p className="text-foreground/80">
                Not sure which shade is right for you? We’ll help you find the perfect balance of style, comfort, and legality for your vehicle.
            </p>
          </div>
          <div className="flex flex-col items-center text-center lg:col-span-2 mt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <BadgeCheck className="h-5 w-5" />
            <span className="font-semibold">Our Guarantee</span>
            </div>
            <p className="mt-4 text-lg text-foreground/80">
            Only winners come to WinWin — and winners get guaranteed results. Every tint we install comes with a 100% satisfaction guarantee. If your tint fails because of our work or the film itself, we’ll fix or replace it at no cost within the warranty period. Life happens, but when it comes to our craftsmanship, we don’t play around. WinWin means you win twice — once with great tint, and again with peace of mind.
            </p>
            <p className="mt-4 text-sm text-foreground/60">
            Our work is covered by a lifetime workmanship warranty for the original owner. Tint films are backed by the manufacturer’s 5–10 year warranty, depending on the film selected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
