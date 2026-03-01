import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Marcus R.",
        rating: 5,
        text: "Best tint job in SA. No bubbles, no peeling, and the price was fair. My truck looks brand new.",
        service: "Automotive",
    },
    {
        name: "Diana L.",
        rating: 5,
        text: "Had our whole house done. Energy bill dropped noticeably the first month. Wish I'd done it sooner.",
        service: "Residential",
    },
    {
        name: "Carlos M.",
        rating: 5,
        text: "These guys are pros. In and out in under two hours. The ceramic film on my Camry is incredible — zero glare.",
        service: "Automotive",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="w-full py-20 md:py-28 lg:py-32 bg-card/50">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-14">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                        Reviews
                    </p>
                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
                        What Our Customers Say
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <Card
                            key={t.name}
                            className="flex flex-col transition-all duration-300 hover:scale-[1.02] hover:glow-amber-sm animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                        >
                            <CardContent className="pt-6 flex flex-col gap-4 flex-grow">
                                <StarRating rating={t.rating} />
                                <p className="text-foreground/70 leading-relaxed italic font-light">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                                <div className="mt-auto pt-4 border-t border-border">
                                    <p className="font-semibold text-sm">{t.name}</p>
                                    <p className="text-xs text-foreground/40 uppercase tracking-wider">{t.service}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
