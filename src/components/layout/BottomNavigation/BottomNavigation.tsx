"use client";

import React, { useState, useEffect } from "react";
import styles from "./BottomNavigation.module.css";
import {
  FiHome,
  FiGrid,
  FiAward,
  FiBriefcase,
  FiSettings,
  FiHelpCircle,
  FiDollarSign,
} from "react-icons/fi";

const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: FiHome, href: "#home" },
    { id: "features", label: "Features", icon: FiGrid, href: "#features" },
    { id: "benefits", label: "Benefits", icon: FiAward, href: "#benefits" },
    { id: "industry", label: "Industry", icon: FiBriefcase, href: "#industry" },
    { id: "solution", label: "Solution", icon: FiSettings, href: "#solution" },
    { id: "faq", label: "FAQ", icon: FiHelpCircle, href: "#faq" },
    { id: "pricing", label: "Pricing", icon: FiDollarSign, href: "#pricing" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={styles.bottomNav}>
      <div className={styles.navContainer}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`${styles.navItem} ${activeTab === item.id ? styles.active : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className={styles.navIcon} />
              <span className={styles.navLabel}>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
