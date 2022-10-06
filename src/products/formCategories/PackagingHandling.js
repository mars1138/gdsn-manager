import React from 'react';

import FormInput from '../../shared/components/FormElements/FormInput';
import { VALIDATOR_REQUIRE } from '../../shared/utilities/validators';

import classes from './Categories.module.css';

const PackagingHandling = props => {
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
            type="text"
            label="Maximum Temperature"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter max temperature"
            onInput={props.inputHandler}
          />
          <FormInput
            id="minTemp"
            element="input"
            type="text"
            label="Minimum Temperature"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter min temperature"
            onInput={props.inputHandler}
          />
        </div>
        <div className={classes['block-50']}>
          <FormInput
            id="storageInstructions"
            element="textarea"
            label="Storage Instructions"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter consumer storage instructions"
            onInput={props.inputHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PackagingHandling;
