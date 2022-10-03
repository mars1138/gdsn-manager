import React from 'react';

import FormInput from '../../shared/components/FormElements/FormInput';

import classes from './Categories.module.css';

const Dimensions = (props) => {
  return (
    <div className={classes.category}>
      <h3>Dimensions</h3>
      <div className={classes.inputs}>
        <FormInput
          id="height"
          element="input"
          label="Height"
          // validators={}
          errorText="Please enter height in inches"
          onInput={props.inputHandler}
        />
        <FormInput
          id="width"
          element="input"
          label="Width"
          // validators={}
          errorText="Please enter width in inches"
          onInput={props.inputHandler}
        />
        <FormInput
          id="depth"
          element="input"
          label="Depth"
          // validators={}
          errorText="Please enter depth in inches"
          onInput={props.inputHandler}
        />
        <FormInput
          id="weight"
          element="input"
          label="Weight"
          // validators={}
          errorText="Please enter weight in pounds"
          onInput={props.inputHandler}
        />
      </div>
    </div>
  );
};

export default Dimensions;
