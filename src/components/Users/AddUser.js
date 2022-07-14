import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  const nameInpRef = useRef();
  const ageInpRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const username = nameInpRef.current.value;
    const age = ageInpRef.current.value;

    if (username.trim().length === 0 || +age < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid username & age values!',
      });
      return;
    }

    onAddUser({ id: Math.random().toString(), name: username, age });
    nameInpRef.current.value = '';
    ageInpRef.current.value = '';
  };

  const clearErrorHandler = () => setError();

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
          <input type='text' id='username' name='username' ref={nameInpRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input type='number' id='age' name='age' ref={ageInpRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
