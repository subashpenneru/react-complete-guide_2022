import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  let content = <h2 className='expenses-list__fallback'>No Expenses found!</h2>;

  if (expenses.length > 0) {
    content = (
      <ul className='expenses-list'>
        {expenses.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </ul>
    );
  }

  return content;
};

export default ExpensesList;
