import React from "react";
import styles from "./ProductCard.module.scss";
import Link from "next/link";
const ProductCard = ({ data, idx }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.image}>
        <div className={styles.imageOverlay}></div>
        <img src={data.img} alt="" />
      </div>
      <div className={styles.product_content}>
        <p className="title-normal">{data.title}</p>
        <p className="caption-text">{data.short_description}</p>
        <Link href="#" className={styles.link}>
          <p>KNOW MORE</p>
          <div className={styles.arrow}>
            <div className={styles.head}></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
