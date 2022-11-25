import './ExpenseItem.css';
import { IExpenses } from './interfaces';

const ExpenseItem = ({ title, amount, date }: IExpenses) => {
  return (
    <div className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2 className="expense-item__price">${amount}</h2>
      </div>
    </div>
  );
};

export default ExpenseItem;
