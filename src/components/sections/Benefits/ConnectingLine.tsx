"use client";

import React from "react";
import styles from "./Benefits.module.css";

interface ConnectingLineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay?: number;
}

const ConnectingLine: React.FC<ConnectingLineProps> = ({
  startX,
  startY,
  endX,
  endY,
  delay = 0,
}) => {
  return (
    <svg
      className={styles.svgLine}
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <line
        x1={`${startX}%`}
        y1={`${startY}%`}
        x2={`${endX}%`}
        y2={`${endY}%`}
        className={styles.animatedLine}
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
};

export default ConnectingLine;
