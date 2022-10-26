import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Modal from '../shared/UIElements/Modal';
import LoadingSpinner from '../shared/UIElements/LoadingSpinner';
import Button from '../shared/UIElements/Button';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';

import Main from './formCategories/Main';
import Dimensions from './formCategories/Dimensions';
import PackagingHandling from './formCategories/PackagingHandling';

import { useForm } from '../shared/components/hooks/form-hook';
// import FormInput from '../shared/components/FormElements/FormInput';

import { catalog } from '../assets/data/test-catalog';
import classes from './AddProduct.module.css';
import classes2 from './formCategories/Categories.module.css';

const UpdateProduct = () => {
  const [loadedProduct, setLoadedProduct] = useState();
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useParams();

  const clearError = () => {
    setError(false);
  };

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
      image: {
        value: null,
        isValid: false,
      },
      // height: {
      //   value: '',
      //   isValid: false,
      // },
      // width: {
      //   value: '',
      //   isValid: false,
      // },
      // depth: {
      //   value: '',
      //   isValid: false,
      // },
      // weight: {
      //   value: '',
      //   isValid: false,
      // },
      // minTemp: {
      //   value: '',
      //   isValid: false,
      // },
      // maxTemp: {
      //   value: '',
      //   isValid: false,
      // },
      // storageInstructions: {
      //   value: '',
      //   isValid: false,
      // },
    },
    false
  );

  const history = useHistory();

  useEffect(() => {
    let product;

    const fetchProduct = () => {
      product = catalog.filter((item) => item.gtin === params.pid);
      console.log('fetchedProduct: ', product);
    };

    fetchProduct();
    setLoadedProduct(product[0]);
  }, [params.pid]);

  const updateSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submitting...');

    try {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        history.push('/products');
      }, 2000);
    } catch (err) {}
  };

  return (
    <Section>
      <h1>Update Product</h1>
      <div className={classes['card-container']}>
        <Card>
          <Modal show={error} onClear={clearError} />
          <form className={classes.form} onSubmit={updateSubmitHandler}>
            {isSubmitting && <LoadingSpinner />}
            <Main inputHandler={inputHandler} product={loadedProduct} edit />
            <Dimensions inputHandler={inputHandler} edit />
            <PackagingHandling inputHandler={inputHandler} edit />
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

export default UpdateProduct;
