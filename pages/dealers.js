import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageNav from "@/components/pageNavigation/PageNav";
import Head from "next/head";
import styles from "@/styles/dealers.module.scss";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const home = () => {
  const [state, setState] = useState([]);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <Head>
        <title>Graphene Pro - Dealer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo_sm.png" />
      </Head>
      <main className="main">
        <Navbar />
        <PageNav title="Dealers" />
        <div className={styles.dealers}>
          <div className={styles.dealersMap}>
            <div className={styles.dealerMapArea}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.36970047322!2d84.55366685!3d23.03873255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ae8df9621dc77%3A0xe25d846f5980c77d!2sGumla%20Weekly%20Market!5e0!3m2!1sen!2sin!4v1678988783867!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className={styles.dealerInfo}></div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default home;
