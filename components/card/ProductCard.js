import React from "react";
import styles from "./ProductCard.module.scss";
import Link from "next/link";
const ProductCard = ({ data, idx }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.image}>
        <div className={styles.imageOverlay}></div>
        <img src={data.main_image_url} alt="" />
      </div>
      <div className={styles.product_content}>
        <p className="title-normal">{data.product_name}</p>
        <p className="caption-text">{data.short_info}</p>
        <Link href={`/admin/update-product/${data.id}`} className={styles.link}>
          <p>UPDATE/SEE</p>
          <div className={styles.arrow}>
            <div className={styles.head}></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
