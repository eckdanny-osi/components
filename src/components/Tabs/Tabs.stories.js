import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import { Tabs, Tab } from '../';

storiesOf('Tabs', module)

  /**
   *
   */
  .add('Tabs', () => (
    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" animation={false}>
      <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
      <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
      <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
    </Tabs>
  ));
