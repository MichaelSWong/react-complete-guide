import React, { FunctionComponent } from 'react';
import './Card.css';

type CardProps = {
  children: React.ReactNode;
  className: string;
};

const Card: FunctionComponent<CardProps> = ({ className, children }) => {
  const classes = 'card ' + className;

  return <div className={classes}>{children}</div>;
};

export default Card;
