import { Phone, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
    {
        icon: Phone,
        step: "1",
        title: "Call or Text",
        description: "Reach out and tell us what you need — car, home, or office.",
    },
    {
        icon: CalendarCheck,
        step: "2",
        title: "Schedule",
        description: "We'll set up a time that works for you. Most jobs are same-week.",
    },
    {
        icon: Sparkles,
        step: "3",
        title: "Get Tinted",
        description: "We handle the install. You drive away (or sit back) with a clean result.",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="w-full py-20 md:py-28 lg:py-32 bg-card/50">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-14">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                        Process
                    </p>
                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
                        How It Works
                    </h2>
                    <p className="mt-3 text-foreground/50 max-w-md mx-auto font-light">
                        Three steps. No hassle.
                    </p>
                </div>
                <div className="grid gap-10 md:grid-cols-3 md:gap-8">
                    {steps.map((s, i) => (
                        <div
                            key={s.step}
                            className="flex flex-col items-center text-center space-y-5 animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${0.15 + i * 0.15}s` }}
                        >
                            <div className="relative">
                                <div className="bg-primary/10 text-primary p-5 rounded-full transition-all duration-300 hover:glow-amber">
                                    <s.icon className="h-8 w-8" />
                                </div>
                                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-headline font-bold w-7 h-7 rounded-full flex items-center justify-center">
                                    {s.step}
                                </span>
                            </div>
                            <h3 className="font-headline text-lg font-bold uppercase tracking-wide">{s.title}</h3>
                            <p className="text-foreground/50 text-sm leading-relaxed max-w-[240px] font-light">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
