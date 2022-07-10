import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const inputChangeHandler = (e) => {
    const name = e.target.name;
    let val = e.target.value;

    setExpenseData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSaveExpenseData(expenseData);

    setExpenseData({ title: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={expenseData.title}
            onChange={inputChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            min='0.01'
            step='0.01'
            name='amount'
            value={expenseData.amount}
            onChange={inputChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            min='2019-01-01'
            max='2022-12-31'
            name='date'
            value={expenseData.date}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
