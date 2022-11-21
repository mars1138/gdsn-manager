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
import useConfirmationModal from '../shared/components/hooks/confirmation-hook';

import classes from './AddProduct.module.css';
import classes2 from './formCategories/Categories.module.css';
import { catalogActions } from '../store/catalog-slice';

const UpdateProduct = () => {
  const [loadedProduct, setLoadedProduct] = useState();
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [showConfirmation, setShowConfirmation] = useState(false);
  const [subscriberUpdate, setSubscriberUpdate] = useState([]);
  const [selectOptionsValues, setSelectOptionsValues] = useState();

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
    false
  );

  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog.products);
  // const showUpdateConfirmHandler = (event) => {
  //   event.preventDefault();
  //   setShowConfirmation(true);
  // };
  // const cancelUpdateHandler = () => setShowConfirmation(false);

  // NOTES:  set up array that initially duplicates product's subscriber list
  // Subscriber component will toggle whether or not customer is in this temp list
  // when form is submitting, save this temp array into loadedProduct.subscribers

  // passed on to subscriber component; add/remove customer id from list of product subscribers
  const toggleSubscriber = (custId) => {
    if (subscriberUpdate.find((subscriber) => subscriber === custId)) {
      const newSubs = subscriberUpdate.filter((sub) => sub !== custId);

      setSubscriberUpdate([...newSubs]);
    } else {
      setSubscriberUpdate((prev) => [...prev, custId]);
    }
  };

  console.log('subscriberUpdate: ', subscriberUpdate);

  const clearError = () => {
    setError(false);
  };

  useEffect(() => {
    let product;

    const fetchProduct = () => {
      product = catalog.filter((item) => item.gtin === params.pid)[0];
      console.log('fetchedProduct: ', product);
    };

    fetchProduct();
    setSubscriberUpdate([...product.subscribers]);
    setSelectOptionsValues({
      category: product.category,
      type: product.type,
      packagingType: product.packagingType,
      tempUnits: product.tempUnits,
      image: product.image,
    });
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
      true
    );
    setLoadedProduct(product);
  }, [params.pid, catalog, setFormData]);

  const selectOptionsHandler = (value) => {
    const newVal = value;
    console.log('selectOptionsHandler: ', value);

    setSelectOptionsValues((prev) => {
      return { ...prev, ...newVal };
    });
  };

  const updateSubmitHandler = (event) => {
    event.preventDefault();
    setShowConfirmation(false);
    // console.log('submitting...');
    console.log('formState: ', formState);
    console.log('selectOptionsValues: ', selectOptionsValues);

    try {
      setIsSubmitting(true);

      dispatch(
        catalogActions.updateExistingProduct({
          name: formState.inputs.name.value,
          description: formState.inputs.description.value,
          gtin: formState.inputs.gtin.value,
          category: selectOptionsValues.category,
          type: selectOptionsValues.type,
          image: selectOptionsValues.image,
          height: formState.inputs.height.value,
          width: formState.inputs.width.value,
          depth: formState.inputs.depth.value,
          weight: formState.inputs.weight.value,
          packagingType: selectOptionsValues.packagingType,
          tempUnits: selectOptionsValues.tempUnits,
          minTemp: formState.inputs.minTemp.value,
          maxTemp: formState.inputs.maxTemp.value,
          storageInstructions: formState.inputs.storageInstructions.value,
          subscribers: [...subscriberUpdate],
        })
      );

      console.log('formState on submit: ', formState);

      setTimeout(() => {
        setIsSubmitting(false);
        dispatch(catalogActions.setCatalogStorage());
        history.push('/products');
      }, 2000);
    } catch (err) {}
  };

  // for Confirmation Modal
  const {
    showConfirmation,
    setShowConfirmation,
    showConfirmationHandler,
    cancelConfirmationHandler,
    confirmModalFooter,
  } = useConfirmationModal(updateSubmitHandler, 'Update', 'Cancel');

  return (
    <Section>
      <h1>Update Product</h1>
      <div className={classes['card-container']}>
        <Card>
          <Modal show={error} onClear={clearError} />
          <Modal
            show={showConfirmation}
            onCancel={cancelConfirmationHandler}
            msgHeader="Confirm Changes"
            footer={confirmModalFooter}
          >
            <p>Are you sure you want to update this product?</p>
          </Modal>
          <form className={classes.form} onSubmit={showConfirmationHandler}>
            {isSubmitting && <LoadingSpinner />}
            <Main
              inputHandler={inputHandler}
              setSelectOption={selectOptionsHandler}
              product={loadedProduct}
              edit
            />
            <Dimensions
              inputHandler={inputHandler}
              product={loadedProduct}
              edit
            />
            <PackagingHandling
              inputHandler={inputHandler}
              setSelectOption={selectOptionsHandler}
              onSubmit={updateSubmitHandler}
              product={loadedProduct}
              edit
            />
            <Subscribers
              product={loadedProduct ? loadedProduct.gtin : ''}
              subscribers={loadedProduct ? loadedProduct.subscribers : []}
              toggleSubscriber={toggleSubscriber}
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
