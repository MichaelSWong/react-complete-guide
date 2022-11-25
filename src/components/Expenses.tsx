import React, { FC } from 'react';
import ExpenseItem from './ExpenseItem';
import { ExpenseProps } from './interfaces';
import './Expenses.css';
import Card from './Card';

const Expenses: FC<ExpenseProps> = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
