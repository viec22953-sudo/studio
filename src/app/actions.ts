"use client";

import { z } from "zod";
import { initializeFirebase } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

// ---------------------------------------------------------------------------
// Simple client-side rate limiter
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

let requestTimestamps: number[] = [];

function isRateLimited(): boolean {
  const now = Date.now();
  requestTimestamps = requestTimestamps.filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (requestTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  requestTimestamps.push(now);
  return false;
}

// ---------------------------------------------------------------------------
// Validation schema
// ---------------------------------------------------------------------------
const QuoteSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  serviceType: z.enum(["automotive", "residential", "commercial"], {
    errorMap: () => ({ message: "Please select a service type." }),
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message cannot exceed 500 characters." }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    serviceType?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function validateQuoteClient(
  formData: FormData
): Promise<State> {
  // --- Rate-limit check ---
  if (isRateLimited()) {
    return {
      message:
        "Too many requests. Please wait a minute before submitting again.",
      success: false,
    };
  }

  const validatedFields = QuoteSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceType: formData.get("serviceType"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
      success: false,
    };
  }

  try {
    const { firestore } = initializeFirebase();
    await addDoc(collection(firestore, "contacts"), {
      ...validatedFields.data,
      createdAt: new Date(),
    });
    return {
      message: "Success! Your quote request has been sent.",
      success: true,
    };
  } catch (e: any) {
    console.error("Error adding document: ", e);
    return {
      message:
        "Database error: Could not save your quote. Please try again later.",
      success: false,
    };
  }
}
