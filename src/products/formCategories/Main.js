import React from 'react';

import FormInput from '../../shared/components/FormElements/FormInput';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/utilities/validators';
import classes from './Categories.module.css';

const Main = (props) => {
  // const [productItem, setProductItem] = useState();
  const categoryOptions = ['', 'Food', 'Clothing', 'Electronics'];
  const typeOptions = ['', 'Case', 'Display', 'Each', 'Pallet'];

  const { product, inputHandler } = props;

  // useEffect(() => {
  //   console.log(product);
  //   if (product) setProductItem(product);
  // }, [setProductItem, product, productItem]);

  // console.log('productItem: ', productItem);

  return (
    <div className={classes.category}>
      <h3>Main</h3>
      <div className={classes['block-container']}>
        <div className={classes['block-50']}>
          <FormInput
            key={product ? product.name : 'name'}
            id="name"
            element="input"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name"
            initialValue={product ? product.name : ''}
            initialValid={true}
            onInput={inputHandler}
          />
          <FormInput
            key={product ? product.description : 'description'}
            id="description"
            element="textarea"
            label="Product Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a description (min 10 characters)"
            initialValue={product ? product.description : ''}
            onInput={props.inputHandler}
            />
          <FormInput
            key={product ? product.gtin : 'gtin'}
            id="gtin"
            element="input"
            label="GTIN-14 Global Trade Identification Number"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid 14 digit GTIN"
            initialValue={product ? product.gtin : ''}
            onInput={props.inputHandler}
            />
          <FormInput
            key={product ? product.category : 'category'}
            id="category"
            element="select"
            selectOptions={categoryOptions}
            label="Global Product Category Code"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please select a category"
            selected={product ? product.category : ''}
            onInput={props.inputHandler}
          />
          {!props.edit && (
            <FormInput
              id="type"
              element="select"
              selectOptions={typeOptions}
              label="Product Type"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please select a type"
              onInput={props.inputHandler}
            />
          )}
        </div>
        <div className={classes['block-50']}>
          <ImageUpload
            center
            id="image"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={props.inputHandler}
            errorText="Please provide an image"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
