import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Section from '../shared/components/layout/Section';
import Card from '../shared/UIElements/Card';
import FormInput from '../shared/components/FormElements/FormInput';
import Button from '../shared/UIElements/Button';
import Modal from '../shared/UIElements/Modal';
import LoadingSpinner from '../shared/UIElements/LoadingSpinner';
import { useForm } from '../shared/components/hooks/form-hook';
import { useHttpClient } from '../shared/components/hooks/http-hook';
import { authActions } from '../store/auth-slice';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../shared/utilities/validators';
import classes from './Auth.module.css';

const Auth = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSubmitting, error, sendRequest, clearError } = useHttpClient();
  // const [didSubmit, setDidSubmit] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  if (isAuth) {
    dispatch(authActions.logout());
    history.push('/auth');
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          company: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isvalid: false,
          },
          company: {
            value: '',
            isvalid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((previousMode) => !previousMode);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    let responseData;

    if (isLoginMode) {
      try {
        responseData = await sendRequest(
          'http://localhost:5000/api/users/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            'Content-Type': 'application/json',
          }
        );

        console.log('loginResonse: ', responseData);

        dispatch(
          authActions.login({
            user: responseData.userData.userId,
            token: responseData.userData.token,
          })
        );
        history.push('/products');
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        responseData = await sendRequest(
          'http://localhost:5000/api/users/signup',
          'POST',
          JSON.stringify({
            name: formState.inputs.name.value,
            company: formState.inputs.company.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            'Content-Type': 'application/json',
          }
        );

        console.log('SignupResonse: ', responseData);

        dispatch(
          authActions.login({
            user: responseData.userData.userId,
            token: responseData.userData.token,
          })
        );
        history.push('/products');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Section>
      <div className={classes['auth-container']}>
        <Card width="40">
          <Modal
            show={error === undefined || null ? false : true}
            msgHeader={
              isLoginMode ? 'Error during login' : 'Error during signup'
            }
            onClear={clearError}
          >
            {error}
          </Modal>
          <h3>{isLoginMode ? 'Please Login' : 'Create an Account'}</h3>
          <form onSubmit={authSubmitHandler}>
            {isSubmitting && <LoadingSpinner />}
            {!isLoginMode && (
              <>
                <FormInput
                  element="input"
                  id="name"
                  type="text"
                  label="Name"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid name"
                  onInput={inputHandler}
                />
                <FormInput
                  element="input"
                  id="company"
                  type="text"
                  label="Company"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid Company name"
                  onInput={inputHandler}
                />
              </>
            )}
            <FormInput
              element="input"
              id="email"
              type="email"
              label="Email"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a valid email address"
              onInput={inputHandler}
            />
            <FormInput
              element="input"
              id="password"
              type="password"
              label="Password"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Please enter a valid password (minimum 5 characters)"
              onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
              {isLoginMode ? 'Login' : 'Sign up'}
            </Button>
          </form>
          <span className={classes.mode} onClick={switchModeHandler}>
            {isLoginMode ? 'Signup for an account' : 'Already have an account?'}
          </span>
        </Card>
      </div>
    </Section>
  );
};

export default Auth;
