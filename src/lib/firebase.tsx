"use client";

import { createContext, useContext, ReactNode } from "react";
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, FirebaseStorage } from "firebase/storage";

// This is a public configuration and is safe to include here.
const firebaseConfig = {
  apiKey: "AIzaSyAzNg83NB4SJHSg9BKHpW05J2pbb4nzEAc",
  authDomain: "studio-6663131171-dc932.firebaseapp.com",
  projectId: "studio-6663131171-dc932",
  storageBucket: "studio-6663131171-dc932.appspot.com",
  messagingSenderId: "562869782317",
  appId: "1:562869782317:web:0355ca5ef5641ca36235a4",
  measurementId: "G-Z52N1Z88DP"
};

type FirebaseContextType = {
  app: FirebaseApp | null;
  storage: FirebaseStorage | null;
};

const FirebaseContext = createContext<FirebaseContextType>({ app: null, storage: null });

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  let app: FirebaseApp;
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    if (typeof window !== "undefined") {
      getAnalytics(app);
    }
  } else {
    app = getApp();
  }

  const storage = getStorage(app);

  return (
    <FirebaseContext.Provider value={{ app, storage }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};
