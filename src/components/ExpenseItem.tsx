import './ExpenseItem.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 10, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <h2 className='expense-item__price'>${expenseAmount}</h2>
      </div>
    </div>
  );
};

export default ExpenseItem;
