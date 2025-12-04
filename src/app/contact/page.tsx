"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Ccard, Cbutton } from "@/components/basicUI";
import styles from "./page.module.scss";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className={styles.contact}>
      <Header />

      <section className={styles.hero}>
        <AnimatedSection>
          <h1>Get In Touch</h1>
          <p>
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </AnimatedSection>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formSection}>
              <AnimatedSection>
                <h2>
                  Send us a <span>Message</span>
                </h2>
                <p>
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </AnimatedSection>

              <AnimatedSection delay="delay-100">
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <Cbutton type="primary" size="large" block>
                    Send Message
                  </Cbutton>
                </form>
              </AnimatedSection>
            </div>

            {/* Contact Information */}
            <div className={styles.infoSection}>
              <AnimatedSection delay="delay-200">
                <h2>
                  Contact <span>Information</span>
                </h2>
                <p className={styles.subtitle}>
                  Reach out to us through any of these channels
                </p>
              </AnimatedSection>

              <div className={styles.infoCards}>
                <AnimatedSection
                  delay="delay-300"
                  className={styles.infoCardWrapper}
                >
                  <Ccard className={styles.infoCard} elevated>
                    <div className={styles.icon}>
                      <MailOutlined />
                    </div>
                    <div className={styles.content}>
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:contact@vtos.com">contact@vtos.com</a>
                        <a href="mailto:support@vtos.com">support@vtos.com</a>
                      </p>
                    </div>
                  </Ccard>
                </AnimatedSection>

                <AnimatedSection
                  delay="delay-400"
                  className={styles.infoCardWrapper}
                >
                  <Ccard className={styles.infoCard} elevated>
                    <div className={styles.icon}>
                      <PhoneOutlined />
                    </div>
                    <div className={styles.content}>
                      <h3>Phone</h3>
                      <p>
                        Sales: <a href="tel:+15551234567">+1 (555) 123-4567</a>
                        Support:{" "}
                        <a href="tel:+15559876543">+1 (555) 987-6543</a>
                      </p>
                    </div>
                  </Ccard>
                </AnimatedSection>

                <AnimatedSection
                  delay="delay-500"
                  className={styles.infoCardWrapper}
                >
                  <Ccard className={styles.infoCard} elevated>
                    <div className={styles.icon}>
                      <EnvironmentOutlined />
                    </div>
                    <div className={styles.content}>
                      <h3>Office</h3>
                      <p>
                        123 Harbor Drive
                        <br />
                        San Francisco, CA 94111
                        <br />
                        United States
                      </p>
                    </div>
                  </Ccard>
                </AnimatedSection>

                <AnimatedSection
                  delay="delay-600"
                  className={styles.infoCardWrapper}
                >
                  <Ccard className={styles.infoCard} elevated>
                    <div className={styles.icon}>
                      <ClockCircleOutlined />
                    </div>
                    <div className={styles.content}>
                      <h3>Business Hours</h3>
                      <p>
                        Mon - Fri: 9:00 AM - 6:00 PM PST
                        <br />
                        Saturday: 10:00 AM - 4:00 PM PST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </Ccard>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2>
              Visit Our <span>Office</span>
            </h2>
            <p className={styles.subtitle}>
              Find us at our headquarters in San Francisco
            </p>
          </AnimatedSection>
          <AnimatedSection delay="delay-200">
            <div className={styles.map}>
              <p>🗺️ Map Integration (Google Maps / OpenStreetMap)</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
