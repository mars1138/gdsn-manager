import React, { useState } from 'react';

import TabItem from './TabItem';
import TabContent from './TabContent';

import classes from './Tabs.module.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('1');

  const tabClickHandler = (e) => {
    setActiveTab(e.target.id);
  };

  return (
    <div className={classes.container}>
      <ul className={classes.tabs}>
        <TabItem
          id="1"
          activeTab={activeTab}
          tabClick={tabClickHandler}
          title="Tab 1"
        />
        <TabItem
          id="2"
          activeTab={activeTab}
          tabClick={tabClickHandler}
          title="Tab 2"
        />
        <TabItem
          id="3"
          activeTab={activeTab}
          tabClick={tabClickHandler}
          title="Tab 3"
        />
        <TabItem
          id="4"
          activeTab={activeTab}
          tabClick={tabClickHandler}
          title="Tab 4"
        />
      </ul>

      <div className={classes.content}>
        <TabContent id="1" activeTab={activeTab}>
          <p>TAB 1 CONTENT</p>
        </TabContent>
        <TabContent id="2" activeTab={activeTab}>
          <p>TAB 2 CONTENT</p>
        </TabContent>
        <TabContent id="3" activeTab={activeTab}>
          <p>TAB 3 CONTENT</p>
        </TabContent>
        <TabContent id="4" activeTab={activeTab}>
          <p>TAB 4 CONTENT</p>
        </TabContent>
      </div>
    </div>
  );
};

export default TabComponent;
