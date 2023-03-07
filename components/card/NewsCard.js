import React from "react";
import styles from "./NewsCard.module.scss";
import Link from "next/link";
const NewsCard = ({ data, idx }) => {
  return (
    <div className={styles.NewsCard}>
      <div className={styles.image}>
        <div className={styles.imageOverlay}>
          <p className="title-normal">{data.title}</p>
        </div>
        <img src={data.img} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.info} style={{ color: "#D9D9D9" }}>
          <span>
            <p
              className="caption-text uppercase"
              style={{ letterSpacing: "5px" }}
            >
              {data.type}
            </p>
          </span>
          <span>
            <p
              className="caption-text uppercase"
              style={{ letterSpacing: "5px" }}
            >
              •
            </p>
          </span>
          <span>
            <p
              className="caption-text uppercase"
              style={{ letterSpacing: "5px" }}
            >
              {data.date}
            </p>
          </span>
        </div>
        <p className="caption-text" style={{ color: "#A7A7A7" }}>
          {data.short_description}
        </p>
        <Link href="#" className={styles.link} style={{ marginTop: "1rem" }}>
          <p>READ</p>
          <div className={styles.arrow}>
            <div className={styles.head}></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
