import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const Button = (props) => {
  const buttonClasses = `${classes.button} ${props.inverse && classes.inverse}`;

  if (props.to) {
    return (
      <Link to="/" className={buttonClasses}>
        {props.children}
      </Link>
    );
  }

  if (props.href) {
    return (
      <a className={buttonClasses} href={props.href}>
        {props.children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
