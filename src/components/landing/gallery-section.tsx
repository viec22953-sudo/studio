import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
  {
    beforeId: "gallery-car-before-1",
    afterId: "gallery-car-after-1",
    title: "Luxury Sedan",
  },
  {
    beforeId: "gallery-house-before-1",
    afterId: "gallery-house-after-1",
    title: "Modern Home",
  },
  {
    beforeId: "gallery-office-before-1",
    afterId: "gallery-office-after-1",
    title: "Commercial Building",
  },
];

// Pre-compute image map to avoid O(n) lookups per render
const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img]));

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full py-20 md:py-28 lg:py-32">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            Our Work
          </p>
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            See the Difference
          </h2>
          <p className="mt-3 text-foreground/50 max-w-md mx-auto font-light">
            Real results from recent installs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item) => {
            const before = imageMap.get(item.beforeId);
            const after = imageMap.get(item.afterId);

            return (
              <div key={item.title} className="space-y-4">
                <h3 className="font-headline text-base font-semibold text-center uppercase tracking-wider">{item.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {before && (
                    <div className="space-y-2">
                      <Card className="overflow-hidden transition-transform duration-300 hover:scale-[1.03]">
                        <CardContent className="p-0">
                          <Image
                            src={before.imageUrl}
                            alt={`Before tinting - ${item.title}`}
                            width={400}
                            height={300}
                            loading="lazy"
                            className="aspect-[4/3] object-cover w-full"
                            data-ai-hint={before.imageHint}
                          />
                        </CardContent>
                      </Card>
                      <p className="text-[10px] font-medium text-foreground/40 text-center uppercase tracking-[0.2em]">
                        Before
                      </p>
                    </div>
                  )}
                  {after && (
                    <div className="space-y-2">
                      <Card className="overflow-hidden border-primary/20 transition-all duration-300 hover:scale-[1.03] hover:glow-amber-sm">
                        <CardContent className="p-0">
                          <Image
                            src={after.imageUrl}
                            alt={`After tinting - ${item.title}`}
                            width={400}
                            height={300}
                            loading="lazy"
                            className="aspect-[4/3] object-cover w-full"
                            data-ai-hint={after.imageHint}
                          />
                        </CardContent>
                      </Card>
                      <p className="text-[10px] font-bold text-primary text-center uppercase tracking-[0.2em]">
                        After
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
