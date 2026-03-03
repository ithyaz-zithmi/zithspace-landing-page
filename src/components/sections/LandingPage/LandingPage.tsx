"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./LandingPage.css";
import DemoModal from "../../common/DemoModal/DemoModal";

const LandingPage: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  const handleDemoModalClose = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Stop Switching Tools. Start Scaling <br />
            with <span>Zithspace</span>
          </h1>
          <p>
            One unified platform to manage Work, HR, Finance, and Collaboration
            — everything your business needs, in one connected ecosystem.
          </p>
          <button className="demo-btn" onClick={handleDemoClick}>
            Request a Demo
          </button>
        </div>

        <div className="hero-visual">
          <div className="visual-wrapper">
            <svg className="connection-svg" viewBox="0 0 550 500" fill="none">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="#3b82f6"
                    opacity="0.6"
                  />
                </marker>
              </defs>

              <path
                d="M 380 50 Q 250 80 160 250"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="2"
                strokeDasharray="8,4"
                fill="none"
              />

              <path
                d="M 340 250 Q 250 250 160 250"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="2"
                strokeDasharray="8,4"
                fill="none"
              />

              <path
                d="M 380 450 Q 250 420 160 250"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="2"
                strokeDasharray="8,4"
                fill="none"
              />

              <path
                d="M 470 100 Q 420 150 380 50"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="6,3"
                fill="none"
              />

              <path
                d="M 470 100 Q 350 175 160 250"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="6,3"
                fill="none"
              />

              <path
                d="M 450 250 Q 400 250 340 250"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="6,3"
                fill="none"
              />

              <path
                d="M 450 250 Q 300 250 160 250"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="6,3"
                fill="none"
              />

              <path
                d="M 480 400 Q 430 350 380 450"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="6,3"
                fill="none"
              />

              <path
                d="M 480 400 Q 320 325 160 250"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="6,3"
                fill="none"
              />

              <path
                d="M 535 250 Q 490 250 450 250"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="1"
                strokeDasharray="5,2"
                fill="none"
              />

              <path
                d="M 535 250 Q 350 250 160 250"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="1"
                strokeDasharray="5,2"
                fill="none"
              />

              <circle
                cx="160"
                cy="250"
                r="4"
                fill="#3b82f6"
                filter="url(#glow)"
              />

              <path
                d="M 155 250 L 120 250"
                stroke="#3b82f6"
                strokeWidth="1.5"
                strokeDasharray="4,2"
                fill="none"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
            </svg>

            <svg className="orbital-svg" viewBox="0 0 500 500" fill="none">
              <path
                d="M390,25 A225,225 0 0 0 750,475"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M550,25 A225,225 0 0 0 650,475"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M620,75 A175,175 0 0 0 620,425"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            <div className="zi-card-outer">
              <div className="zi-card">
                <Image
                  src="/images/footerlogo.jpeg"
                  alt="Zithspace Logo"
                  width={60}
                  height={60}
                />
              </div>
            </div>

            <div className="icon icon-top-inner">
              <div className="icon-bg">
                <Image
                  src="/images/slack.svg"
                  alt="Figma"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="icon icon-mid-inner">
              <div className="icon-bg">
                <Image
                  src="/images/quickbooks.svg"
                  alt="Quickbooks"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="icon icon-bot-inner">
              <div className="icon-bg">
                <Image
                  src="/images/Keka.png"
                  alt="Keka"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <div className="icon icon-top-mid">
              <div className="icon-bg">
                <Image
                  src="/images/greythr.png"
                  alt="GreytHR"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="icon icon-center-mid">
              <div className="icon-bg">
                <Image
                  src="/images/jira.svg"
                  alt="Jira"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="icon icon-bot-mid">
              <div className="icon-bg">
                <Image
                  src="/images/slack.svg"
                  alt="Slack"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <div className="icon icon-center-outer">
              <div className="icon-bg">
                <Image
                  src="/images/teams.webp"
                  alt="Teams"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={handleDemoModalClose} />
    </section>
  );
};

export default LandingPage;
