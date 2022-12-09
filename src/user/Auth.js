import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Section from '../shared/components/layout/Section';
import Card from '../shared/UIElements/Card';
import FormInput from '../shared/components/FormElements/FormInput';
import Button from '../shared/UIElements/Button';
import { useForm } from '../shared/components/hooks/form-hook';
import { authActions } from '../store/auth-slice';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../shared/utilities/validators';
import classes from './Auth.module.css';

const Auth = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();
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
    false,
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
        formState.inputs.email.isValid && formState.inputs.password.isValid,
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
        false,
      );
    }
    setIsLoginMode(previousMode => !previousMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    dispatch(authActions.login());
    history.push('/products');
  };

  return (
    <Section>
      <div className={classes['auth-container']}>
        <Card width="40">
          <h3>Please Login</h3>
          <form onSubmit={authSubmitHandler}>
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
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid password (minimum 5 characters)"
              onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
              {isLoginMode ? 'Login' : 'Signup'}
            </Button>
          </form>
          <Button inverse onClick={switchModeHandler}>
            Switch to {isLoginMode ? 'Signup' : 'Login'}
          </Button>
        </Card>
      </div>
    </Section>
  );
};

export default Auth;
