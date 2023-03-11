// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const env = process.env.NODE_ENV;
const firebaseConfig = {
  apiKey: "AIzaSyAh3f2uGggHYVlK9R16TTfMImOUFz33QZ4",
  authDomain: "graphene-pro.firebaseapp.com",
  projectId: "graphene-pro",
  storageBucket: "graphene-pro.appspot.com",
  messagingSenderId: "717871947950",
  appId: "1:717871947950:web:56d0e195292908860dcd3f",
  measurementId: "G-JR0475BX77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
export const auth = getAuth();
