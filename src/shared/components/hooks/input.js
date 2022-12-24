import { useState } from 'react';

const useInput = (validateInput) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const enteredInputValid = validateInput(enteredInput);
  const inputInvalid = !enteredInputValid && enteredInputTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setEnteredInputTouched(true);
  };

  const reset = () => {
    setEnteredInput('');
    setEnteredInputTouched(false);
  };

  return {
    enteredInput,
    enteredInputValid,
    inputInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
