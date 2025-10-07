import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Car, Home, ShieldCheck } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From your daily driver to your corner office, we've got you covered with premium tinting solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <Car className="h-8 w-8" />
              </div>
              <CardTitle>Automotive Tinting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Protect your vehicle's interior from harmful UV rays, reduce heat and glare, and enhance your privacy and security on the road.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <Home className="h-8 w-8" />
              </div>
              <CardTitle>Home & Office Tinting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Lower energy costs, increase comfort, and protect your furniture from fading. Ideal for both residential and commercial properties.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <CardTitle>Ceramic Film Options</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Choose our top-of-the-line ceramic films for maximum heat rejection without interfering with electronic signals. The ultimate in performance and clarity.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
