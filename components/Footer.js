import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* top footer */}
      <div className={styles.top}>
        {/* social part and contact */}
        <div className={styles.left}>
          <div className={styles.company_logo}>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={styles.company_mail}>
            <p className="body">contact@graphenera.com</p>
          </div>
          <div className={styles.social}>
            <p className="title-normal">Stay Connected!</p>
            <div className={styles.links}>
              <Link href="#" className={styles.socialIcons}>
                <img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/facebook-new--v1.png" />
              </Link>
              <Link href="#" className={styles.socialIcons}>
                <img src="https://img.icons8.com/windows/48/ffffff/instagram-new.png" />
              </Link>
              <Link href="#" className={styles.socialIcons}>
                <img src="https://img.icons8.com/ios-glyphs/48/ffffff/twitter--v1.png" />
              </Link>
              <Link href="#" className={styles.socialIcons}>
                <img src="https://img.icons8.com/ios-glyphs/48/ffffff/linkedin-2--v1.png" />
              </Link>
              <Link href="#" className={styles.socialIcons}>
                <img src="https://img.icons8.com/ios-filled/48/ffffff/youtube-play.png" />
              </Link>
            </div>
          </div>
        </div>
        {/* quick links */}
        <div className={styles.right}>
          <div className={styles.quick_links}>
            <Link href="#" className={styles.link}>
              <p className="caption-text">Home</p>
            </Link>
            <Link href="#" className={styles.link}>
              <p className="caption-text">About Us</p>
            </Link>
            <Link href="#" className={styles.link}>
              <p className="caption-text">Products</p>
            </Link>
            <Link href="#" className={styles.link}>
              <p className="caption-text">Services</p>
            </Link>
            <Link href="#" className={styles.link}>
              <p className="caption-text">Contact Us</p>
            </Link>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className={styles.bottom}>
        <span className={styles.left}>
          <p className="small-text">
            © 2022 GRAPHENERA CARBON Pvt. Ltd. Copyrights and Rights Reserved
          </p>
        </span>
        <span className={styles.right}>
          <p className="small-text">Terms and Conditions</p>
          <p className="small-text">•</p>
          <p className="small-text">Privacy Policy</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
