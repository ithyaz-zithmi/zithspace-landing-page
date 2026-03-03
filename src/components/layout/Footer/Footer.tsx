"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import toast from "react-hot-toast";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Subscription successful! Thank you.");
        setEmail("");
      } else {
        throw new Error(data.message || "Subscription failed");
      }
    } catch (error: any) {
      console.error("Newsletter Error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/footerlogo.jpeg"
              alt="Zithspace"
              width={120}
              height={40}
              className={styles.logoImage}
            />
          </div>

          <div className={styles.newsletterBar}>
            <input
              type="email"
              placeholder="Enter your Company Email"
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <button
              className={styles.sendButton}
              onClick={handleSend}
              disabled={isLoading}
            >
              {isLoading ? "..." : "Send"}
            </button>
          </div>
        </div>

        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <p className={styles.description}>
              Transform operational complexity into organized workflows,
              measurable outcomes, and scalable success.
            </p>
            <div className={styles.contactGroup}>
              <div className={styles.contactItem}>
                <FiMail className={styles.icon} /> hello@zithspace.com
              </div>
              <div className={styles.contactItem}>
                <FiPhone className={styles.icon} /> 80722 55742
              </div>
              <div className={styles.contactItem}>
                <FiPhone className={styles.icon} /> 63821 23757
              </div>
            </div>
          </div>

          <div className={styles.dottedDivider}></div>

          <div className={`${styles.linkCol} ${styles.quickLinks}`}>
            <h4 className={styles.colTitle}>Quick Link</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#industry">Industry</a>
              </li>
              <li>
                <a href="#solution">Solution</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>

          <div className={`${styles.linkCol} ${styles.productLinks}`}>
            <h4 className={styles.colTitle}>Product</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#features-HR">HRMS Module</a>
              </li>
              <li>
                <a href="#features-Work">Work Module</a>
              </li>
              <li>
                <a href="#features-Finance">Finance Module</a>
              </li>
              <li>
                <a href="#features-Admin">Admin Module</a>
              </li>
            </ul>
          </div>

          <div className={`${styles.linkCol} ${styles.joinUsLinks}`}>
            <h4 className={styles.colTitle}>Join Us</h4>
            <div className={styles.socialItem}>
              <a
                href="https://www.linkedin.com/company/zithtech/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FaLinkedin className={styles.linkedinIcon} />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className={styles.socialItem}>
              <FaInstagram className={styles.instagramIcon} /> Instagram
            </div>
          </div>

          <div className={styles.dashedDivider}></div>

          <div className={styles.locationCol}>
            <h4 className={styles.colTitle}>Company Location</h4>
            <div className={styles.flagIcon}>
              <Image
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                width={40}
                height={30}
                unoptimized
              />
            </div>
            <p className={styles.address}>
              No 37,Balaji Towers,Ground Floor,Ram Nagar South,8th Cross
              Street,2nd Main Road,Madipakkam,Chennai-600091
            </p>
          </div>
        </div>

        <div className={styles.copyrightBar}>
          Copyright © {new Date().getFullYear()} Zithspace | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
