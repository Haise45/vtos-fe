import React from 'react';
import { Card } from 'antd';
import styles from './Features.module.scss';
import { 
  RocketOutlined, 
  SafetyCertificateOutlined, 
  GlobalOutlined, 
  BarChartOutlined, 
  TeamOutlined, 
  CloudSyncOutlined 
} from '@ant-design/icons';

const features = [
  {
    icon: <RocketOutlined />,
    title: 'High Performance',
    description: 'Optimized for speed and efficiency, ensuring smooth operations even during peak hours.',
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security protocols to protect your data and operations.',
  },
  {
    icon: <GlobalOutlined />,
    title: 'Global Connectivity',
    description: 'Seamlessly connect with partners and stakeholders worldwide.',
  },
  {
    icon: <BarChartOutlined />,
    title: 'Real-time Analytics',
    description: 'Gain actionable insights with our advanced reporting and analytics tools.',
  },
  {
    icon: <TeamOutlined />,
    title: 'Collaborative Workflow',
    description: 'Enable your team to work together effectively with integrated communication tools.',
  },
  {
    icon: <CloudSyncOutlined />,
    title: 'Cloud Integration',
    description: 'Fully integrated with cloud services for scalability and flexibility.',
  },
];

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Why Choose VTOS?</h2>
          <p>
            Experience the next generation of terminal operating systems with features designed for success.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Card key={index} className={styles.card} variant="borderless">
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
