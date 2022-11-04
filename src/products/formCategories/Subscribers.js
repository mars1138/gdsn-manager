import Card from '../../shared/UIElements/Card';

import classes from './Categories.module.css';

const Subscribers = props => {
  const subscribers = props.subscribers;
  const subscriberList = [];
  let content;

  console.log('subscirbers: ', subscribers);
  content = <p>No Subscribers</p>

  subscribers && subscribers.forEach((customer, i) => {
      subscriberList.push(
        <Card index={i}>
          <h3>{customer.name}</h3>
        </Card>,
      );
    });  

  if (subscribers.length > 0) content = subscriberList;


  return (
    <div className={classes.category}>
      <h3>Subscribers</h3>
      <div className={classes['block-container']}>{content}</div>
    </div>
  );
};

export default Subscribers;
