"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Ccard } from "@/components/basicUI";
import styles from "./page.module.scss";
import {
  TeamOutlined,
  TrophyOutlined,
  SafetyOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import CountUp from "@/components/common/CountUp";
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

const values = [
  {
    icon: <TeamOutlined />,
    title: "Customer First",
    description:
      "We prioritize our customers' success and work tirelessly to exceed their expectations in every interaction.",
  },
  {
    icon: <TrophyOutlined />,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, continuously improving our products and services.",
  },
  {
    icon: <SafetyOutlined />,
    title: "Reliability",
    description:
      "Our systems are built to be dependable, ensuring your terminal operations run smoothly 24/7.",
  },
  {
    icon: <RocketOutlined />,
    title: "Innovation",
    description:
      "We embrace cutting-edge technology to deliver innovative solutions that drive digital transformation.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    description:
      "VTOS was established with a vision to revolutionize terminal operations through technology.",
  },
  {
    year: "2017",
    title: "First Major Client",
    description:
      "Successfully deployed our system at Port of Singapore, handling over 10,000 containers daily.",
  },
  {
    year: "2019",
    title: "Global Expansion",
    description:
      "Expanded operations to 15 countries across Asia, Europe, and North America.",
  },
  {
    year: "2021",
    title: "Cloud Migration",
    description:
      "Launched our cloud-based platform, enabling real-time global terminal management.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description:
      "Integrated AI-powered analytics and automation, increasing efficiency by 40%.",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.about}>
      <Header />

      <section className={styles.hero}>
        <AnimatedSection>
          <h1>About VTOS</h1>
          <p>
            Leading the future of terminal operations with innovative technology
            and unwavering commitment to excellence.
          </p>
        </AnimatedSection>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2>
              Our <span>Impact</span>
            </h2>
            <p className={styles.subtitle}>
              Numbers that showcase our global presence and reliability
            </p>
          </AnimatedSection>

          <div className={styles.stats}>
            <AnimatedSection className={styles.stat} delay="delay-100">
              <div className={styles.number}>
                <CountUp end={250} suffix="+" />
              </div>
              <div className={styles.label}>Terminals Worldwide</div>
            </AnimatedSection>

            <AnimatedSection className={styles.stat} delay="delay-200">
              <div className={styles.number}>
                <CountUp end={50} suffix="M+" />
              </div>
              <div className={styles.label}>Containers Handled</div>
            </AnimatedSection>

            <AnimatedSection className={styles.stat} delay="delay-300">
              <div className={styles.number}>
                <CountUp end={99.9} suffix="%" />
              </div>
              <div className={styles.label}>Uptime Reliability</div>
            </AnimatedSection>

            <AnimatedSection className={styles.stat} delay="delay-400">
              <div className={styles.number}>
                <CountUp end={15} suffix="+" />
              </div>
              <div className={styles.label}>Countries Served</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gray}`}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2>
              Our <span>Values</span>
            </h2>
            <p className={styles.subtitle}>
              The core principles that guide every decision we make
            </p>
          </AnimatedSection>

          <div className={styles.values}>
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                className={styles.valueCardWrapper}
                delay={`delay-${(index + 1) * 100}`}
              >
                <Ccard className={styles.valueCard} elevated>
                  <div className={styles.icon}>{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </Ccard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2>
              Our <span>Journey</span>
            </h2>
            <p className={styles.subtitle}>A decade of innovation and growth</p>
          </AnimatedSection>

          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <AnimatedSection
                key={index}
                className={styles.timelineItem}
                delay={`delay-${(index % 3) * 100}`}
              >
                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className={styles.year}>{item.year}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
