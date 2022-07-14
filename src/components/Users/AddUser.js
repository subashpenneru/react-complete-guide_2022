import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  const [user, setUser] = useState({ username: '', age: '' });
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const { username, age } = user;

    if (username.trim().length === 0 || +age < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid username & age values!',
      });
      return;
    }

    onAddUser({ id: Math.random().toString(), name: username, age });
    setUser({ username: '', age: '' });
  };

  const clearErrorHandler = () => setError();

  const onChangeHandler = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClear={clearErrorHandler}
        />
      )}
      <Card className={classes.Form}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            onChange={onChangeHandler}
            value={user.username}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            id='age'
            name='age'
            value={user.age}
            onChange={onChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
