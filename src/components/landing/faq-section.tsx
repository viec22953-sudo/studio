import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is the legal tint limit in Texas?",
        answer:
            "In Texas, the front windshield must allow 25% or more light through (above the AS-1 line). Front side windows must allow 25% light. Back side and rear windows can be any darkness. We'll make sure your tint is compliant.",
    },
    {
        question: "How long does installation take?",
        answer:
            "Most vehicles take 1.5 to 2.5 hours depending on the number of windows. Full-house residential jobs are typically done in a half day. We'll give you an accurate time estimate when you call.",
    },
    {
        question: "Can I roll my windows down right away?",
        answer:
            "We recommend waiting 3–5 days before rolling your windows down. This gives the adhesive time to fully cure. You may notice small water bubbles during this period — they'll disappear on their own.",
    },
    {
        question: "What's the difference between ceramic and dyed film?",
        answer:
            "Dyed film is our most affordable option — it looks great and blocks UV rays, but offers less heat rejection. Ceramic film uses nano-technology to block up to 96% of infrared heat without interfering with electronics. It costs more but performs significantly better.",
    },
    {
        question: "Do you offer a warranty?",
        answer:
            "Yes. Every install comes with a lifetime workmanship warranty for the original owner. The film itself is backed by the manufacturer's warranty, which ranges from 5 to 10 years depending on the product you choose.",
    },
    {
        question: "Do you do mobile / on-site installation?",
        answer:
            "We primarily work out of our shop in San Antonio for the best results, but we can discuss on-site options for fleet or commercial jobs. Give us a call and we'll figure out what works.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full py-20 md:py-28 lg:py-32">
            <div className="container max-w-3xl mx-auto px-4 md:px-6">
                <div className="text-center mb-14">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                        FAQ
                    </p>
                    <h2 className="font-headline text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
                        Common Questions
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-foreground/60 leading-relaxed font-light">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
