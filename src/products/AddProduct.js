import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import {
  useConfirmationModal,
  useConfirmModalFooter,
} from '../shared/components/hooks/confirmation-hook';
import { catalogActions } from '../../src/store/catalog-slice';

// import FormInput from '../shared/components/FormElements/FormInput';
import {
  categoryOptions,
  typeOptions,
  tempOptions,
  packageOptions,
} from '../assets/data/test-catalog';
import classes from './AddProduct.module.css';
import classes2 from './formCategories/Categories.module.css';

const AddProduct = () => {
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [showConfirmation, setShowConfirmation] = useState(false);

  const dispatch = useDispatch();

  const clearError = () => {
    setError(false);
  };

  // const showAddConfirmHandler = (event) => {
  //   event.preventDefault();
  //   setShowConfirmation(true);
  // };
  // const cancelAddHandler = () => setShowConfirmation(false);

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
      gtin: {
        value: '',
        isValid: false,
      },
      category: {
        value: '',
        isValid: false,
      },
      type: {
        value: '',
        isValid: false,
      },
      // image: {
      //   value: null,
      //   isValid: false,
      // },
      height: {
        value: '',
        isValid: false,
      },
      width: {
        value: '',
        isValid: false,
      },
      depth: {
        value: '',
        isValid: false,
      },
      weight: {
        value: '',
        isValid: false,
      },
      minTemp: {
        value: '',
        isValid: false,
      },
      maxTemp: {
        value: '',
        isValid: false,
      },
      storageInstructions: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const productSubmitHandler = (event) => {
    event.preventDefault();
    setShowConfirmation(false);
    // console.log('formState.inputs: ', formState.inputs);
    // console.log('submitting...');

    try {
      setIsSubmitting(true);
      dispatch(catalogActions.addProduct(formState.inputs));
      dispatch(catalogActions.setCatalogStorage());

      setTimeout(() => {
        setIsSubmitting(false);
        history.push('/products/active');
      }, 2000);
    } catch (err) {}
  };

  // for Confirmation Modal
  const {
    showConfirmation,
    setShowConfirmation,
    showConfirmationHandler,
    cancelConfirmationHandler,
  } = useConfirmationModal();

  const confirmModalFooter = useConfirmModalFooter(
    productSubmitHandler,
    cancelConfirmationHandler,
    'Add',
    'Cancel'
  );

  return (
    <Section>
      <h1>Add Product</h1>
      <div className={classes['card-container']}>
        <Card>
          <Modal show={error} onClear={clearError} />
          <Modal
            show={showConfirmation}
            onCancel={cancelConfirmationHandler}
            msgHeader="Confirm Registration"
            footer={confirmModalFooter}
          >
            <p>Are you sure you want to register this product?</p>
          </Modal>
          <form className={classes.form} onSubmit={showConfirmationHandler}>
            {isSubmitting && <LoadingSpinner />}
            <Main
              inputHandler={inputHandler}
              categoryOptions={categoryOptions}
              typeOptions={typeOptions}
            />
            <Dimensions inputHandler={inputHandler} />
            <PackagingHandling
              inputHandler={inputHandler}
              packageOptions={packageOptions}
              tempOptions={tempOptions}
            />
            <div className={classes2['block-container']}>
              <Button type="submit" disabled={!formState.isValid}>
                Add Item
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default AddProduct;
