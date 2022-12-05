import { useState } from 'react';
import { IExpenses } from '../interfaces';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }: IExpenses) => {
  const [newtitle, setNewTitle] = useState(title);
  const clickHandler = () => {
    setNewTitle('Updated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newtitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
