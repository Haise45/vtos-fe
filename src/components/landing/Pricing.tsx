"use client";

import React from "react";
import { Ccard, Cbutton } from "@/components/basicUI";
import styles from "./Pricing.module.scss";
import { CheckOutlined } from "@ant-design/icons";
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

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "/month",
    description: "Perfect for small terminals",
    features: [
      "Up to 50 containers/day",
      "Basic reporting",
      "Email support",
      "1 user account",
      "Mobile app access",
    ],
  },
  {
    name: "Professional",
    price: "$2,499",
    period: "/month",
    description: "Ideal for growing operations",
    popular: true,
    features: [
      "Up to 500 containers/day",
      "Advanced analytics",
      "Priority support",
      "10 user accounts",
      "API access",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale terminals",
    features: [
      "Unlimited containers",
      "Full analytics suite",
      "24/7 dedicated support",
      "Unlimited users",
      "White-label option",
      "On-premise deployment",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <AnimatedSection className={styles.header}>
          <h2>
            Simple, <span>Transparent Pricing</span>
          </h2>
          <p>Choose the plan that best fits your terminal operations</p>
        </AnimatedSection>
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <AnimatedSection
              key={index}
              delay={`delay-${(index + 1) * 100}`}
              className="h-full"
            >
              <Ccard
                className={`${styles.pricingCard} ${
                  plan.popular ? styles.popular : ""
                }`}
                elevated={!plan.popular}
              >
                <div className={styles.planName}>{plan.name}</div>
                <div className={styles.price}>
                  {plan.price}
                  <span>{plan.period}</span>
                </div>
                <p className={styles.description}>{plan.description}</p>
                <ul className={styles.features}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckOutlined
                        style={{ color: "#52c41a", marginRight: "0.5rem" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Cbutton
                  type={plan.popular ? "primary" : "default"}
                  size="large"
                  block
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Cbutton>
              </Ccard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
