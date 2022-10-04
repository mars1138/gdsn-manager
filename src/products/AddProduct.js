import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../shared/UIElements/Modal';
import LoadingSpinner from '../shared/UIElements/LoadingSpinner';
import Button from '../shared/UIElements/Button';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';

import Main from './formCategories/Main';
import Dimensions from './formCategories/Dimensions';
import PackagingHandling from './formCategories/PackagingHandling';

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
    category: {
      value: '',
      isValid: false,
    },
    productType: {
      value: '',
      isValid: false,
    },
    image: {
      value: null,
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

  return (
    <Section>
      <Modal show={error} onClear={clearError} />
      <h1>Add Product</h1>
      <div className={classes['card-container']}>
        <Card>
          <form className={classes.form} onSubmit={productSubmitHandler}>
            {isSubmitting && <LoadingSpinner />}
            <Main inputHandler={inputHandler} />
            {/* <Dimensions inputHandler={inputHandler} />
            <PackagingHandling inputHandler={inputHandler} /> */}
          </form>
          <Button type="submit" disabled={!formState.isValid}>
            Submit
          </Button>
        </Card>
      </div>
    </Section>
  );
};

export default AddProduct;
