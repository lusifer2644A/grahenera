import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user, logOut } = useAuth();

  useEffect(() => {
    async function logout() {
      await logOut();
    }

    if (!user.uid) {
      console.log("protected Route", user);
      router.push("/login");
      // logout();
    }
  }, [router, user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
