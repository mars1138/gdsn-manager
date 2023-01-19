import React from 'react';

// import TabComponent from '../shared/components/TabComponent/TabComponent';
import TrainingCard from './TrainingCard';
import Section from '../shared/components/layout/Section';
import { trainingCards } from '../assets/data/trainingData';
import classes from './Training.module.css';

const Training = () => {
  const cards = [];

  trainingCards.forEach((topic, index) => {
    cards.push(<TrainingCard training={topic} index={index} key={index} />);
  });

  return (
    <React.Fragment>
      {/* <Section>
        <h2>Training</h2>
        <TabComponent>{trainingTabs}</TabComponent>
      </Section> */}
      <Section trigger=".1">
        <h2>Training</h2>
        <div className={classes.cards}>{cards}</div>
      </Section>
    </React.Fragment>
  );
};

export default Training;
