import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        {" "}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}
