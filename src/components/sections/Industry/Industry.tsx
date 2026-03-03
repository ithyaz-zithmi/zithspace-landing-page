"use client";

import React from "react";
import Image from "next/image";
import styles from "./Industry.module.css";
import Container from "../../common/Container/Container";
import { industryData } from "../../data/industryData";
import SectionHeader from "../../common/SectionHeader/SectionHeader";

const Industry: React.FC = () => {
  return (
    <section className={styles.industrySection} id="industry">
      <Container>
        <SectionHeader
          badgeText="Who Is ZithSpace Built For?"
          title={
            <>
              Structured operations for growing,{" "}
              <span className={styles.blueText}>
                process-driven organizations.
              </span>
            </>
          }
        />

        <div className={styles.scrollWrapper}>
          {industryData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className={styles.industryImage}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className={styles.cardBody}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className={styles.demoButton}>Book a Free Demo</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Industry;
