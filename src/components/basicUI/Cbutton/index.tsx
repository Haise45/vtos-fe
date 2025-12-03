import React from 'react';
import { Button, ButtonProps } from 'antd';
import classNames from 'classnames';
import styles from './Cbutton.module.scss';

// Extend Antd ButtonProps to add custom props
export interface CbuttonProps extends ButtonProps {
  isQuery?: boolean; // Prop to enable the special "Query" style
}

const Cbutton: React.FC<CbuttonProps> = ({ 
  children, 
  className, 
  isQuery, 
  type = 'default',
  ...props 
}) => {
  // Combine default class, custom class, and query modifier
  const buttonClass = classNames(
    styles.cButton,
    {
      [styles.query]: isQuery,
    },
    className
  );

  return (
    <Button 
      className={buttonClass} 
      type={isQuery ? 'primary' : type} // Query button usually acts as a primary action
      {...props}
    >
      {children}
    </Button>
  );
};

export default Cbutton;
