import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.PRIVATE_FIREBASE_KEY,
      projectId: process.env.PRIVATE_FIREBASE_PROJECT_ID,
      clientEmail: process.env.PRIVATE_FIREBASE_CLIENT_EMAIL,
    }),
  });
}

export { firebaseAdmin };
