import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const GeneralRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user.accessToken) {
      router.push("/dashboard");
    }
  }, [router, user]);
  return <div>{user ? children : null}</div>;
};

export default GeneralRoute;
