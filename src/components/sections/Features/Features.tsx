"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeader from "../../common/SectionHeader/SectionHeader";
import styles from "./Features.module.css";
import { modules } from "../../data/featuresData";

const hrMainDefault = "/images/hrms.jpeg";
const finMain = "/images/finance.png";
const workMain = "/images/work.jpeg";
const adminMain = "/images/admin.jpeg";

const EmployeeOnboarding = "/images/onboarding.png";
const EmployeeManagement = "/images/employeemanagement.png";
const AttendanceManagement = "/images/attendencemanagement.png";
const LeaveManagement = "/images/leavemanagement.png";
const OrgStructure = "/images/org.png";

const accountmanagement = "/images/finance.png";
const invoice = "/images/invoice.png";
const reimburesment = "/images/reimburesment.png";
const payroll = "/images/reimburesment.png";

const projectmanagement = "/images/projectmanagement.png";
const ticketsmanagement = "/images/ticketmanagement.png";
const timesheetmanagement = "/images/ticketmanagement.png";
const updates = "/images/updates.png";
const timeshifting = "/images/ticketmanagement.png";
const documenthub = "/images/documenthub.png";

const rbac = "/images/admin.jpeg";
const clientmanagement = "/images/admin.jpeg";
const generalsetting = "/images/dashboard.jpeg";
const dashboardsetting = "/images/dashboard.jpeg";

const hrTop = "/images/add-member.jpeg";
const fiTop = "/images/customer.jpeg";
const workTop1 = "/images/work1.png";
const workTop2 = "/images/work2.png";
const workTop3 = "/images/work3.png";

const workbottom = "/images/project.jpeg";
const hrBottom1 = "/images/teamlead.jpeg";
const hrBottom2 = "/images/cto.jpeg";
const hrBottom3 = "/images/ceo.jpeg";

const Features: React.FC = () => {
  const [activeModule, setActiveModule] = useState("HR");
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const currentModule =
    modules.find((m) => m.id === activeModule) || modules[0];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash.startsWith("#features-")) {
        const moduleId = hash.replace("#features-", "");

        const targetModule = modules.find(
          (m) => m.id.toLowerCase() === moduleId.toLowerCase(),
        );

        if (targetModule) {
          const featuresElement = document.getElementById("features");
          if (featuresElement) {
            featuresElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }

          setTimeout(() => {
            setActiveModule(targetModule.id);
            setHoveredFeature(null);
          }, 500);
        }
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setHoveredFeature((curr) => {
        const features = currentModule.features;
        const currentIndex = features.findIndex((f) => f.id === curr);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeModule, currentModule.features]);

  const getAssets = () => {
    let mainImg;
    switch (activeModule) {
      case "HR":
        mainImg = hrMainDefault;
        if (hoveredFeature) {
          switch (hoveredFeature) {
            case "onboarding":
              mainImg = EmployeeOnboarding;
              break;
            case "employee-mgmt":
              mainImg = EmployeeManagement;
              break;
            case "attendance":
              mainImg = AttendanceManagement;
              break;
            case "leave":
              mainImg = LeaveManagement;
              break;
            case "hierarchy":
              mainImg = OrgStructure;
              break;
          }
        }
        return {
          main: mainImg,
          topStart: [] as string[],
          topEnd: [hrTop],
          bottomImgs: [hrBottom1, hrBottom2, hrBottom3],
          theme: styles.hrTheme,
        };

      case "Finance":
        mainImg = finMain;
        if (hoveredFeature) {
          switch (hoveredFeature) {
            case "accounts":
              mainImg = accountmanagement;
              break;
            case "invoice":
              mainImg = invoice;
              break;
            case "reimbursement":
              mainImg = reimburesment;
              break;
            case "payroll":
              mainImg = payroll;
              break;
          }
        }
        return {
          main: mainImg,
          topStart: [] as string[],
          topEnd: [fiTop],
          bottomImgs: [] as string[],
          theme: styles.financeTheme,
        };

      case "Work":
        mainImg = workMain;
        if (hoveredFeature) {
          switch (hoveredFeature) {
            case "project":
              mainImg = projectmanagement;
              break;
            case "ticket":
              mainImg = ticketsmanagement;
              break;
            case "timesheet":
              mainImg = timesheetmanagement;
              break;
            case "updates":
              mainImg = updates;
              break;
            case "shift":
              mainImg = timeshifting;
              break;
            case "document":
              mainImg = documenthub;
              break;
          }
        }
        return {
          main: mainImg,
          topStart: [workTop1],
          topEnd: [workTop2, workTop3],
          bottomImgs: [workbottom],
          theme: styles.workTheme,
        };

      case "Admin":
        mainImg = adminMain;
        if (hoveredFeature) {
          switch (hoveredFeature) {
            case "rbac":
              mainImg = rbac;
              break;
            case "client":
              mainImg = clientmanagement;
              break;
            case "settings":
              mainImg = generalsetting;
              break;
            case "dashboard":
              mainImg = dashboardsetting;
              break;
          }
        }
        return {
          main: mainImg,
          topStart: [] as string[],
          topEnd: [hrTop],
          bottomImgs: [] as string[],
          theme: styles.adminTheme,
        };

      default:
        return {
          main: hrMainDefault,
          topStart: [] as string[],
          topEnd: [hrTop],
          bottomImgs: [] as string[],
          theme: styles.hrTheme,
        };
    }
  };

  const { main, topStart, topEnd, bottomImgs, theme } = getAssets();

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.narrowContainer}>
        <SectionHeader
          badgeText="Our Features"
          title={
            <>
              <span className={styles.blueText}>One Platform.</span> One Login.
              Complete Control.
            </>
          }
        />

        <div className={styles.tabsWrapper}>
          {modules.map((m) => (
            <button
              key={m.id}
              className={`${styles.tabButton} ${activeModule === m.id ? styles.tabActive : ""}`}
              onClick={() => {
                setActiveModule(m.id);
                setHoveredFeature(null);
              }}
            >
              {m.name}
            </button>
          ))}
        </div>

        <div
          className={`${styles.featureCard} ${theme} ${activeModule === "Work" ? styles.workLayout : ""}`}
        >
          <div className={styles.textContent}>
            <h3 className={styles.moduleTitle}>{currentModule.headerTitle}</h3>
            <p className={styles.moduleSubtitle}>
              {currentModule.headerSubtitle}
            </p>
            <ul className={styles.featureList}>
              {currentModule.features.map((feature) => (
                <li
                  key={feature.id}
                  className={styles.featureListItem}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <span className={styles.bullet}>•</span>
                  <div className={styles.itemText}>
                    <strong>{feature.title}</strong>
                    <p>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className={styles.demoPillButton}>Book a Free Demo</button>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={main}
                alt="Dashboard"
                width={700}
                height={450}
                className={styles.imgMainDocked}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className={styles.topStartContainer}>
              {topStart.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Start Detail"
                  className={styles.startImg}
                />
              ))}
            </div>

            <div className={styles.topEndContainer}>
              {topEnd.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="End Detail"
                  className={styles.endImg}
                />
              ))}
            </div>

            {bottomImgs && bottomImgs.length > 0 && (
              <div className={styles.bottomStack}>
                {bottomImgs.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    className={styles.stackedImg}
                    alt="Detail"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
