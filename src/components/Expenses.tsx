import React, { FC } from 'react';
import ExpenseItem from './ExpenseItem';
import { ExpenseProps } from './interfaces';
import './Expenses.css';

const Expenses: FC<ExpenseProps> = ({ items }) => {
  return (
    <div className="expenses">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
