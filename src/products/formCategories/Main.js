import React from 'react';

import FormInput from '../../shared/components/FormElements/FormInput';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import classes from './Categories.module.css';

const Main = (props) => {
  const categoryOptions = ['', 'Food', 'Clothing', 'Electronics'];
  const typeOptions = ['', 'Case', 'Display', 'Each', 'Pallet'];

  return (
    <div className={classes.category}>
      <h3>Main</h3>
      <div className={classes.inputs}>
        <FormInput
          id="name"
          element="input"
          label="Name"
          // validators={}
          errorText="Please enter a valid name"
          onInput={props.inputHandler}
        />
        <FormInput
          id="description"
          element="textarea"
          label="Product Description"
          // validators={}
          errorText="Please enter a description (min 10 characters)"
          onInput={props.inputHandler}
        />
        <FormInput
          id="GTIN14"
          element="input"
          label="GTIN-14 Global Trade Identification Number"
          // validators={}
          errorText="Please enter a valid 14 digit GTIN"
          onInput={props.inputHandler}
        />
        <FormInput
          id="category"
          element="select"
          selectOptions={categoryOptions}
          label="Global Product Category Code"
          // validators={}
          errorText="Please select a category"
          onInput={props.inputHandler}
        />
        <FormInput
          id="productType"
          element="select"
          selectOptions={typeOptions}
          label="Product Type"
          // validators={}
          errorText="Please select a type"
          onInput={props.inputHandler}
        />
        <ImageUpload
          center
          id="image"
          onInput={props.inputHandler}
          errorText="Please provide an image"
        />
      </div>
    </div>
  );
};

export default Main;
