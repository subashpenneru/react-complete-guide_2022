import React from 'react';
import { createPortal } from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClear}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onClear} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <ModalOverlay {...props} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
