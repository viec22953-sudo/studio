import { ShieldCheck, Award, Star } from "lucide-react";

const badges = [
    { icon: ShieldCheck, label: "Insured & Bonded" },
    { icon: Star, label: "5-Star Google Rated" },
    { icon: Award, label: "Lifetime Warranty" },
];

const brands = ["3M", "XPEL", "SunTek", "LLumar", "Ceramic Pro", "GeoShield"];

export default function TrustBar() {
    return (
        <section className="w-full py-5 border-y border-border/50 bg-card/50">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {badges.map((badge) => (
                            <div key={badge.label} className="flex items-center gap-2 text-xs uppercase tracking-wider text-foreground/60">
                                <badge.icon className="h-4 w-4 text-primary" />
                                <span className="font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:block w-px h-5 bg-border/60" />
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <span className="text-[10px] text-foreground/30 uppercase tracking-[0.2em]">Films we use</span>
                        {brands.map((brand) => (
                            <span key={brand} className="text-xs font-headline font-bold text-foreground/40 uppercase tracking-wider">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
