"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Ccard, Cbutton } from "@/components/basicUI";
import styles from "./page.module.scss";
import {
  AppstoreOutlined,
  CloudServerOutlined,
  MobileOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
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

const products = [
  {
    icon: <AppstoreOutlined />,
    title: "VTOS Core",
    description:
      "The central nervous system of your terminal. Manage vessel planning, yard operations, and gate activities in one unified platform.",
    features: [
      "Vessel Planning",
      "Yard Management",
      "Gate Operating System",
      "Billing & Invoicing",
    ],
  },
  {
    icon: <CloudServerOutlined />,
    title: "VTOS Cloud",
    description:
      "A fully managed, cloud-native solution that eliminates the need for on-premise hardware and reduces maintenance costs.",
    features: [
      "Zero Infrastructure",
      "Automatic Updates",
      "Global Accessibility",
      "Disaster Recovery",
    ],
  },
  {
    icon: <MobileOutlined />,
    title: "VTOS Mobile",
    description:
      "Empower your workforce with mobile apps for tallymen, equipment operators, and truck drivers.",
    features: [
      "Real-time Tasks",
      "Equipment Control",
      "Photo Documentation",
      "Offline Mode",
    ],
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "VTOS Secure",
    description:
      "Advanced security module ensuring compliance with international maritime security standards.",
    features: [
      "Biometric Access",
      "CCTV Integration",
      "Visitor Management",
      "ISPS Compliance",
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className={styles.products}>
      <Header />

      <section className={styles.hero}>
        <AnimatedSection>
          <h1>Our Products</h1>
          <p>
            A suite of powerful tools designed to modernize every aspect of
            terminal operations.
          </p>
        </AnimatedSection>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <AnimatedSection key={index} delay={`delay-${(index + 1) * 100}`}>
                <Ccard className={styles.productCard} elevated>
                  <div className={styles.imageWrapper}>{product.icon}</div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <ul className={styles.features}>
                    {product.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircleOutlined style={{ color: "#52c41a" }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Cbutton type="primary" block>
                    Learn More
                  </Cbutton>
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
