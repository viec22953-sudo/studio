"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitQuote, type State } from "@/app/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Sending Request..." : "Get My Free Quote"}
    </Button>
  );
}

export default function QuoteSection() {
  const initialState: State = { message: null, errors: {}, success: false };
  const [state, dispatch] = useActionState(submitQuote, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Request a Free Quote
          </h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Fill out the form below, and we'll get back to you with a personalized quote as soon as possible.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <Card>
            <CardContent className="pt-6">
              <form ref={formRef} action={dispatch} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                    {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="(555) 555-5555" required type="tel" />
                    {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" placeholder="john@example.com" required type="email" />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Vehicle/Service Type</Label>
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
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="e.g., 2023 Tesla Model 3, all side windows and rear."
                    className="min-h-[100px]"
                    required
                  />
                  {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
