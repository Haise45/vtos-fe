"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Ccard } from "@/components/basicUI";
import styles from "./page.module.scss";
import {
  ContainerOutlined,
  DashboardOutlined,
  LineChartOutlined,
  ApiOutlined,
  CheckCircleOutlined,
  ShopOutlined,
  ToolOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AnimatedSection = ({
  children,
  className = "",
  delay = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${
        isVisible ? "animate-visible" : ""
      } ${delay} ${className}`}
    >
      {children}
    </div>
  );
};

const solutions = [
  {
    icon: <ContainerOutlined />,
    title: "Container Management",
    description:
      "Comprehensive tracking and management of containers throughout their lifecycle in your terminal. Monitor container movements, status updates, and optimize yard operations in real-time.",
    features: [
      "Real-time container tracking",
      "Automated gate operations",
      "Yard optimization algorithms",
      "Damage reporting system",
    ],
  },
  {
    icon: <DashboardOutlined />,
    title: "Operations Control Center",
    description:
      "Centralized control tower for all terminal operations. Get a bird's-eye view of your entire terminal with intuitive dashboards and real-time monitoring capabilities.",
    features: [
      "Live operations dashboard",
      "Equipment tracking",
      "Resource allocation",
      "Performance analytics",
    ],
  },
  {
    icon: <LineChartOutlined />,
    title: "Analytics & Reporting",
    description:
      "Advanced analytics platform providing deep insights into terminal performance. Make data-driven decisions with comprehensive reporting and predictive analytics.",
    features: [
      "Customizable reports",
      "Predictive analytics",
      "KPI monitoring",
      "Export capabilities",
    ],
  },
  {
    icon: <ApiOutlined />,
    title: "Integration Hub",
    description:
      "Seamlessly connect with existing systems and third-party services. Our robust API platform ensures smooth data flow across your entire operational ecosystem.",
    features: [
      "RESTful APIs",
      "EDI integration",
      "Custom connectors",
      "Webhook support",
    ],
  },
];

const industries = [
  {
    icon: <ShopOutlined />,
    title: "Port Terminals",
    description:
      "Optimized solutions for large-scale port operations handling international cargo.",
  },
  {
    icon: <ToolOutlined />,
    title: "Industrial Terminals",
    description:
      "Specialized systems for industrial and manufacturing terminal operations.",
  },
  {
    icon: <GlobalOutlined />,
    title: "Logistics Hubs",
    description:
      "Integrated solutions for multi-modal logistics and distribution centers.",
  },
];

export default function SolutionsPage() {
  return (
    <main className={styles.solutions}>
      <Header />

      <section className={styles.hero}>
        <AnimatedSection>
          <h1>Our Solutions</h1>
          <p>
            Comprehensive terminal operating solutions designed to transform
            your operations and drive efficiency.
          </p>
        </AnimatedSection>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2>
              Complete <span>Terminal Solutions</span>
            </h2>
            <p className={styles.subtitle}>
              End-to-end solutions covering every aspect of terminal operations
            </p>
          </AnimatedSection>

          <div className={styles.solutionsGrid}>
            {solutions.map((solution, index) => (
              <AnimatedSection
                key={index}
                className={`${styles.solutionCardWrapper} h-full`}
                delay={`delay-${((index % 2) + 1) * 100}`}
              >
                <Ccard className={styles.solutionCard} elevated>
                  <div className={styles.icon}>{solution.icon}</div>
                  <div className={styles.content}>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                    <div className={styles.features}>
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className={styles.feature}>
                          <CheckCircleOutlined />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Ccard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gray}`}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2>
              Industries We <span>Serve</span>
            </h2>
            <p className={styles.subtitle}>
              Tailored solutions for different types of terminal operations
            </p>
          </AnimatedSection>

          <div className={styles.industries}>
            {industries.map((industry, index) => (
              <AnimatedSection
                key={index}
                className={`${styles.industryCardWrapper} h-full`}
                delay={`delay-${(index + 1) * 100}`}
              >
                <Ccard className={styles.industryCard} elevated>
                  <div className={styles.icon}>{industry.icon}</div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </Ccard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
