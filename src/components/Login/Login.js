import React, { useState, useReducer, useEffect, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { useAuthContext } from '../../context/auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'USER_EMAIL_INPUT') {
    return {
      ...state,
      value: action.payload,
      isValid: action.payload.includes('@'),
    };
  }
  if (action.type === 'INP_BLUR') {
    return {
      ...state,
      isValid: state.value.includes('@'),
    };
  }
  return {
    ...state,
  };
};

const passwordemailReducer = (state, action) => {
  if (action.type === 'USER_PWD_INPUT') {
    return {
      ...state,
      value: action.payload,
      isValid: action.payload.trim().length > 6,
    };
  }
  if (action.type === 'INP_BLUR') {
    return {
      ...state,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    ...state,
  };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [pwdState, dispatchPwd] = useReducer(passwordemailReducer, {
    value: '',
    isValid: null,
  });

  const { onLogin } = useAuthContext();

  const emailRef = useRef();
  const pwdRef = useRef();

  // useEffect(() => {
  //   return () => {
  //     console.log('cleanup');
  //   };
  // }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormIsValid(emailState.isValid && pwdState.isValid);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [emailState.isValid, pwdState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_EMAIL_INPUT', payload: event.target.value });

    setFormIsValid(event.target.value.includes('@') && pwdState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPwd({ type: 'USER_PWD_INPUT', payload: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INP_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPwd({ type: 'INP_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      onLogin(emailState.value, pwdState.value);
    } else if (!emailState.isValid) {
      emailRef.current.focus();
    } else {
      pwdRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          id='email'
          type='email'
          label='E-Mail'
          changeHandler={emailChangeHandler}
          blurHandler={validateEmailHandler}
          value={emailState.value}
          isValid={emailState.isValid}
        />
        <Input
          ref={pwdRef}
          id='password'
          type='password'
          label='Password'
          changeHandler={passwordChangeHandler}
          blurHandler={validatePasswordHandler}
          value={pwdState.value}
          isValid={pwdState.isValid}
        />
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
