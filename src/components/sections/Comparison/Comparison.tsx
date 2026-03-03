"use client";

import React from "react";
import styles from "./Comparison.module.css";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const Comparison: React.FC = () => {
  const data = [
    {
      label: "Unified Business OS:",
      with: "Built as one connected system",
      without: "Separate tools stitched together",
    },
    {
      label: "Cross-Department Visibility:",
      with: "Work, HR, Finance & Admin unified",
      without: "Departmental silos",
    },
    {
      label: "End-to-End Business Lifecycle:",
      with: "Designed for structured growth",
      without: "Breaks with complexity",
    },
    {
      label: "Enterprise Scalability:",
      with: "Built-in RBAC & approval flows",
      without: "Limited control layers",
    },
    {
      label: "Governance & Control:",
      with: "Unified dashboards across functions",
      without: "Disconnected reporting",
    },
    {
      label: "Real-Time Insights:",
      with: "No hidden modules",
      without: "Add-ons and integration costs",
    },
    {
      label: "Transparent Platform Model:",
      with: "From planning to payroll",
      without: "Fragmented workflows",
    },
  ];

  return (
    <section id="solution" className={styles.section}>
      <h2 className={styles.sectionTitle}>Why Zithspace Stands Apart ?</h2>

      <div className={styles.container}>
        <div className={styles.labelColumn}>
          <div className={styles.labelBadge}>What It Does</div>
          <div className={styles.labelList}>
            {data.map((item, i) => (
              <div key={i} className={styles.label}>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.card} ${styles.withCard}`}>
          <div className={styles.cardBadge}>With Zithspace</div>
          <div className={styles.innerList}>
            {data.map((item, i) => (
              <div key={i} className={styles.itemWrapper}>
                <div className={styles.mobileLabel}>{item.label}</div>
                <div className={styles.withItem}>
                  <FiCheckCircle className={styles.checkIcon} /> {item.with}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.card} ${styles.withoutCard}`}>
          <div className={styles.cardBadge}>Without Zithspace</div>
          <div className={`${styles.innerList} ${styles.withoutInner}`}>
            {data.map((item, i) => (
              <div key={i} className={styles.itemWrapper}>
                <div className={`${styles.mobileLabel} ${styles.darkLabel}`}>
                  {item.label}
                </div>
                <div className={styles.withoutItem}>
                  <FiXCircle className={styles.crossIcon} /> {item.without}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
