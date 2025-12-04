"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Ccard, Cbutton } from "@/components/basicUI";
import styles from "./page.module.scss";
import {
  FileTextOutlined,
  VideoCameraOutlined,
  ReadOutlined,
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

const resources = [
  {
    type: "Blog",
    icon: <ReadOutlined />,
    title: "The Future of Port Automation",
    description:
      "Explore how AI and robotics are reshaping the landscape of terminal operations.",
    date: "Dec 1, 2023",
  },
  {
    type: "Case Study",
    icon: <FileTextOutlined />,
    title: "Success Story: Port of Singapore",
    description:
      "How VTOS helped increase throughput by 25% in one of the world's busiest ports.",
    date: "Nov 15, 2023",
  },
  {
    type: "Webinar",
    icon: <VideoCameraOutlined />,
    title: "Mastering VTOS Core",
    description:
      "A deep dive into the advanced features of our flagship product.",
    date: "Oct 28, 2023",
  },
  {
    type: "Whitepaper",
    icon: <FileTextOutlined />,
    title: "Digital Transformation Guide",
    description:
      "A comprehensive guide for terminal operators looking to modernize their stack.",
    date: "Oct 10, 2023",
  },
];

export default function ResourcesPage() {
  return (
    <main className={styles.resources}>
      <Header />

      <section className={styles.hero}>
        <AnimatedSection>
          <h1>Resources</h1>
          <p>
            Insights, guides, and news to help you stay ahead in the maritime
            industry.
          </p>
        </AnimatedSection>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {resources.map((item, index) => (
              <AnimatedSection key={index} delay={`delay-${(index + 1) * 100}`}>
                <Ccard className={styles.resourceCard} elevated>
                  <div className={styles.imagePlaceholder}>{item.icon}</div>
                  <div className={styles.category}>{item.type}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={styles.date}>{item.date}</div>
                  <Cbutton
                    type="link"
                    style={{ paddingLeft: 0, marginTop: "1rem" }}
                  >
                    Read More →
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
