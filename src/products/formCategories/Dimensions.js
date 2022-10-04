import React from 'react';

import FormInput from '../../shared/components/FormElements/FormInput';

import classes from './Categories.module.css';

const Dimensions = (props) => {
  return (
    <div className={classes.category}>
      <h3>Dimensions</h3>
      <div className={classes['block-container']}>
        <div className={classes.inputs25}>
          <FormInput
            id="height"
            element="input"
            label="Height (inches)"
            // validators={}
            errorText="Please enter height in inches"
            onInput={props.inputHandler}
          />
          <FormInput
            id="width"
            element="input"
            label="Width (inches)"
            // validators={}
            errorText="Please enter width in inches"
            onInput={props.inputHandler}
          />
          <FormInput
            id="depth"
            element="input"
            label="Depth (inches)"
            // validators={}
            errorText="Please enter depth in inches"
            onInput={props.inputHandler}
          />
          <FormInput
            id="weight"
            element="input"
            label="Weight (inches)"
            // validators={}
            errorText="Please enter weight in pounds"
            onInput={props.inputHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Dimensions;
