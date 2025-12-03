import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h4>Product</h4>
          <Link href="#">Features</Link>
          <Link href="#">Integrations</Link>
          <Link href="#">Pricing</Link>
        </div>
        <div className={styles.column}>
          <h4>Resources</h4>
          <Link href="#">Documentation</Link>
          <Link href="#">API Reference</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className={styles.column}>
          <h4>Company</h4>
          <Link href="#">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className={styles.column}>
          <h4>Legal</h4>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} VTOS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
