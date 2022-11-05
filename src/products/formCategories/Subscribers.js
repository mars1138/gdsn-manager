import Card from '../../shared/UIElements/Card';

import classes from './Categories.module.css';

const Subscribers = (props) => {
  const subscribers = props.subscribers;
  const subscriberList = [];
  let content;

  console.log('subscirbers: ', subscribers);
  content = <p>No Subscribers</p>;

  subscribers &&
    subscribers.forEach((customer, i) => {
      console.log('customer: ', customer);

      subscriberList.push(
        <Card key={i} index={customer}>
          <h4>{customer}</h4>
        </Card>
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
