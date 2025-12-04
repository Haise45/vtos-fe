"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Ccard, Cbutton } from "@/components/basicUI";
import styles from "./page.module.scss";
import { EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
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

const jobs = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "DevOps Specialist",
    department: "Operations",
    location: "Singapore",
    type: "Full-time",
  },
  {
    title: "Sales Director",
    department: "Sales",
    location: "London, UK",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <main className={styles.careers}>
      <Header />

      <section className={styles.hero}>
        <AnimatedSection>
          <h1>Join Our Team</h1>
          <p>
            Help us build the future of global logistics. We are looking for
            passionate individuals to join our mission.
          </p>
        </AnimatedSection>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2>Open Positions</h2>
          </AnimatedSection>

          <div className={styles.jobList}>
            {jobs.map((job, index) => (
              <AnimatedSection key={index} delay={`delay-${(index + 1) * 100}`}>
                <Ccard className={styles.jobCard} elevated>
                  <div className={styles.info}>
                    <h3>{job.title}</h3>
                    <div className={styles.meta}>
                      <span>{job.department}</span>
                      <span>
                        <EnvironmentOutlined /> {job.location}
                      </span>
                      <span>
                        <ClockCircleOutlined /> {job.type}
                      </span>
                    </div>
                  </div>
                  <Cbutton type="primary">Apply Now</Cbutton>
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
