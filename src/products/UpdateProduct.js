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
import Subscribers from './formCategories/Subscribers';

import { useHttpClient } from '../shared/components/hooks/http-hook';
import { useForm } from '../shared/components/hooks/form-hook';
import {
  useConfirmationModal,
  useConfirmModalFooter,
} from '../shared/components/hooks/confirmation-hook';

import {
  categoryOptions,
  typeOptions,
  tempOptions,
  packageOptions,
} from '../assets/data/test-catalog';
import classes from './AddProduct.module.css';
import classes2 from './formCategories/Categories.module.css';
// import { catalogActions } from '../store/catalog-slice';

const UpdateProduct = () => {
  const [loadedProduct, setLoadedProduct] = useState();
  // const [error, setError] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const { sendRequest, error, clearError, isSubmitting } = useHttpClient();
  const params = useParams();
  const history = useHistory();
  // const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog.products);
  const authToken = useSelector((state) => state.auth.token);
  const authUserId = useSelector((state) => state.auth.userId);

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
    // console.log('custId: ', custId);
    // console.log('subscriberUpdate: ', subscriberUpdate);
    // console.log(subscriberUpdate.find((subscriber) => subscriber === custId));

    if (subscriberUpdate.find((subscriber) => subscriber === custId)) {
      const newSubs = subscriberUpdate.filter((sub) => sub !== custId);

      setSubscriberUpdate([...newSubs]);
    } else {
      setSubscriberUpdate((prev) => [...prev, +custId]);
    }
  };

  useEffect(() => {
    let product;
    console.log(params.pid);
    const fetchProduct = () => {
      product = catalog.filter((item) => item.gtin === +params.pid)[0];
      console.log('fetchedProduct: ', product);
    };

    fetchProduct();
    if (product.subscribers && product.subscribers.length > 0)
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
          isValid: true,
        },
        category: {
          value: product.category,
          isValid: true,
        },
        type: {
          value: product.type,
          isValid: true,
        },
        image: {
          value: product.image,
          isValid: true,
        },
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
        packagingType: {
          value: product.packagingType || '',
          isValid: true,
        },
        tempUnits: {
          value: product.tempUnits || '',
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
    // console.log('selectOptionsHandler: ', value);

    setSelectOptionsValues((prev) => {
      return { ...prev, ...newVal };
    });
  };

  const updateSubmitHandler = (event) => {
    event.preventDefault();
    setShowConfirmation(false);
    // console.log('submitting...');
    console.log('formState: ', formState);

    console.log('updateSubmit subscriberUpdate: ', subscriberUpdate);
    // const subArray = [...loadedProduct.subscribers, subscriberUpdate];

    let url;

      const fetchData = async () => {
        try {
          console.log('exec replaceCatalog...');
          url =
            process.env.REACT_APP_BACKEND_URL +
            `/api/products/${formState.inputs.gtin.value}`;

          const formData = new FormData();
          formData.append('name', formState.inputs.name.value);
          formData.append('description', formState.inputs.description.value);
          formData.append('gtin', formState.inputs.gtin.value);
          formData.append('category', formState.inputs.category.value);
          formData.append('type', formState.inputs.type.value);
          formData.append('image', formState.inputs.image.value);
          formData.append('height', formState.inputs.height.value);
          formData.append('width', formState.inputs.width.value);
          formData.append('depth', formState.inputs.depth.value);
          formData.append('weight', formState.inputs.weight.value);
          formData.append(
            'packagingType',
            formState.inputs.packagingType.value
          );
          formData.append('tempUnits', formState.inputs.tempUnits.value);
          formData.append('minTemp', formState.inputs.minTemp.value);
          formData.append('maxTemp', formState.inputs.maxTemp.value);
          formData.append(
            'storageInstructions',
            formState.inputs.storageInstructions.value
          );
          formData.append('subscribers', subscriberUpdate);
          // formData.append('dateAdded', new Date().toISOString());
          // formData.append('datePublished', null);
          // formData.append('dateInactive', null);
          // formData.append('dateModified', null);

          await sendRequest(
            url,
            'PATCH',
            // JSON.stringify({
            //   name: formState.inputs.name.value,
            //   description: formState.inputs.description.value,
            //   gtin: formState.inputs.gtin.value,
            //   category: selectOptionsValues.category,
            //   type: selectOptionsValues.type,
            //   image: selectOptionsValues.image,
            //   height: formState.inputs.height.value,
            //   width: formState.inputs.width.value,
            //   depth: formState.inputs.depth.value,
            //   weight: formState.inputs.weight.value,
            //   packagingType: selectOptionsValues.packagingType,
            //   tempUnits: selectOptionsValues.tempUnits,
            //   minTemp: formState.inputs.minTemp.value,
            //   maxTemp: formState.inputs.maxTemp.value,
            //   storageInstructions: formState.inputs.storageInstructions.value,
            //   subscribers: [...subscriberUpdate],
            //   dateModified: new Date().getTime(),
            // }),
            formData,
            {
              Authorization: 'Bearer ' + authToken,
            }
          );

          setDidSubmit(true);
        } catch (err) {
          console.log(err);
        }
      };

      if (authToken && authUserId) {
        fetchData(authUserId);
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
    updateSubmitHandler,
    cancelConfirmationHandler,
    'Update',
    'Cancel'
  );

  const resetSubmitHandler = () => {
    setDidSubmit(false);
    history.push('/products');
  };

  console.log(selectOptionsValues);
  console.log('loadedProduct: ', loadedProduct);
  // console.log('formState: ', formState);

  return (
    <Section>
      <h1>Update Product</h1>
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
            Product has been updated successfully
          </Modal>
          <Modal
            show={showConfirmation}
            onClear={cancelConfirmationHandler}
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
              categoryOptions={categoryOptions}
              typeOptions={typeOptions}
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
              packageOptions={packageOptions}
              tempOptions={tempOptions}
              edit
            />
            <Subscribers
              product={loadedProduct ? loadedProduct.gtin : ''}
              subscribers={loadedProduct ? loadedProduct.subscribers : []}
              // subscribers={subscriberUpdate ? subscriberUpdate : []}
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
