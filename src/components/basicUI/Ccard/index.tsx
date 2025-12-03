import React from 'react';
import { Card, CardProps } from 'antd';
import classNames from 'classnames';
import styles from './Ccard.module.scss';

export interface CcardProps extends CardProps {
  elevated?: boolean;
  centered?: boolean;
}

const Ccard: React.FC<CcardProps> = ({ 
  children, 
  className, 
  elevated,
  centered,
  ...props 
}) => {
  const cardClass = classNames(
    styles.cCard,
    {
      [styles.elevated]: elevated,
      [styles.centered]: centered,
    },
    className
  );

  return (
    <Card 
      className={cardClass}
      variant="borderless"
      {...props}
    >
      {children}
    </Card>
  );
};

export default Ccard;
