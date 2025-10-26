import admin from 'firebase-admin';

// This is the recommended way to initialize the Admin SDK in a server environment
// where Application Default Credentials are available.
// https://firebase.google.com/docs/admin/setup#initialize-sdk
const firebaseConfig = {
  projectId: "studio-6663131171-dc932",
  storageBucket: "studio-6663131171-dc932.appspot.com",
};

let app: admin.app.App;
if (admin.apps.length === 0) {
  app = admin.initializeApp(firebaseConfig);
} else {
  app = admin.app();
}

export const adminApp = app;
export const adminStorage = app.storage();
