import React from 'react';

import ContactForm from './ContactForm';
import ContactText from './ContactText';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={classes.contact}>
      <ContactForm />
      <ContactText />
    </div>
  );
};

export default Contact;