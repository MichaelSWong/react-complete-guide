import ExpenseItem from './ExpenseItem';
import { IExpenses } from './interfaces';
import './Expenses.css';
import Card from './Card';

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
