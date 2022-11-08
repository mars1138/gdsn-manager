import React from 'react';

import FormInput from '../../shared/components/FormElements/FormInput';
import { VALIDATOR_REQUIRE } from '../../shared/utilities/validators';

import classes from './Categories.module.css';

const PackagingHandling = (props) => {
  const tempOptions = ['', 'Farenheit', 'Celsius'];
  const packageOptions = [
    '',
    'Bag',
    'Bottle',
    'Box',
    'Carton',
    'Crate',
    'Envelope',
    'Multipack',
    'Not Packed',
    'Pallet',
    'Roll',
    'Wire',
  ];

  const { product, inputHandler } = props;

  return (
    <div className={classes.category}>
      <h3>PackagingHandling</h3>
      <div className={classes['block-container']}>
        <div className={classes['block-25']}>
          <FormInput
          key={product ? `${product.packagingType}` : 'packagingType'}
          // key="packagingType"
          id="packagingType"
            element="select"
            selectOptions={packageOptions}
            label="Packaging Type"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please select a packaging type"
            selected={product ? product.packagingType : ''}
            onInput={inputHandler}
            initialValid={true}
          />
        </div>
        <div className={classes['block-25']}>
          <FormInput
            key={product ? `${product.tempUnits}` : 'tempUnits'}
            // key="tempUnits"
            id="tempUnits"
            element="select"
            selectOptions={tempOptions}
            label="Temperature Units"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please select a unit of measure"
            selected={product ? product.tempUnits : ''}
            onInput={inputHandler}
            initialValid={true}
            />
          <FormInput
            key={product ? `${product.minTemp}` : 'minTemp'}
            // key="minTemp"
            id="minTemp"
            element="input"
            type="text"
            label="Minimum Temperature"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter min temperature"
            initialValue={product ? product.minTemp : ''}
            onInput={inputHandler}
            initialValid={true}
          />
          <FormInput
            key={product ? `${product.maxTemp}` : 'maxTemp'}
            id="maxTemp"
            element="input"
            type="text"
            label="Maximum Temperature"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter max temperature"
            initialValue={product ? product.maxTemp : ''}
            onInput={inputHandler}
            initialValid={true}
            />
        </div>
        <div className={classes['block-50']}>
          <FormInput
            key={product ? `${product.storageInstructions}` : 'storageInstructions'}
            // key="storageInstructions"
            id="storageInstructions"
            element="textarea"
            label="Storage Instructions"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter storage instructions"
            initialValue={product ? product.storageInstructions : ''}
            onInput={inputHandler}
            initialValid={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PackagingHandling;
