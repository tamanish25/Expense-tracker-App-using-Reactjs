import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDAte=new Date(2022, 8, 1);
    const expenseTitle ='Car Insurance';
    const expenseAmount = 250;
    return (
    <div className="expense-item">
    <div>{expenseDAte.toISOString()}</div> 
    <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
    </div>
    </div>
 );      
 
}

export default ExpenseItem;

