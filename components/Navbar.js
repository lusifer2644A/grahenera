import { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import logo from "../public/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
// import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  // const { logOut } = useAuth();
  const { asPath, pathname } = useRouter();
  const nav_links_ref = useRef();
  const li_ref = useRef([]);
  const hamburgerRef = useRef();
  // const { user } = useAuth();

  const [loc, setLoc] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    var p = asPath;
    p = p.substring(1);
    // console.log(p);
    if (p.startsWith("dashboard")) setLoc(1);
    if (p.startsWith("products")) setLoc(2);
    if (p.startsWith("check-warranty")) setLoc(3);
    if (p.startsWith("fundPerformance")) setLoc(4);
    if (p.startsWith("articles")) setLoc(5);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [asPath]);

  const onHamClick = (e) => {
    nav_links_ref.current.classList.toggle(`${styles.open}`);
    li_ref.current.forEach((link) => {
      link?.classList.toggle(`${styles.fade}`);
    });

    // //Hamburger Animation
    hamburgerRef.current.classList.toggle(`${styles.toggle}`);
  };

  // console.log(loc);

  let navStyles = [styles.navbar1];

  return (
    <>
      <div className={[...navStyles].join(" ")}>
        <Link
          href="/"
          className={styles.nav_header_left}
          style={{ height: "100%" }}
        >
          <div className={styles.nav_logo}>
            <Image src={logo} alt="Graphenera Carbon" />
          </div>
        </Link>

        <div
          className={styles.hamburger}
          ref={hamburgerRef}
          onClick={onHamClick}
        >
          <div className={[styles.line1, styles.line].join(" ")}></div>
          <div className={[styles.line2, styles.line].join(" ")}></div>
          <div className={[styles.line3, styles.line].join(" ")}></div>
        </div>

        <div className={styles.nav_links} ref={nav_links_ref}>
          <>
            {/* {loc === 1 ? (
              <p
                className={styles.active_link}
                onClick={onHamClick}
                ref={(el) => (li_ref.current[0] = el)}
              >
                <Link href="/">Home</Link>
              </p>
            ) : (
              <p
                className={styles.nav_link_items}
                onClick={onHamClick}
                ref={(el) => (li_ref.current[0] = el)}
              >
                <Link href="/">Home</Link>
              </p>
            )} */}
            {loc === 2 ? (
              <p
                className={styles.active_link}
                onClick={onHamClick}
                ref={(el) => (li_ref.current[1] = el)}
              >
                <Link href="/products">Products</Link>
              </p>
            ) : (
              <p
                className={styles.nav_link_items}
                onClick={onHamClick}
                ref={(el) => (li_ref.current[1] = el)}
              >
                <Link href="/products">Products</Link>
              </p>
            )}
            {loc === 3 ? (
              <p
                className={styles.active_link}
                onClick={onHamClick}
                ref={(el) => (li_ref.current[2] = el)}
              >
                <Link href="/check-warranty">Check Warranty</Link>
              </p>
            ) : (
              <p
                className={styles.nav_link_items}
                onClick={onHamClick}
                ref={(el) => (li_ref.current[2] = el)}
              >
                <Link href="/check-warranty">Check Warranty</Link>
              </p>
            )}

            {/* <button
              className={styles.button_1}
              ref={(el) => (li_ref.current[5] = el)}
              onClick={async () => {
                onHamClick();
              }}
            >
              <>Logout</>
            </button> */}
          </>
        </div>
      </div>
    </>
  );
};

export default Navbar;
