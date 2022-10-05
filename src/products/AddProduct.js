import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../shared/UIElements/Modal';
import LoadingSpinner from '../shared/UIElements/LoadingSpinner';
import Button from '../shared/UIElements/Button';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';

import ImageUpload from '../shared/components/FormElements/ImageUpload';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../shared/utilities/validators';

import Main from './formCategories/Main';
// import Dimensions from './formCategories/Dimensions';
// import PackagingHandling from './formCategories/PackagingHandling';

import { useForm } from '../shared/components/hooks/form-hook';
import FormInput from '../shared/components/FormElements/FormInput';

import classes from './AddProduct.module.css';

const AddProduct = () => {
  // const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const clearError = () => {
  //   setError(false);
  // };

  const [formState, inputHandler] = useForm(
    {
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
      // category: {
      //   value: '',
      //   isValid: false,
      // },
      // productType: {
      //   value: '',
      //   isValid: false,
      // },
      // image: {
      //   value: null,
      //   isValid: false,
      // },
    },
    false
  );

  // const history = useHistory();

  const categoryOptions = ['', 'Food', 'Clothing', 'Electronics'];
  const typeOptions = ['', 'Case', 'Display', 'Each', 'Pallet'];

  const productSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submitting...');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);

    // try {
    //   history.push('/');
    // } catch (err) {}
  };

  return (
    <Section>
      <h1>Add Product</h1>
      <div className={classes['card-container']}>
        <Card>
          {/* <Modal show={error} onClear={clearError} /> */}
          <form className={classes.form} onSubmit={productSubmitHandler}>
            {isSubmitting && <LoadingSpinner />}
            {/* <div className={classes['block-container']}>
              <div className={classes['block-100']}>
                <FormInput
                  id="name"
                  element="input"
                  type="text"
                  label="Name"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid name"
                  onInput={inputHandler}
                />
                <FormInput
                  id="description"
                  element="textarea"
                  label="Product Description"
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  errorText="Please enter a description (min 10 characters)"
                  onInput={inputHandler}
                  placeholder="Please enter a valid description (at least 5 characters)"
                />
              </div>
            </div>
            <div className={classes['block-container']}>
              <div className={classes['block-50']}>
                <FormInput
                  id="GTIN14"
                  element="input"
                  label="GTIN-14 Global Trade Identification Number"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid 14 digit GTIN"
                  onInput={inputHandler}
                />
                <FormInput
                  id="category"
                  element="select"
                  selectOptions={categoryOptions}
                  label="Global Product Category Code"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please select a category"
                  onInput={inputHandler}
                />
                <FormInput
                  id="productType"
                  element="select"
                  selectOptions={typeOptions}
                  label="Product Type"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please select a type"
                  onInput={inputHandler}
                />
              </div>
              <div className={classes['block-50']}>
                <ImageUpload
                  center
                  id="image"
                  onInput={inputHandler}
                  errorText="Please provide an image"
                />
              </div>
            </div> */}
            <Main inputHandler={inputHandler} />
            {/* <Dimensions inputHandler={inputHandler} />
            <PackagingHandling inputHandler={inputHandler} /> */}
            <Button type="submit" disabled={!formState.isValid}>
              Add Item
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default AddProduct;
