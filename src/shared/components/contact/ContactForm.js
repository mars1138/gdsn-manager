import React, { useState } from 'react';

import useInput from '../hooks/input';
import Modal from '../../UIElements/Modal';
import LoadingSpinner from '../../UIElements/LoadingSpinner';
import Button from '../../UIElements/Button';
import classes from './ContactForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isTenChars = (value) =>
  value.trim().length === 10 && Number.isInteger(+value);
const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value);

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState();

  const submitMessage = 'Form submitted, we will contact you shortly!';

  const {
    enteredInput: enteredName,
    enteredInputValid: enteredNameValid,
    inputInvalid: nameInputInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    enteredInput: enteredPhone,
    enteredInputValid: enteredPhoneValid,
    inputInvalid: phoneInputInvalid,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isTenChars);

  const {
    enteredInput: enteredEmail,
    enteredInputValid: enteredEmailValid,
    inputInvalid: emailInputInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);

  const {
    enteredInput: enteredComments,
    inputInvalid: commentsInputInvalid,
    inputChangeHandler: commentsChangeHandler,
    reset: resetComments,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  formIsValid = enteredNameValid && enteredEmailValid && enteredPhoneValid;

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    try {
      setIsSubmitting(true);

      // const response = await fetch(
      //     `${process.env.REACT_APP_BACKEND_URL}/api/contact`,
      //     {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({
      //         name: enteredName,
      //         email: enteredEmail,
      //         phone: enteredPhone,
      //         comments: enteredComments,
      //       }),
      //     }
      //   );

      // const responseData = await response.json();

      // if (!response.ok) {
      //     throw new Error(responseData.message);
      // }

      setIsSubmitting(false);
      setDidSubmit(true);
      resetName();
      resetEmail();
      resetPhone();
      resetComments();
    } catch (err) {
      setIsSubmitting(false);
      setError(err.message || 'An unknown error occurred, please try again');
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  const resetSubmitHandler = () => {
    setDidSubmit(false);
  };

  const setControlClasses = (invalidInput) => {
    return `${classes.control} ${invalidInput ? classes.invalid : ''}`;
  };

  const nameControlClasses = setControlClasses(nameInputInvalid);
  const emailControlClasses = setControlClasses(emailInputInvalid);
  const phoneControlClasses = setControlClasses(phoneInputInvalid);
  const commentsControlClasses = setControlClasses(commentsInputInvalid);

//   const buttonClasses = `${!formIsValid ? classes['btn-disabled'] : ''}`;
  const formClasses = `${classes['contact-form']} ${
    isSubmitting ? classes.submitting : ''
  }`;

  return (
    <React.Fragment>
      {error && (
        <Modal msgHeader="Error Header" show={error} onClear={errorHandler}>
          {error}
        </Modal>
      )}
      {didSubmit && (
        <Modal
          msgHeader="Success!"
          show={didSubmit}
          onClear={resetSubmitHandler}
        >
          {submitMessage}
        </Modal>
      )}
      <div className={classes['form-container']}>
        {isSubmitting && <LoadingSpinner />}
        <form className={formClasses} onSubmit={submitHandler}>
          <div className={nameControlClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            {nameInputInvalid && <p>Please enter a valid name!</p>}
          </div>
          <div className={emailControlClasses}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailInputInvalid && <p>Please enter a valid name!</p>}
          </div>
          <div className={phoneControlClasses}>
            <label htmlFor="name">Phone</label>
            <input
              type="text"
              id="phoneNumber"
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              value={enteredPhone}
            />
            {phoneInputInvalid && <p>Please enter a phone number!</p>}
          </div>
          <div className={commentsControlClasses}>
            <label htmlFor="name">Comments</label>
            <textarea
              type="textarea"
              id="comments"
              onChange={commentsChangeHandler}
              value={enteredComments}
            />
          </div>
          <Button disabled={!formIsValid}>Submit</Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
