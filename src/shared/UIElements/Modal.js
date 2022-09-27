import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import Button from '../UIElements/Button';
import classes from './Modal.module.css';

const ModalOverlay = (props) => {
  const content = (
    <div className={classes.modal}>
      <h2 className={classes.header}>
        {props.msgHeader ? `${props.msgHeader}` : ''}
      </h2>
      <p className={classes.message}>
        {/* {props.message ? props.message : ''} */}
        {props.children}
      </p>
      <div className={classes.button}>
        <Button onClick={props.onClear}>Close</Button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onClear} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        // timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
