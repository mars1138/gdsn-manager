import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import useInput from '../hooks/input';
import Modal from '../../UIElements/Modal';
import LoadingSpinner from '../../UIElements/LoadingSpinner';
import Button from '../../UIElements/Button';
import FormInput from '../FormElements/FormInput';
import { useForm } from '../hooks/form-hook';
// import { useConfirmationModal } from '../hooks/confirmation-hook';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_EMAIL,
} from '../../utilities/validators';
import classes from './ContactForm.module.css';

const ContactForm = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState();

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false,
      },
      company: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      phone: {
        value: '',
        isValid: false,
      },
      comments: {
        value: '',
        isValid: true,
      },
    },
    false
  );

  const history = useHistory();
  const submitMessage = 'Form submitted, we will contact you shortly!';

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      props.toggleSubmitting();
      setIsSubmitting(true);

      // console.log('formState: ', formState);
      console.log(process.env.REACT_APP_BACKEND_URL);

      const response = await fetch(`http://localhost:5000/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.inputs.name.value,
          company: formState.inputs.company.value,
          email: formState.inputs.email.value,
          phone: formState.inputs.phone.value,
          comments: formState.inputs.comments.value,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setTimeout(() => {
        setIsSubmitting(false);
        setDidSubmit(true);
        // history.push('/about');
      }, 2000);
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

  //   const buttonClasses = `${!formIsValid ? classes['btn-disabled'] : ''}`;
  const formClasses = `${classes['contact-form']} ${
    isSubmitting ? classes.submitting : ''
  }`;

  return (
    <React.Fragment>
      {error && (
        <Modal msgHeader="Error!" show={error} onClear={errorHandler}>
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
          <FormInput
            key="name"
            id="name"
            element="input"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your full name"
            onInput={inputHandler}
          />
          <FormInput
            key="company"
            id="company"
            element="input"
            label="Company"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a company name"
            onInput={inputHandler}
          />
          <FormInput
            key="email"
            id="email"
            element="input"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address"
            onInput={inputHandler}
          />
          <FormInput
            key="phone"
            id="phone"
            element="input"
            label="Phone"
            validators={[VALIDATOR_MINLENGTH(10), VALIDATOR_MAXLENGTH(10)]}
            errorText="Please enter a valid phone number, with area code"
            onInput={inputHandler}
          />
          <FormInput
            key="comments"
            id="comments"
            element="textarea"
            label="Comments"
            initialValid={true}
            errorText="Please enter comment of minimum 10 characters"
            onInput={inputHandler}
          />
          <Button disabled={!formState.isValid}>Submit</Button>
          {/* <Button>Submit</Button> */}
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
