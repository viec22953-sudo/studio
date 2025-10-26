"use server";

import { z } from "zod";
import { getStorage, ref, uploadString } from "firebase/storage";
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzNg83NB4SJHSg9BKHpW05J2pbb4nzEAc",
  authDomain: "studio-6663131171-dc932.firebaseapp.com",
  projectId: "studio-6663131171-dc932",
  storageBucket: "studio-6663131171-dc932.appspot.com",
  messagingSenderId: "562869782317",
  appId: "1:562869782317:web:0355ca5ef5641ca36235a4",
  measurementId: "G-Z52N1Z88DP"
};

// Helper to initialize Firebase App singleton
const getFirebaseApp = () => {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
};


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

export async function submitQuote(
  prevState: State,
  formData: FormData
): Promise<State> {
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
    const app = getFirebaseApp();
    const storage = getStorage(app);
    const fileName = `leads/${Date.now()}-${validatedFields.data.name.replace(/\s+/g, '-')}.json`;
    const storageRef = ref(storage, fileName);
    const dataString = JSON.stringify(validatedFields.data, null, 2);

    await uploadString(storageRef, dataString, 'raw', {
      contentType: 'application/json'
    });
    
    return {
      message: "Thank you! Your quote request has been sent.",
      success: true,
    };
  } catch (e: any) {
    console.error("Error uploading to storage: ", e);
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
    };
  }
}
