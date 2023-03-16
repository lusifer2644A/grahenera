import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import styles from "./PageNav.module.scss";

const PageNav = ({ title }) => {
  const router = useRouter();
  const [navElx, setNavElx] = useState([]);

  useEffect(() => {
    UrlParser();
  }, [router.pathname]);

  const UrlParser = (url) => {
    url = window.location.href;

    const path = router.asPath;
    const arr = path.split("/");
    arr.shift();

    const x = url.indexOf(`/${arr[0]}`);
    url = url.slice(x);

    let parsedUrl = [];

    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let name = arr[i];
      let idx = url.indexOf(`/${name}`);
      let reqPath = url.slice(0, idx + name.length + 1);

      let nameP = name.toLowerCase().split("-");
      for (let i = 0; i < nameP.length; i++) {
        nameP[i] = nameP[i][0].toUpperCase() + nameP[i].slice(1);
      }
      name = nameP.join(" ");

      if (i === n - 1) reqPath = url;

      parsedUrl.push({
        key: idx,
        name: name,
        path: reqPath,
      });
    }
    // console.log(parsedUrl);

    console.log(parsedUrl);

    setNavElx(parsedUrl);
  };
  return (
    <div className={styles.pageHeader}>
      {" "}
      <nav className={styles.pageNav}>
        <>
          <Link href="/" className="caption-text">
            {"Home"}
          </Link>
          {navElx !== 0 && (
            <div className={styles.pageNavArrow}>
              <img
                src="https://img.icons8.com/ios-glyphs/30/c6c6c6/chevron-right.png"
                alt=">"
              />
            </div>
          )}
        </>
        {navElx.map((data, idx) => {
          return (
            <>
              <Link href={`${data.path}`} key={idx} className="caption-text">
                {data.name}
              </Link>
              {idx !== navElx.length - 1 && (
                <div className={styles.pageNavArrow}>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/c6c6c6/chevron-right.png"
                    alt=">"
                  />
                </div>
              )}
            </>
          );
        })}
      </nav>
      <div className={styles.pageHeaderTitle}>
        <h2 className="title-hero">{title}</h2>
      </div>
    </div>
  );
};

export default PageNav;
