"use client";

import React from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  badgeText: string;
  title: React.ReactNode;
  centered?: boolean;
  isWhite?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  centered = true,
  isWhite = false,
}) => {
  return (
    <div
      className={`${styles.headerArea} ${centered ? styles.centered : ""} ${isWhite ? styles.whiteText : ""}`}
    >
      <div className={styles.badgeWrapper}>
        <span className={styles.blueLine}>|</span>
        <span className={styles.badgeText}>{badgeText}</span>
        <span className={styles.blueLine}>|</span>
      </div>
      <h2 className={styles.mainTitle}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
