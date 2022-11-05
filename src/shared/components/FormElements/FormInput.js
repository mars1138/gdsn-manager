import React, { useEffect, useReducer } from 'react';

import { validate } from '../../utilities/validators';
import classes from './FormInput.module.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const FormInput = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;
  const disabledClass = `${props.edit ? classes.disabled : ''}`;

  let element;

  useEffect(() => {
    onInput && onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  if (props.element === 'input')
    element = (
      <input
        key={props.id}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        disabled={props.edit ? true : false}
        className={disabledClass}
      />
    );

  if (props.element === 'textarea')
    element = (
      <textarea
        key={props.id}
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        placeholder={props.placeholder}
      />
    );

  if (props.element === 'select') {
    const optionsArray = [];

    props.selectOptions.forEach((option, index) => {
      optionsArray.push(
        <option
          key={index}
          value={option}
          selected={option === props.selected ? option : ''}
          className={props.edit && disabledClass}
        >
          {option}
        </option>
      );
    });

    element = (
      <select
        key={props.id}
        id={props.id}
        onChange={changeHandler}
        onBlur={touchHandler}
        disabled={props.edit ? true : false}
      >
        {optionsArray}
      </select>
    );
  }

  return (
    <div
      className={`${classes['form-control']} ${
        !inputState.isValid && inputState.isTouched && classes.invalid
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default FormInput;
