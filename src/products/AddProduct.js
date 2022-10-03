import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../shared/UIElements/Modal';
import LoadingSpinner from '../shared/UIElements/LoadingSpinner';
import Button from '../shared/UIElements/Button';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';
import FormInput from '../shared/components/FormElements/FormInput';

import { useForm } from '../shared/components/hooks/form-hook';

import classes from './AddProduct.module.css';

const AddProduct = () => {
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = () => {
    setError(false);
  };

  const [formState, inputHandler] = useForm({
    name: {
      value: '',
      isValid: false,
    },
    description: {
      value: '',
      isValid: false,
    },
    GTIN14: {
      value: '',
      isValid: false,
    },
  });

  const history = useHistory();

  const productSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting();

    try {
      history.push('/');
    } catch (err) {}
  };

  const categoryOptions = ['', 'Food', 'Clothing', 'Electronics'];

  return (
    <Section>
      <Modal show={error} onClear={clearError} />
      <h1>Add Product</h1>
      <Card>
        <form className={classes.form}>
          {isSubmitting && <LoadingSpinner />}
          <FormInput
            id="name"
            element="input"
            label="Name"
            // validators={}
            errorText="Please enter a valid name"
            onInput={inputHandler}
          />
          <FormInput
            id="description"
            element="textarea"
            label="Product Description"
            // validators={}
            errorText="Please enter a description (min 10 characters)"
            onInput={inputHandler}
          />
          <FormInput
            id="GTIN14"
            element="input"
            label="GTIN-14 Global Trade Identification Number"
            // validators={}
            errorText="Please enter a valid 14 digit GTIN"
            onInput={inputHandler}
          />
          <FormInput
            id="category"
            element="select"
            selectOptions={categoryOptions}
            label="Global Product Category Code"
            // validators={}
            errorText="Please select a category"
            onInput={inputHandler}
          />
        </form>
        <Button>Submit</Button>
      </Card>
    </Section>
  );
};

export default AddProduct;
