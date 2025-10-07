import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-car");

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] max-h-[700px] flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="relative container px-4 md:px-6 text-center space-y-6">
        <h1 className="text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-primary">Enhance.</span> Protect.{" "}
          <span className="text-foreground">WinWin.</span>
        </h1>
        <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
          The ultimate upgrade for your vehicle, home, or office. Experience superior heat rejection, privacy, and style.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link href="#contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
