import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";

import {
  AppstoreOutlined,
  IssuesCloseOutlined,
  FileTextOutlined,
  RadiusBottomleftOutlined
} from "@ant-design/icons";

import img1 from "../../assets/productimg1.jpeg";
import img2 from "../../assets/productimg2.jpeg";
import img3 from "../../assets/productimg3.jpeg";
import img4 from "../../assets/productimg4.jpeg";

const Products = () => {
  const [activeTab, setActiveTab] = useState(0);

  const productData = [
    { id: 0, img: img1, color: "#A855F7" },
    { id: 1, img: img2, color: "#22C55E" },
    { id: 2, img: img3, color: "#F97316" },
    { id: 3, img: img4, color: "#08a6ef" },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % productData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [productData.length]);

  return (
    <section id="product" className={styles.sectionContainer}>

      <div className={styles.sectionHeader}>
    <span className={styles.sectionBadge}>Our Products</span>
    <h2 className={styles.sectionTitle}>
      Flagship <span>SaaS</span> Products
    </h2>
  </div>





      <div className={styles.productCard}>

        {/* LEFT */}
        <div className={styles.textSide}>
          <h1 className={styles.brandTitle}>ZithSpace</h1>
          <h2 className={styles.platformSubtitle}>
            Business Management Platform
          </h2>
          <p className={styles.descriptionText}>
            All-in-one business management solution with project management,
            HRMS, Client management, and finance modules.
          </p>
          <button className={styles.exploreButton}>
            Explore now
          </button>
        </div>

        {/* RIGHT */}
        <div
          className={styles.visualSide}
          style={{ "--accent-color": productData[activeTab].color }}
        >
          {/* Platform */}
          <div
            className={`${styles.iconWrapper} ${activeTab === 0 ? styles.active : ""
              } ${styles.posPurple}`}
          >
            <div className={styles.iconBox}>
              <AppstoreOutlined />
            </div>
            <div className={styles.lineVertical} />
          </div>

          {/* Users */}
          <div
            className={`${styles.iconWrapper} ${activeTab === 1 ? styles.active : ""
              } ${styles.posGreen}`}
          >
            <div className={styles.iconBox}>
              <FileTextOutlined />
            </div>
            <div className={styles.lineVertical} />
          </div>

          {/* Documents */}
          <div
            className={`${styles.iconWrapper} ${activeTab === 2 ? styles.active : ""
              } ${styles.posOrange}`}
          >
            <div className={styles.iconBox}>
              <RadiusBottomleftOutlined />
            </div>
            <div className={styles.lineHorizontal} />
          </div>


                    <div
            className={`${styles.iconWrapper} ${activeTab === 3 ? styles.active : ""
              } ${styles.posbule}`}
          >
            <div className={styles.iconBox}>
              <IssuesCloseOutlined />
            </div>
            <div className={styles.lineHorizontal} />
          </div>

          {/* Dashboard Image */}
          <div className={styles.dashboardContainer}>
            <img
              src={productData[activeTab].img}
              alt="Dashboard Preview"
              className={styles.dashboardScreenshot}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
