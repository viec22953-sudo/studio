import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-team");
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-left">
              Expert Service for Unmatched Protection
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left">
              At <span className="text-primary font-bold">WinWin</span> Window Tint, we are dedicated to providing our clients
              with the highest quality window films and installation services.
              Our expert technicians use precision techniques to ensure a
              flawless finish every time. We believe in enhancing your comfort
              and security, whether you're on the road or in your home,
              delivering a win-win solution for every customer.
            </p>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="rounded-xl object-cover aspect-video"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
