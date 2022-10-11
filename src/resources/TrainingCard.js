import React from 'react';

import Card from '../shared/UIElements/Card';

import classes from './TrainingCard.module.css';

const TrainingCard = props => {
  return (
    <Card width="75" margin="medium">
      <h2 className={classes.title}>{props.training.title}</h2>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src={props.training.imgUrl} alt={props.training.title} />
        </div>
        <div className={classes.text}>
          <p>{props.training.text}</p>
        </div>
      </div>
    </Card>
  );
};

export default TrainingCard;
