import { IExpenses } from '../interfaces';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = ({ items }: { items: IExpenses[] }) => {
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
