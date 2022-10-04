import React from 'react';

import FormInput from '../../shared/components/FormElements/FormInput';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/utilities/validators';
import classes from './Categories.module.css';

const Main = (props) => {
  const categoryOptions = ['', 'Food', 'Clothing', 'Electronics'];
  const typeOptions = ['', 'Case', 'Display', 'Each', 'Pallet'];

  return (
    <div className={classes.category}>
      <h3>Main</h3>
      <div className={classes['block-container']}>
        <div className={classes['block-100']}>
          <FormInput
            id="name"
            element="input"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name"
            onInput={props.inputHandler}
          />
          <FormInput
            id="description"
            element="textarea"
            label="Product Description"
            validators={[VALIDATOR_MINLENGTH(10)]}
            errorText="Please enter a description (min 10 characters)"
            onInput={props.inputHandler}
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
            onInput={props.inputHandler}
          />
          <FormInput
            id="category"
            element="select"
            selectOptions={categoryOptions}
            label="Global Product Category Code"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please select a category"
            onInput={props.inputHandler}
          />
          <FormInput
            id="productType"
            element="select"
            selectOptions={typeOptions}
            label="Product Type"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please select a type"
            onInput={props.inputHandler}
          />
        </div>
        <div className={classes['block-50']}>
          <ImageUpload
            center
            id="image"
            onInput={props.inputHandler}
            errorText="Please provide an image"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
