import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import ProductCard from "@/components/card/ProductCard";
import { useEffect, useState } from "react";
import NewsCard from "@/components/card/NewsCard";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import axios from "axios";

const allProduct = [
  {
    title: "Graphene Ceramic Coating (Black)",
    short_description:
      "Available in two forms which is a ready to go solution for your car.",
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTKvjx25fNvCcjHxy8SD4FUJQyj7Bhueeg74PqVQV463_YB2UtyHWgVQq5dCuN3wGSnaq-r9GafXxWYdsETh87HSaO8=w1267-h952",
  },
  {
    title: "Graphene Ceramic Coating (Blue)",
    short_description:
      "Available in two forms which is a ready to go solution for your car.",
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTKvjx25fNvCcjHxy8SD4FUJQyj7Bhueeg74PqVQV463_YB2UtyHWgVQq5dCuN3wGSnaq-r9GafXxWYdsETh87HSaO8=w1267-h952",
  },
  {
    title: "Graphene Ceramic Coating (White)",
    short_description:
      "Available in two forms which is a ready to go solution for your car.",
    img: "https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTKvjx25fNvCcjHxy8SD4FUJQyj7Bhueeg74PqVQV463_YB2UtyHWgVQq5dCuN3wGSnaq-r9GafXxWYdsETh87HSaO8=w1267-h952",
  },
];

const benefits = [
  {
    title: "Deep Shine",
    img: "1.png",
  },
  {
    title: "Longer Durability",
    img: "4.png",
  },
  {
    title: "Anti-Static",
    img: "4.png",
  },
  {
    title: "High Flexibility",
    img: "3.png",
  },
  {
    title: "Negligible water spotting",
    img: "4.png",
  },
  {
    title: "Super hydrophobicity",
    img: "5.png",
  },
  {
    title: "High heat and chemical resistivity",
    img: "2.png",
  },
];

const reviews = [
  {
    date: "",
    name: "Anshul Giri",
    place: "New Delhi",
    message:
      "Well what do I say about Graphene Pro. My in-laws gifted me a Santro Xing about a decade back in marriage and I wanted to keep it with me forever. But its dullness and loss of paint was concerning me a lot. Thanks to Graphene Pro  Studios that they brought back its beauty and shine and made me keep my love for longer.",
  },
  {
    date: "",
    name: "Ankit Kumar Gupta",
    place: "Jharkhand",
    message:
      "Well what do I say about Graphene Pro. My in-laws gifted me a Santro Xing about a decade back in marriage and I wanted to keep it with me forever. But its dullness and loss of paint was concerning me a lot. Thanks to Graphene Pro  Studios that they brought back its beauty and shine and made me keep my love for longer.",
  },
  {
    date: "",
    name: "Santu Kumar",
    place: "Bihar",
    message:
      "Well what do I say about Graphene Pro. My in-laws gifted me a Santro Xing about a decade back in marriage and I wanted to keep it with me forever. But its dullness and loss of paint was concerning me a lot. Thanks to Graphene Pro  Studios that they brought back its beauty and shine and made me keep my love for longer.",
  },
  {
    date: "",
    name: "Venketashwara",
    place: "Tamil Nadu",
    message:
      "Well what do I say about Graphene Pro. My in-laws gifted me a Santro Xing about a decade back in marriage and I wanted to keep it with me forever. But its dullness and loss of paint was concerning me a lot. Thanks to Graphene Pro  Studios that they brought back its beauty and shine and made me keep my love for longer.",
  },
];

const news = [
  {
    type: "blog",
    title: "How to apply ceramic gel?",
    short_description:
      "Ceramic gels are a great way to polish you car. Usage is simple...",
    date: "24/01/23",
    id: 4337489739847,
    img: "https://images.unsplash.com/photo-1638904467879-efb1b065a1a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80",
  },
  {
    type: "news",
    title: "Graphene Pro-Best Graphene Coating  Service  in Town.",
    short_description:
      "Ceramic gels are a great way to polish you car. Usage is simple...",
    date: "25/01/23",
    id: 34938498395439,
    img: "https://images.unsplash.com/photo-1633158829607-291f6a0d2eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export default function Home() {
  const router = useRouter();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/allproducts");
      console.log(res);

      setAllProducts(res.data.data);
      toast.success(`Successfully fetched all products`);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const HeroSection = () => (
    <div className={styles.herosection}>
      <div className={styles.carheroimagebox}>
        <img src="/images/car1.png" alt="" />
      </div>
      <div className={styles.content_area}>
        <div>
          <h1 className="title-hero-anim">Graphene</h1>
          <h1 className="title-hero-anim">Pro</h1>
        </div>
        <h2 className="subtitle mt-5">A Blend of Perfection & Protection</h2>
        <h2 className="body mt-3">
          One-Stop Solution to All Your Car Care Problems.
        </h2>
        <PrimaryButton name="Know More" />
      </div>
    </div>
  );

  const AboutSection = () => (
    <div className={styles.aboutSection}>
      <div className={styles.left}>
        <h2 className="main-heading">Who we are?</h2>
        <p className="body mt-5">
          <span className="bold">Graphene Pro</span> is India’s leading{" "}
          <span className="bold">car detailing service</span> and{" "}
          <span className="bold">graphene coating service</span> brand that
          makes a vehicle look superb through its premium range of products and
          services.
        </p>
        <p className="body mt-4">
          We <span className="bold">developed</span> the product & technology
          <span className="bold"> in India</span> with a vision to shine and
          protect the maximum number of vehicles possible.
        </p>
        <p className="body mt-4">
          We have established ourselves firmly in the industry and expanded to{" "}
          <span className="bold">65+ studios</span> all over India and the
          world.
        </p>
      </div>
      <div className={styles.right}>
        <h2 className="main-heading">What we do?</h2>
        <p className="body mt-5">
          We specialize in{" "}
          <span className="bold">
            washing, detailing, and car and bike coating{" "}
          </span>
          for vehicles such as{" "}
          <span className="bold">
            12H DNA Graphene Coating, Skin Restoration Service (SRS), 9H DNA
            Absolute Nano Ceramic Coating, Paint Protection Film
          </span>{" "}
          to name a few.
        </p>
        <SecondaryButton
          name="Our Products"
          onClick={() => {
            router.push("/products");
          }}
        />
      </div>
    </div>
  );

  const ProductSection = () => (
    <div className={styles.section1}>
      <h2 className="main-heading">Featured Products</h2>
      <p className="body center mt-4 text-wrap">
        Our graphene is having exceptionally high quality compared to what
        available in the market currently across the country and world wide. We
        provide graphene in two forms mainly in powder and dispersed form in
        acetone, water, DMF etc.
      </p>
      <div className={styles.productList}>
        {allProducts.map((pr, index) => (
          <ProductCard data={pr} idx={index} client={true} />
        ))}
      </div>
    </div>
  );

  const BenefitSection = () => (
    <div className={styles.section1}>
      <h2 className="main-heading">What's your benefit</h2>
      <p className="body center mt-4 text-wrap">
        Our products and services are top-notch. Here are what you can expect
        from us.
      </p>
      <div className={styles.benefitList}>
        {benefits.map((b, index) => (
          <div className={styles.benefit}>
            <div className={styles.benefitIcon}>
              <img src={`/images/icons/${b.img}`} alt="" />
            </div>
            <p className="body">{b.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ReviewSection = ({ data, currentIndex, setIndex }) => (
    <div className={styles.reviewSection}>
      <div className={styles.reviewContent}>
        <div className={styles.info}>
          <span>
            <p className="body uppercase" style={{ letterSpacing: "5px" }}>
              {data.name}
            </p>
          </span>
          <span>
            <p className="body uppercase" style={{ letterSpacing: "5px" }}>
              •
            </p>
          </span>
          <span>
            <p className="body uppercase" style={{ letterSpacing: "5px" }}>
              {data.place}
            </p>
          </span>
        </div>
        <div className={styles.message}>
          <p className="caption-text italic">{data.message}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.buttons}>
          {reviews.map((r, idx) => {
            return (
              <button
                className={
                  idx === currentIndex
                    ? styles.currentbutton
                    : styles.normalbutton
                }
                onClick={() => {
                  setIndex(idx);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const NewsSection = ({ news }) => (
    <div className={styles.section1}>
      <h2 className="main-heading">News & Blogs</h2>
      <p className="body center mt-4 text-wrap">
        Checkout the blogs to get an idea about how to use the products.
      </p>
      <div className={styles.productList}>
        {news.map((n, index) => (
          <NewsCard data={n} idx={index} />
        ))}
      </div>
    </div>
  );

  const BgText = ({ text, style }) => (
    <div className={styles.bgimgtext} style={style}>
      <p className="title-hero2 ">{text}</p>
    </div>
  );

  const [reviewIndex, setReviewIndex] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setReviewIndex((old) => {
        return (old + 1) % reviews.length;
      });
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [reviewIndex]);

  return (
    <>
      <Head>
        <title>Graphene Pro</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo_sm.png" />
      </Head>
      <main className="main">
        <Navbar />
        <HeroSection />
        <BgText text="A Vision to Shine & Protect" />
        <AboutSection />
        <BgText text="Get Ready To Transform Your Ride" />
        <ProductSection />
        <BenefitSection />
        <ReviewSection
          data={reviews[reviewIndex]}
          currentIndex={reviewIndex}
          setIndex={(index) => {
            setReviewIndex(index);
          }}
        />
        <NewsSection news={news} />
        <Footer />
      </main>
    </>
  );
}
