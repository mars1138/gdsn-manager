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
// import FormInput from '../shared/components/FormElements/FormInput';

// import { catalog } from '../assets/data/test-catalog';
import classes from './AddProduct.module.css';
import classes2 from './formCategories/Categories.module.css';
import { catalogActions } from '../store/catalog-slice';
// import { catalogActions } from '../store/catalog-slice';

const UpdateProduct = () => {
  const [loadedProduct, setLoadedProduct] = useState();
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriberUpdate, setSubscriberUpdate] = useState([]);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

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
    true,
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

  readyToSubmit &&
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
        subscribers: [...subscriberUpdate],
      }),
    );

  readyToSubmit && dispatch(catalogActions.setCatalogStorage());

  console.log('subscriberUpdate: ', subscriberUpdate);

  const clearError = () => {
    setError(false);
  };

  useEffect(() => {
    let product;

    const fetchProduct = () => {
      product = catalog.filter(item => item.gtin === params.pid);
      console.log('fetchedProduct: ', product);
    };

    fetchProduct();
    setLoadedProduct(product[0]);
    setSubscriberUpdate([...product[0].subscribers]);
  }, [params.pid, catalog, setSubscriberUpdate]);

  const updateSubmitHandler = event => {
    event.preventDefault();
    // console.log('submitting...');

    try {
      setIsSubmitting(true);
      setReadyToSubmit(true);
      setTimeout(() => {
        setIsSubmitting(false);
        history.push('/products');
      }, 2000);
    } catch (err) {}
  };

  // console.log('loadedProduct: ', loadedProduct);
  // loadedProduct &&
  //   console.log('UPdate.subscirbers: ', loadedProduct.subscribers);

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
