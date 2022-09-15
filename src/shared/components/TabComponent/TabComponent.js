import React, { useState } from 'react';

import TabItem from './TabItem';
import TabContent from './TabContent';

import classes from './TabComponent.module.css';

const TabComponent = props => {
  const [activeTab, setActiveTab] = useState(props.children[0].id);

  const tabClickHandler = e => {
    setActiveTab(+e.target.id);
  };

  const tabsData = [];
  const contentData = [];

  props.children.forEach(tab => {
    tabsData.push(
      <TabItem
        key={tab.id}
        id={tab.id}
        activeTab={activeTab}
        tabClick={tabClickHandler}
        title={tab.tabTitle}
      />,
    );

    contentData.push(
      <TabContent key={tab.id} id={tab.id} activeTab={activeTab} imageSrc={tab.imgUrl} heading={tab.contentHeading} text={tab.content} />
    );
  });

  return (
    <div className={classes.container}>
      <ul className={classes.tabs}>{tabsData}</ul>

      <div className={classes.content}>{contentData}</div>
    </div>
  );
};

export default TabComponent;
