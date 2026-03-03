"use client";

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
