"use client";

import React, { useState, useEffect } from "react";
import styles from "./DemoModal.module.css";
import { FiX, FiCheckCircle } from "react-icons/fi";
import toast from "react-hot-toast";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send");
      }

      toast.success("Demo request sent successfully!");
      setIsSubmitted(true);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FiX />
        </button>

        {!isSubmitted ? (
          <div className={styles.formWrapper}>
            <div className={styles.modalHeader}>
              <h2>
                Request a <span className={styles.highlight}>Free Demo</span>
              </h2>
              <p>
                Experience how Zithspace can transform your organization&apos;s
                operations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.gridInputs}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Business Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Zithsoft Solutions"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Request Demo Now"}
              </button>

              <p className={styles.privacyNote}>
                By clicking &quot;Request Demo Now&quot;, you agree to our
                Privacy Policy.
              </p>
            </form>
          </div>
        ) : (
          <div className={styles.successWrapper}>
            <div className={styles.successIcon}>
              <FiCheckCircle />
            </div>
            <h2>Request Received!</h2>
            <p>
              Thank you, <strong>{formData.name}</strong>. Our team will reach
              out to you at <strong>{formData.email}</strong> within 24 hours to
              schedule your personalized demo.
            </p>
            <button className={styles.doneButton} onClick={onClose}>
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
