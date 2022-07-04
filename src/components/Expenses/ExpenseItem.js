import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ title, date, amount }) => {
  const [titleVal, setTitleVal] = useState(title);

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{titleVal}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
