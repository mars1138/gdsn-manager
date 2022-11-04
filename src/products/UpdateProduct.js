import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

// import { catalog } from '../assets/data/test-catalog';
import classes from './AddProduct.module.css';
import classes2 from './formCategories/Categories.module.css';

const UpdateProduct = () => {
  const [loadedProduct, setLoadedProduct] = useState();
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useParams();
  const catalog = useSelector((state) => state.catalog.products);

  const clearError = () => {
    setError(false);
  };

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      // gtin: {
      //   value: '',
      //   isValid: true,
      // },
      category: {
        value: '',
        isValid: true,
      },
      // type: {
      //   value: '',
      //   isValid: true,
      // },
      // image: {
      //   value: null,
      //   isValid: true,
      // },
      height: {
        value: '',
        isValid: true,
      },
      width: {
        value: '',
        isValid: true,
      },
      depth: {
        value: '',
        isValid: true,
      },
      weight: {
        value: '',
        isValid: true,
      },
      minTemp: {
        value: '',
        isValid: true,
      },
      maxTemp: {
        value: '',
        isValid: true,
      },
      storageInstructions: {
        value: '',
        isValid: true,
      },
    },
    true
  );

  const history = useHistory();

  useEffect(() => {
    let product;

    const fetchProduct = () => {
      product = catalog.filter((item) => item.gtin === params.pid);
      // console.log('fetchedProduct: ', product);
    };

    fetchProduct();
    setLoadedProduct(product[0]);
  }, [params.pid, catalog]);

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
            <Dimensions
              inputHandler={inputHandler}
              product={loadedProduct}
              edit
            />
            <PackagingHandling
              inputHandler={inputHandler}
              product={loadedProduct}
              edit
            />
            <div className={classes2['block-container']}>
              <Button type="submit" disabled={!formState.isValid}>
                Update
              </Button>
              <Button to="/products/active" danger>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default UpdateProduct;
