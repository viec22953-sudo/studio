import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function GallerySection() {
  const imagePairs = [
    {
      before: PlaceHolderImages.find((img) => img.id === "gallery-car-before-1"),
      after: PlaceHolderImages.find((img) => img.id === "gallery-car-after-1"),
      title: "Luxury Sedan"
    },
    {
      before: PlaceHolderImages.find((img) => img.id === "gallery-house-before-1"),
      after: PlaceHolderImages.find((img) => img.id === "gallery-house-after-1"),
      title: "Modern Home"
    },
    {
      before: PlaceHolderImages.find((img) => img.id === "gallery-office-before-1"),
      after: PlaceHolderImages.find((img) => img.id === "gallery-office-after-1"),
      title: "Commercial Building"
    },
  ];

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="w-full flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            See the Difference
          </h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our work speaks for itself. Check out these transformations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {imagePairs.map((pair, index) => (
            <div key={index} className="space-y-4">
               <h3 className="text-xl font-bold">{pair.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {pair.before && (
                  <div className="space-y-2">
                    <Card>
                      <CardContent className="p-0">
                        <Image
                          src={pair.before.imageUrl}
                          alt={`Before tinting - ${pair.title}`}
                          width={400}
                          height={300}
                          className="aspect-video overflow-hidden rounded-lg object-cover"
                          data-ai-hint={pair.before.imageHint}
                        />
                      </CardContent>
                    </Card>
                    <p className="text-sm font-semibold text-foreground/80">Before</p>
                  </div>
                )}
                {pair.after && (
                  <div className="space-y-2">
                    <Card>
                      <CardContent className="p-0">
                        <Image
                          src={pair.after.imageUrl}
                          alt={`After tinting - ${pair.title}`}
                          width={400}
                          height={300}
                          className="aspect-video overflow-hidden rounded-lg object-cover"
                          data-ai-hint={pair.after.imageHint}
                        />
                      </CardContent>
                    </Card>
                    <p className="text-sm font-bold text-primary">After</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
