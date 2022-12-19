import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
import { useHttpClient } from '../shared/components/hooks/http-hook';
import {
  useConfirmationModal,
  useConfirmModalFooter,
} from '../shared/components/hooks/confirmation-hook';
// import { catalogActions } from '../../src/store/catalog-slice';

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
  // const [error, setError] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const { isSubmitting, error, sendRequest, clearError } = useHttpClient();
  const [didSubmit, setDidSubmit] = useState(false);
  // const [showConfirmation, setShowConfirmation] = useState(false);
  // const dispatch = useDispatch();
  const history = useHistory();
  console.log(useSelector((state) => state.auth.token));
  const token = useSelector((state) => state.auth.token);

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

  const productSubmitHandler = async (event) => {
    event.preventDefault();
    setShowConfirmation(false);
    // console.log('formState.inputs: ', formState.inputs);
    // console.log('submitting...');

    try {
      // setIsSubmitting(true);
      // dispatch(catalogActions.addProduct(formState.inputs));
      // dispatch(catalogActions.setCatalogStorage());

      console.log('token: ', token);

      await sendRequest(
        'http://localhost:5000/api/products/',
        'POST',
        JSON.stringify({
          name: formState.inputs.name.value,
          description: formState.inputs.description.value,
          gtin: formState.inputs.gtin.value,
          category: formState.inputs.category.value,
          type: formState.inputs.type.value,
          // image: formState.inputs.image.value || 0,
          height: formState.inputs.height.value,
          width: formState.inputs.width.value,
          depth: formState.inputs.depth.value,
          weight: formState.inputs.weight.value,
          packagingType: formState.inputs.packagingType.value,
          tempUnits: formState.inputs.tempUnits.value,
          minTemp: formState.inputs.minTemp.value,
          maxTemp: formState.inputs.maxTemp.value,
          storageInstructions: formState.inputs.storageInstructions.value,
          subscribers: [],
          dateAdded: new Date().toISOString(),
          datePublished: null,
          dateInactive: null,
          dateModified: null,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }
      );

      // const responseData = await response.json();

      // if (!response.ok) {
      //   console.log(responseData.message);
      //   throw new Error(responseData.message);
      // }
      // console.log(responseData);

      // setIsSubmitting(false);
      setDidSubmit(true);

      // setTimeout(() => {
      //   setIsSubmitting(false);
      //   history.push('/products/active');
      // }, 2000);
    } catch (err) {
      // setErrorMessage(err.message);
      // setIsSubmitting(false);
      // setError(err.message);
      // console.log(err);
    }
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
    'Register',
    'Cancel'
  );

  const resetSubmitHandler = () => {
    setDidSubmit(false);
    history.push('/products');
  };

  return (
    <Section>
      <h1>Add Product</h1>
      <div className={classes['card-container']}>
        <Card>
          <Modal
            show={error === undefined || null ? false : true}
            msgHeader="Error creating product"
            onClear={clearError}
          >
            {`${error ? error : 'An unknown error occurred'}`}
          </Modal>
          <Modal
            show={didSubmit}
            msgHeader="Success!"
            onClear={resetSubmitHandler}
          >
            Product has been registered successfully
          </Modal>
          <Modal
            show={showConfirmation}
            onClear={cancelConfirmationHandler}
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
