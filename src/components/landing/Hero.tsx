import React from 'react';
import Image from 'next/image';
import { Cbutton } from '@/components/basicUI';
import styles from './Hero.module.scss';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.waves}>
        <div className={styles.wave}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            The Future of <br />
            <span>Terminal Operating Systems</span>
          </h1>
          <p>
            Optimize your port operations with VTOS. A comprehensive, intelligent, 
            and real-time solution designed for modern logistics.
          </p>
          <div className={styles.cta}>
            <Cbutton type="primary" size="large" icon={<ArrowRightOutlined />} iconPlacement="end">
              Get Started
            </Cbutton>
            <Cbutton size="large" icon={<PlayCircleOutlined />}>
              Watch Demo
            </Cbutton>
          </div>
        </div>
        
        <div className={styles.shipContainer}>
          <Image 
            src="/ship_img.png" 
            alt="Container Ship" 
            className={styles.ship}
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
