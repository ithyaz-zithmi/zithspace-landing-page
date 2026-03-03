"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Container from "../../common/Container/Container";

const SECTION_IDS = [
  "home",
  "features",
  "benefits",
  "industry",
  "solution",
  "faq",
  "pricing",
];

interface HeaderProps {
  onDemoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDemoClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "Benefits", id: "benefits" },
    { label: "Industry", id: "industry" },
    { label: "Solution", id: "solution" },
    { label: "FAQ", id: "faq" },
    { label: "Pricing", id: "pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTION_IDS.map((id) =>
        document.getElementById(id),
      ).filter(Boolean) as HTMLElement[];

      let currentSection = "home";
      const scrollY = window.scrollY;
      const headerOffset = 150; // Offset to account for sticky navbar height

      for (const section of sections) {
        const sectionTop =
          section.getBoundingClientRect().top + scrollY - headerOffset;
        if (scrollY >= sectionTop) {
          currentSection = section.id;
        }
      }

      // Check if we've reached the bottom of the page
      if (
        window.innerHeight + Math.round(scrollY) >=
        document.body.offsetHeight - 50
      ) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          currentSection = lastSection.id;
        }
      }

      setActiveSection(currentSection);
    };

    // Run initially after a small delay to allow dynamic components to mount
    const timeoutId = setTimeout(handleScroll, 500);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logoSide}>
            <Image
              src="/images/zithspace-logo.jpeg"
              alt="Zithspace Logo"
              width={160}
              height={40}
              className={styles.logoImage}
              priority
            />
          </div>

          <nav
            className={`${styles.navCenter} ${isMobileMenuOpen ? styles.active : ""}`}
          >
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`${styles.navLink} ${activeSection === item.id ? styles.navLinkActive : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.buttonSide}>
            <button className={styles.demoButton} onClick={onDemoClick}>
              Request a Demo
            </button>

            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
