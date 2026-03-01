import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-team");

  const highlights = [
    "Locally owned & operated in San Antonio",
    "Precision installation by trained technicians",
    "Premium films from top manufacturers",
    "Lifetime workmanship warranty",
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-32 bg-card/50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              About Us
            </p>
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
              Built on Quality Work &amp; Repeat Customers
            </h2>
            <p className="text-foreground/60 md:text-lg leading-relaxed font-light">
              WinWin Window Tint was founded on one idea: do the job right, and people come back. We serve San Antonio with professional-grade window film installation for cars, homes, and businesses — no shortcuts, no upsells, just clean work.
            </p>
            <ul className="space-y-3.5 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/70">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={600}
                loading="lazy"
                className="rounded-xl object-contain aspect-square"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
