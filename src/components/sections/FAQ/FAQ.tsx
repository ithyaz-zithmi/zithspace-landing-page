"use client";

import React from "react";
import styles from "./FAQ.module.css";
import SectionHeader from "../../common/SectionHeader/SectionHeader";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className={styles.faq}>
      <SectionHeader
        badgeText="FAQ"
        title={
          <>
            Everything You Need to Know About{" "}
            <span className={styles.blueText}>Zithspace</span>
          </>
        }
      />

      <div className={styles.faqGrid}>
        <div className={styles.faqColumn}>
          <div className={`${styles.faqCard} ${styles.activeCard}`}>
            <div className={styles.contentWrapper}>
              <h4 className={styles.question}>
                Does Zithspace offer a free trial?
              </h4>
              <p className={styles.answer}>
                Yes. Zithspace offers a free trial period so you can explore all
                core modules — HRMS, Work, Finance, and Admin — before making a
                commitment. <br />
                <br />
                The trial gives you full platform visibility to evaluate how
                Zithspace fits your business workflows.
              </p>
            </div>
            <div className={styles.toggleIcon}>−</div>
          </div>

          <div className={styles.faqCard}>
            <h4 className={styles.question}>
              Can I choose specific modules instead of the full suite ?
            </h4>
            <div className={styles.toggleIcon}>+</div>
          </div>

          <div className={styles.faqCard}>
            <h4 className={styles.question}>
              Can Zithspace scale as our company grows ?
            </h4>
            <div className={styles.toggleIcon}>+</div>
          </div>
        </div>

        <div className={styles.faqColumn}>
          <div className={styles.faqCard}>
            <h4 className={styles.question}>How is Zithspace priced?</h4>
            <div className={styles.toggleIcon}>+</div>
          </div>

          <div className={styles.faqCard}>
            <h4 className={styles.question}>Are there fixed pricing plans?</h4>
            <div className={styles.toggleIcon}>+</div>
          </div>

          <div className={styles.faqCard}>
            <h4 className={styles.question}>
              Is there a minimum contract period?
            </h4>
            <div className={styles.toggleIcon}>+</div>
          </div>

          <div className={styles.faqCard}>
            <h4 className={styles.question}>
              Is Zithspace suitable for multi-branch or enterprise setups?
            </h4>
            <div className={styles.toggleIcon}>+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
