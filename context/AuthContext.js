import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    uid: true,
    accessToken: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          accessToken: user.accessToken,
        });
      } else {
        setUser({ email: null, uid: null, accessToken: null });
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  console.log(user);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setUser({ email: null, uid: null, accessToken: null });
    // sessionStorage.removeItem("parisharam_test");
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signUp, logIn, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
