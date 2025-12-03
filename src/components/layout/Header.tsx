'use client';

import React, { useState, useEffect } from 'react';
import { Cbutton } from '@/components/basicUI';
import styles from './Header.module.scss';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${visible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚓</span>
          VTOS
        </div>
        
        <nav className={styles.nav}>
          <Link href="#features">Features</Link>
          <Link href="#services">Services</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        
        <div className={styles.actions}>
          <Cbutton type="text">Log in</Cbutton>
          <Cbutton type="primary">Get Started</Cbutton>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <MenuOutlined />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <div className={styles.mobileActions}>
            <Cbutton type="text" block>Log in</Cbutton>
            <Cbutton type="primary" block>Get Started</Cbutton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
