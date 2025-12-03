import React from 'react';
import { Ccard } from '@/components/basicUI';
import styles from './Services.module.scss';
import { 
  CloudServerOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons';

const services = [
  {
    icon: <CloudServerOutlined />,
    title: 'Cloud-Based System',
    description: 'Access your terminal operations from anywhere with our secure cloud infrastructure.',
    features: [
      'Real-time data synchronization',
      '99.9% uptime guarantee',
      'Automatic backups',
      'Scalable infrastructure'
    ]
  },
  {
    icon: <ThunderboltOutlined />,
    title: 'Performance Optimized',
    description: 'Lightning-fast operations designed to handle peak traffic without slowdowns.',
    features: [
      'Sub-second response times',
      'Optimized database queries',
      'Load balancing',
      'CDN integration'
    ]
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: 'Enterprise Security',
    description: 'Bank-level security protocols to protect your sensitive operational data.',
    features: [
      'End-to-end encryption',
      'Role-based access control',
      'Audit logs',
      'Compliance certified'
    ]
  },
  {
    icon: <CustomerServiceOutlined />,
    title: '24/7 Support',
    description: 'Round-the-clock technical support to ensure smooth operations.',
    features: [
      'Dedicated support team',
      'Multi-channel support',
      'Training & onboarding',
      'Regular updates'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            Comprehensive solutions tailored to modernize and optimize your terminal operations.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Ccard key={index} className={styles.serviceCard} elevated>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </Ccard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
