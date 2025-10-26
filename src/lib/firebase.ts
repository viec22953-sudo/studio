import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzNg83NB4SJHSg9BKHpW05J2pbb4nzEAc",
  authDomain: "studio-6663131171-dc932.firebaseapp.com",
  projectId: "studio-6663131171-dc932",
  storageBucket: "studio-6663131171-dc932.appspot.com",
  messagingSenderId: "562869782317",
  appId: "1:562869782317:web:0355ca5ef5641ca36235a4",
  measurementId: "G-Z52N1Z88DP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage(app);

export { app, storage };
