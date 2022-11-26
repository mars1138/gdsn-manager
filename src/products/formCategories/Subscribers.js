import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../shared/UIElements/Card';

import classes from './Categories.module.css';

const Subscriber = (props) => {
  const [deleteSub, setDeleteSub] = useState(false);

  const toggleSubHandler = (custId) => {
    setDeleteSub(!deleteSub);
    props.toggleSubscriber(custId);
  };

  return (
    <Card index={props.subscriberNum} width="30">
      <div
        className={classes.close}
        onClick={() => {
          toggleSubHandler(props.customer.id);
        }}
      >
        &times;
      </div>
      <h4>{props.customer.name}</h4>
      <h5>Cust #{props.customer.id}</h5>
      {deleteSub && <p>Pending Delete</p>}
    </Card>
  );
};

const Subscribers = (props) => {
  const customerList = useSelector((state) => state.customers.customerList);
  const subscribers = props.subscribers;
  const subscriberList = [];

  let content;

  // const cardClasses = `${}`

  // console.log('subscribers: ', subscribers);
  content = <p>No Subscribers</p>;

  subscribers &&
    subscribers.forEach((subscriberNum, i) => {
      const customer = customerList.find((cust) => cust.id === +subscriberNum);
      // console.log('customer: ', customer);

      subscriberList.push(
        <Subscriber
          key={subscriberNum}
          index={i}
          // subscriberNum={subscriberNum}
          customer={customer}
          toggleSubscriber={props.toggleSubscriber}
        />
      );
    });

  if (subscribers.length > 0) content = subscriberList;

  return (
    <div className={classes.category}>
      <h3>Subscribers</h3>
      <div className={classes['block-container']}>
        <div className={classes.subscribers}>{content}</div>
      </div>
    </div>
  );
};

export default Subscribers;
