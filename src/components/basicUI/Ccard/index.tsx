import React from "react";
import { Card, CardProps } from "antd";
import classNames from "classnames";
import styles from "./Ccard.module.scss";

export interface CcardProps extends CardProps {
  elevated?: boolean;
  centered?: boolean;
  compact?: boolean; // Padding nhỏ
  noPadding?: boolean; // Không padding
}

const Ccard: React.FC<CcardProps> = ({
  children,
  className,
  elevated,
  centered,
  compact,
  noPadding,
  ...props
}) => {
  const cardClass = classNames(
    styles.cCard,
    {
      [styles.elevated]: elevated,
      [styles.centered]: centered,
      [styles.compact]: compact,
      [styles.noPadding]: noPadding,
    },
    className
  );

  return (
    <Card className={cardClass} variant="borderless" {...props}>
      {children}
    </Card>
  );
};

export default Ccard;
