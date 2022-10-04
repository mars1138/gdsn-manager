import React from 'react';

import FormInput from '../../shared/components/FormElements/FormInput';

import classes from './Categories.module.css';

const PackagingHandling = (props) => {
  const categoryOptions = ['', 'Food', 'Clothing', 'Electronics'];
  const typeOptions = ['', 'Case', 'Display', 'Each', 'Pallet'];

  return (
    <div className={classes.category}>
      <h3>PackagingHandling</h3>
      <div className={classes['block-container']}>
        <div className={classes['block-25']}>
          <FormInput
            id="packagingType"
            element="select"
            selectOptions={typeOptions}
            label="Packaging Type"
            // validators={}
            errorText="Please select a packaging type"
            onInput={props.inputHandler}
          />
        </div>
        <div className={classes['block-25']}>
          <FormInput
            id="tempUnits"
            element="select"
            selectOptions={categoryOptions}
            label="Temperature Units"
            // validators={}
            errorText="Please select a unit of measure"
            onInput={props.inputHandler}
          />
          <FormInput
            id="maxTemp"
            element="input"
            label="Maximum Temperature"
            // validators={}
            errorText="Please enter a maximum temperature"
            onInput={props.inputHandler}
          />
          <FormInput
            id="minTemp"
            element="input"
            label="Minimum Temperature"
            // validators={}
            errorText="Please enter a minimum temperature"
            onInput={props.inputHandler}
          />
        </div>
      </div>
      <div className={classes['block-container']}>
        <div className={classes['block-100']}>
          <FormInput
            id="storageInstructions"
            element="textarea"
            selectOptions={categoryOptions}
            label="Storage Instructions"
            // validators={}
            errorText="Please enter consumer storage instructions"
            onInput={props.inputHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PackagingHandling;
