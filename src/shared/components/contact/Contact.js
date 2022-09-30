import React, { useState } from 'react';

import ContactForm from './ContactForm';
import ContactText from './ContactText';
import classes from './Contact.module.css';

const Contact = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);

  const setSubmittingHandler = () => {
    setFormSubmitting((prev) => !prev);
  };

  const contactClasses = `${classes.contact} ${
    formSubmitting ? classes.submitting : ''
  }`;

  return (
    <div id="contact-form">
      <h1>Contact us today for more information!</h1>
      <div className={contactClasses}>
        <ContactForm toggleSubmitting={setSubmittingHandler} />
        <ContactText />
      </div>
    </div>
  );
};

export default Contact;
