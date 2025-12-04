"use client";

import React from "react";
import { Card } from "antd";
import styles from "./Features.module.scss";
import {
  RocketOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  BarChartOutlined,
  TeamOutlined,
  CloudSyncOutlined,
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

const features = [
  {
    icon: <RocketOutlined />,
    title: "High Performance",
    description:
      "Optimized for speed and efficiency, ensuring smooth operations even during peak hours.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security protocols to protect your data and operations.",
  },
  {
    icon: <GlobalOutlined />,
    title: "Global Connectivity",
    description: "Seamlessly connect with partners and stakeholders worldwide.",
  },
  {
    icon: <BarChartOutlined />,
    title: "Real-time Analytics",
    description:
      "Gain actionable insights with our advanced reporting and analytics tools.",
  },
  {
    icon: <TeamOutlined />,
    title: "Collaborative Workflow",
    description:
      "Enable your team to work together effectively with integrated communication tools.",
  },
  {
    icon: <CloudSyncOutlined />,
    title: "Cloud Integration",
    description:
      "Fully integrated with cloud services for scalability and flexibility.",
  },
];

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <AnimatedSection className={styles.header}>
          <h2>Why Choose VTOS?</h2>
          <p>
            Experience the next generation of terminal operating systems with
            features designed for success.
          </p>
        </AnimatedSection>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={`delay-${((index % 3) + 1) * 100}`}
            >
              <Card className={styles.card} variant="borderless">
                <div className={styles.icon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
