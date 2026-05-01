"use client";

import React, { useState, useEffect } from "react";
import styles from "./Pricing.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../../common/Container/Container";
import SectionHeader from "../../common/SectionHeader/SectionHeader";

interface PricingPlan {
  id: number;
  type: string;
  name: string;
  description: string;
  monthly_amount: number;
  yearly_amount: number;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("Starter");
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = ["Freelance", "Starter", "Business", "Enterprise"];

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await fetch('/api/pricing');
        if (!response.ok) {
          throw new Error('Failed to fetch pricing data');
        }
        const data = await response.json();
        setPlans(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching pricing data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, []);

  // Filter plans based on selected category (type)
  const displayPlans = plans.filter((plan) => {
    return plan.type === selectedCategory;
  });

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

        <div className={styles.categorySwitcher}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className={styles.activeBackground}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

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
          {loading ? (
            <div className={styles.loadingState}>Loading pricing plans...</div>
          ) : error ? (
            <div className={styles.errorState}>Error: {error}</div>
          ) : displayPlans.length > 0 ? (
            displayPlans.map((plan: PricingPlan, index: number) => (
              <div
                key={plan.id}
                className={`${styles.pricingCard} ${plan.isPopular ? styles.popular : ""}`}
              >
                {plan.isPopular && (
                  <span className={styles.mostPopularTag}>Most Popular</span>
                )}

                <h2>{plan.name}</h2>
                <p className={styles.planDescription}>{plan.description}</p>

                <div className={styles.priceBox}>
                  <span className={styles.price}>
                    $
                    {billingCycle === "monthly"
                      ? plan.monthly_amount.toFixed(2)
                      : plan.yearly_amount.toFixed(2)}
                  </span>
                  <span className={styles.duration}>/per {billingCycle}</span>
                </div>

                <ul className={styles.featuresList}>
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i}>
                      <FaCheckCircle className={styles.checkIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={styles.ctaButton}>{plan.buttonText}</button>
              </div>
            ))
          ) : (
            <div className={styles.loadingState}>
              No {selectedCategory} plans found for {billingCycle} billing.
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
