"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { FiArrowRight } from "react-icons/fi";
import { FiUsers, FiDollarSign, FiSettings, FiBriefcase } from "react-icons/fi";

const features = [
  {
    id: "HRMS",
    name: "HR Management",
    image: "/images/hrms.jpeg",
    icon: <FiUsers />,
  },
  {
    id: "Finance",
    name: "Finance Management",
    image: "/images/finance.png",
    icon: <FiDollarSign />,
  },
  {
    id: "Admin",
    name: "Admin Management",
    image: "/images/admin.jpeg",
    icon: <FiSettings />,
  },
  {
    id: "Work",
    name: "Work Management",
    image: "/images/work.jpeg",
    icon: <FiBriefcase />,
  },
];

const dashboardImage = "/images/dashboard.jpeg";

interface HeroProps {
  onDemoClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const checkIsMobileOrTablet = () => window.innerWidth <= 1024;

    if (!isHovered && checkIsMobileOrTablet()) {
      autoSlideRef.current = setInterval(() => {
        setActiveFeature((prev) => {
          const currentIndex = features.findIndex((f) => f.id === prev);
          const nextIndex = (currentIndex + 1) % features.length;
          return features[nextIndex].id;
        });
      }, 3000);
    }

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [isHovered]);

  const getActiveImage = () => {
    const feature = features.find((f) => f.id === activeFeature);
    return feature?.image || dashboardImage;
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.barDecorations} aria-hidden="true" />
      <Container>
        <div className={styles.centerContent}>
          <h1 className={styles.title}>
            One Platform to Plan, Manage, and
            <br />
            <span>Grow Your Entire Organization</span>
          </h1>

          <p className={styles.subtitle}>
            Zithspace unifies <strong>HRMS, Work, Finance,</strong> and{" "}
            <strong>Admin</strong> into one structured platform—giving your
            teams complete visibility and control from strategy to execution.
          </p>

          <div className={styles.buttons}>
            <Button variant="primary" onClick={onDemoClick}>
              Request a Demo
            </Button>
            <button className={styles.outlineBtn}>
              Explore Our Product <FiArrowRight />
            </button>
          </div>

          <div className={styles.dashboardSection}>
            <div
              className={styles.floatingCard}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <div className={styles.featureGrid}>
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`${styles.featureItem} ${
                      activeFeature === feature.id ? styles.activeItem : ""
                    }`}
                    onMouseEnter={() => {
                      setActiveFeature(feature.id);
                      setIsHovered(true);
                    }}
                  >
                    <span className={styles.featureIcon}>{feature.icon}</span>
                    {feature.name}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.dashboard}>
              <Image
                key={activeFeature || "default"}
                src={getActiveImage()}
                alt="Dashboard Preview"
                width={900}
                height={550}
                className={styles.dashboardImage}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
