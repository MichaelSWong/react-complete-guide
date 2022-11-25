import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import { IExpenses } from './interfaces';

const ExpenseItem = ({ title, amount, date }: IExpenses) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
