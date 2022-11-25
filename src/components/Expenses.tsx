import React, { FC } from 'react';
import ExpenseItem from './ExpenseItem';
import { ExpenseProps } from './interfaces';

const Expenses: FC<ExpenseProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </>
  );
};

export default Expenses;
