import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Modal from '../shared/UIElements/Modal';
import LoadingSpinner from '../shared/UIElements/LoadingSpinner';
import Button from '../shared/UIElements/Button';
import Card from '../shared/UIElements/Card';
import Section from '../shared/components/layout/Section';

import Main from './formCategories/Main';
import Dimensions from './formCategories/Dimensions';
import PackagingHandling from './formCategories/PackagingHandling';
import Subscribers from './formCategories/Subscribers';

import { useForm } from '../shared/components/hooks/form-hook';

import classes from './AddProduct.module.css';
import classes2 from './formCategories/Categories.module.css';
import { catalogActions } from '../store/catalog-slice';

const UpdateProduct = () => {
  const [loadedProduct, setLoadedProduct] = useState();
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriberUpdate, setSubscriberUpdate] = useState([]);

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      // gtin: {
      //   value: '',
      //   isValid: false,
      // },
      category: {
        value: '',
        isValid: false,
      },
      // type: {
      //   value: '',
      //   isValid: false,
      // },
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
    false,
  );

  // NOTES:  set up array that initiall duplicates product's subscriber list
  // Subscriber component will toggle whether or not customer is in this temp list
  // when form is submitting, save this temp array into loadedProduct.subscribers

  const params = useParams();

  const history = useHistory();
  const dispatch = useDispatch();
  const catalog = useSelector(state => state.catalog.products);

  // passed on to subscriber component; add/remove customer id from list of product subscribers
  const toggleSubscriber = custId => {
    if (subscriberUpdate.find(subscriber => subscriber === custId)) {
      const newSubs = subscriberUpdate.filter(sub => sub !== custId);

      setSubscriberUpdate([...newSubs]);
    } else {
      setSubscriberUpdate(prev => [...prev, custId]);
    }
  };

  console.log('subscriberUpdate: ', subscriberUpdate);

  const clearError = () => {
    setError(false);
  };

  useEffect(() => {
    let product;

    const fetchProduct = () => {
      product = catalog.filter(item => item.gtin === params.pid)[0];
      console.log('fetchedProduct: ', product);
    };

    fetchProduct();
    setLoadedProduct(product);
    setFormData(
      {
        name: {
          value: product.name,
          isValid: true,
        },
        description: {
          value: product.description,
          isValid: true,
        },
        gtin: {
          value: product.gtin,
          isValid: false,
        },
        category: {
          value: product.category,
          isValid: true,
        },
        type: {
          value: product.type,
          isValid: true,
        },
        // image: {
        //   value: null,
        //   isValid: true,
        // },
        height: {
          value: product.height,
          isValid: true,
        },
        width: {
          value: product.width,
          isValid: true,
        },
        depth: {
          value: product.depth,
          isValid: true,
        },
        weight: {
          value: product.weight,
          isValid: true,
        },
        minTemp: {
          value: product.minTemp,
          isValid: true,
        },
        maxTemp: {
          value: product.maxTemp,
          isValid: true,
        },
        storageInstructions: {
          value: product.storageInstructions,
          isValid: true,
        },
      },
      true,
    );
    setSubscriberUpdate([...product.subscribers]);
  }, [params.pid, catalog, setFormData]);

  const updateSubmitHandler = event => {
    event.preventDefault();
    // console.log('submitting...');

    try {
      setIsSubmitting(true);
      console.log('formState on submit: ', formState);
      
      setTimeout(() => {
        setIsSubmitting(false);
        history.push('/products');
        dispatch(
          catalogActions.updateExistingProduct({
            name: formState.inputs.name.value,
            description: formState.inputs.description.value,
            gtin: formState.inputs.gtin.value,
            category: formState.inputs.category.value,
            type: formState.inputs.type.value,
            image: '',
            height: formState.inputs.height.value,
            width: formState.inputs.width.value,
            depth: formState.inputs.depth.value,
            weight: formState.inputs.weight.value,
            packagingType: formState.inputs.packagingType.value,
            tempUnits: formState.inputs.tempUnits.value,
            minTemp: formState.inputs.minTemp.value,
            maxTemp: formState.inputs.maxTemp.value,
            storageInstructions: formState.inputs.storageInstructions.value,
            // subscribers: [],
          }),
        );
      }, 2000);
    } catch (err) {}
  };

  // console.log('loadedProduct: ', loadedProduct);
  // loadedProduct &&
  //   console.log('UPdate.subscirbers: ', loadedProduct.subscribers);
  console.log('formState: ', formState);
  
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
            <Subscribers
              product={loadedProduct ? loadedProduct.gtin : ''}
              subscribers={loadedProduct ? loadedProduct.subscribers : []}
              toggleSubscriber={toggleSubscriber}
            />
            {/* <Subscribers /> */}
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
