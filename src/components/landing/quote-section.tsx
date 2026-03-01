
"use client";

import { useState, useRef, type FormEvent } from "react";
import { validateQuoteClient, type State } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

export default function QuoteSection() {
  const [state, setState] = useState<State>({ message: null, errors: {}, success: false });
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const result = await validateQuoteClient(formData);
    setState(result);
    setPending(false);

    if (result.message) {
      if (result.success) {
        toast({ title: "Request Sent", description: result.message });
        formRef.current?.reset();
      } else {
        toast({ title: "Error", description: result.message, variant: "destructive" });
      }
    }
  }

  return (
    <section id="contact" className="w-full py-20 md:py-28 lg:py-32 bg-card/50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Info */}
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                Contact
              </p>
              <h2 className="font-headline text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
                Get a Free Quote
              </h2>
              <p className="mt-4 text-foreground/60 leading-relaxed font-light">
                Tell us about your vehicle or property and we&apos;ll get back to you with a quote — usually within a few hours.
              </p>
            </div>
            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary p-2.5 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 uppercase tracking-wider">Call or text</p>
                  <p className="font-semibold">(210) 555-0199</p>
                </div>
              </div>
              <p className="text-sm text-foreground/40 font-light">
                Mon–Sat, 9am – 6pm · San Antonio, TX
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <Card className="glow-amber-sm">
            <CardContent className="pt-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase tracking-wider">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                    {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs uppercase tracking-wider">Phone</Label>
                    <Input id="phone" name="phone" placeholder="(210) 555-0199" required type="tel" />
                    {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider">Email</Label>
                  <Input id="email" name="email" placeholder="you@email.com" required type="email" />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType" className="text-xs uppercase tracking-wider">Service Type</Label>
                  <Select name="serviceType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automotive">Automotive Tinting</SelectItem>
                      <SelectItem value="residential">Residential Tinting</SelectItem>
                      <SelectItem value="commercial">Commercial Tinting</SelectItem>
                    </SelectContent>
                  </Select>
                  {state.errors?.serviceType && <p className="text-sm text-destructive">{state.errors.serviceType[0]}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs uppercase tracking-wider">Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="e.g., 2024 Tesla Model 3, all side windows and rear windshield"
                    className="min-h-[100px]"
                    required
                  />
                  {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                </div>
                <Button
                  type="submit"
                  className="w-full font-headline uppercase tracking-wider text-base glow-amber-sm hover:glow-amber transition-all duration-300"
                  disabled={pending}
                >
                  {pending ? "Sending..." : "Submit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
