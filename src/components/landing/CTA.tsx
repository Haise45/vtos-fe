"use client";

import React from "react";
import { Cbutton } from "@/components/basicUI";
import styles from "./CTA.module.scss";
import { ArrowRightOutlined, PhoneOutlined } from "@ant-design/icons";
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

const CTA: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <AnimatedSection>
          <h2>Ready to Transform Your Terminal Operations?</h2>
          <p>
            Join hundreds of terminals worldwide that trust VTOS to streamline
            their operations. Start your free trial today and experience the
            difference.
          </p>
          <div className={styles.actions}>
            <Cbutton
              size="large"
              style={{
                backgroundColor: "#ffffff",
                color: "#1890ff",
                borderColor: "#ffffff",
              }}
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
            >
              Start Free Trial
            </Cbutton>
            <Cbutton
              size="large"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                borderColor: "#ffffff",
              }}
              icon={<PhoneOutlined />}
            >
              Schedule Demo
            </Cbutton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
