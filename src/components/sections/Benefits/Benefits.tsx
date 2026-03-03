"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./Benefits.module.css";
import { whyChooseData } from "../../data/whyChooseData";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeader from "../../common/SectionHeader/SectionHeader";

const Benefits: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 1024;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  };

  const connectorVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 1.0 + i * 0.1,
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    }),
  };

  const lineCoords = [
    [15, 20, 38, 42],
    [85, 20, 62, 42],
    [15, 80, 38, 58],
    [85, 80, 62, 58],
  ];

  return (
    <section id="benefits" className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        <SectionHeader
          badgeText="Why Choose Us"
          title={
            <>
              Unified. Scalable.{" "}
              <span className={styles.highlight}>Outcome-Driven.</span>
            </>
          }
        />

        <div className={styles.contentWrapper}>
          {!isMobile && (
            <svg
              className={styles.svgOverlay}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {lineCoords.map((coords, i) => (
                <motion.path
                  key={i}
                  d={`M ${coords[0]} ${coords[1]} L ${coords[2]} ${coords[3]}`}
                  stroke="#94a3b8"
                  strokeWidth="0.3"
                  fill="none"
                  opacity="0.6"
                  variants={connectorVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i}
                />
              ))}
            </svg>
          )}

          <div className={styles.grid}>
            {whyChooseData[0] &&
              (() => {
                const Icon = whyChooseData[0].icon;
                return (
                  <motion.div
                    className={`${styles.card} ${styles.topLeft}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0}
                  >
                    <div className={`${styles.iconWrapper} ${styles.purple}`}>
                      <Icon />
                    </div>
                    <div className={styles.cardContent}>
                      <h3>{whyChooseData[0].title}</h3>
                      <p>{whyChooseData[0].description}</p>
                    </div>
                  </motion.div>
                );
              })()}

            {whyChooseData[1] &&
              (() => {
                const Icon = whyChooseData[1].icon;
                return (
                  <motion.div
                    className={`${styles.card} ${styles.topRight}`}
                    style={{ gridColumn: 3, gridRow: 1 }}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={1}
                  >
                    <div className={`${styles.iconWrapper} ${styles.orange}`}>
                      <Icon />
                    </div>
                    <div className={styles.cardContent}>
                      <h3>{whyChooseData[1].title}</h3>
                      <p>{whyChooseData[1].description}</p>
                    </div>
                  </motion.div>
                );
              })()}

            <div className={styles.centerCol}>
              <motion.div
                className={styles.hub}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              >
                <div className={styles.hubInner}>
                  <span>4 Reason Why Choose</span>
                  <strong>Zithspace</strong>
                </div>
                <div className={styles.dots}></div>
              </motion.div>
            </div>

            {whyChooseData[2] &&
              (() => {
                const Icon = whyChooseData[2].icon;
                return (
                  <motion.div
                    className={`${styles.card} ${styles.bottomLeft}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={2}
                  >
                    <div className={`${styles.iconWrapper} ${styles.green}`}>
                      <Icon />
                    </div>
                    <div className={styles.cardContent}>
                      <h3>{whyChooseData[2].title}</h3>
                      <p>{whyChooseData[2].description}</p>
                    </div>
                  </motion.div>
                );
              })()}

            {whyChooseData[3] &&
              (() => {
                const Icon = whyChooseData[3].icon;
                return (
                  <motion.div
                    className={`${styles.card} ${styles.bottomRight}`}
                    style={{ gridColumn: 3, gridRow: 2 }}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={3}
                  >
                    <div className={`${styles.iconWrapper} ${styles.blue}`}>
                      <Icon />
                    </div>
                    <div className={styles.cardContent}>
                      <h3>{whyChooseData[3].title}</h3>
                      <p>{whyChooseData[3].description}</p>
                    </div>
                  </motion.div>
                );
              })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
