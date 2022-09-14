import React from 'react';

import classes from './TabContent.module.css';

const TabContent = (props) => {
  const contentClasses = `'classes.content' ${
    props.activeTab === props.id ? classes.active : ''
  }`;

  return <div className={contentClasses}>{props.children}</div>;
};

export default TabContent;
