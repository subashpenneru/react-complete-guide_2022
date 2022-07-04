import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const { month, day, year } = formatDate(date);

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

const formatDate = (date = new Date()) => {
  const month = date.toLocaleString('en-us', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-us', { day: '2-digit' });

  return { day, month, year };
};

export default ExpenseDate;
