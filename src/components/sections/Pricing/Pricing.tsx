"use client";

import React, { useState } from "react";
import styles from "./Pricing.module.css";
import { FaCheckCircle } from "react-icons/fa";
import Container from "../../common/Container/Container";
import SectionHeader from "../../common/SectionHeader/SectionHeader";

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const plans = [
    {
      name: "Starter Plan",
      description: "For small Teams and Company getting started",
      price: "00.00",
      features: [
        "Project & Task Management",
        "Basic HRMS (Attendance + Leave)",
        "Role-Based Access",
        "Basic Reports",
        "Email Support",
      ],
      isPopular: false,
    },
    {
      name: "Growth plan",
      description: "For Growing teams that Need Structure",
      price: "00.00",
      features: [
        "Advanced HRMS (Payroll + Shift )",
        "Finance Module (Expenses + Invoicing)",
        "Department-Level Dashboard",
        "Workflow Automation",
        "Priority Support",
      ],
      isPopular: true,
    },
    {
      name: "Business Plan",
      description: "For scaling companies with full operations",
      price: "00.00",
      features: [
        "Complete Business Lifecycle Coverage",
        "Custom Roles & Permissions",
        "Advanced Analytics & Reports",
        "API Access",
        "Dedicated Account Manager",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className={styles.pricingSection}>
      <Container>
        <SectionHeader
          badgeText="Zithspace Pricing"
          title={
            <>
              <span className={styles.highlight}>One Platform</span> Clear
              Pricing From Startup to Enterprises
            </>
          }
        />

        <div className={styles.billingToggle}>
          <button
            className={billingCycle === "monthly" ? styles.active : ""}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={billingCycle === "yearly" ? styles.active : ""}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>

        <div className={styles.pricingContainer}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.pricingCard} ${plan.isPopular ? styles.popular : ""}`}
            >
              {plan.isPopular && (
                <span className={styles.mostPopularTag}>Most Popular</span>
              )}

              <h2>{plan.name}</h2>
              <p className={styles.planDescription}>{plan.description}</p>

              <div className={styles.priceBox}>
                <span className={styles.price}>${plan.price}</span>
                <span className={styles.duration}>/per month</span>
              </div>

              <ul className={styles.featuresList}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle className={styles.checkIcon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={styles.ctaButton}>Coming Soon....</button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
