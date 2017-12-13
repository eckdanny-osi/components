import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Layout from './Layout';
import { LayoutDashboard, LayoutSidebar } from './LayoutDashboard';

storiesOf('LayoutTest', module)
  /**
   *
   */
  .add('testing...', () => {
    return (
      <Layout
        regions={[{ sm: 8 }, { sm: 4 }]}
        content={[props => 'FIRST REGION', props => 'SECOND REGION']}
      />
    );
  })

  .add('test DashboardLayout', () => {
    return (
      <LayoutDashboard
        content={[props => 'Dashboard has only one content region!']}
      />
    );
  })

  .add('SidebarLayout', () => {
    return (
      <LayoutSidebar
        side="left"
        fixed={false}
        content={[
          props => (
            <div style={{ backgroundColor: 'yellow' }}>
              Hello World from region 1
            </div>
          ),
          props => (
            <div style={{ backgroundColor: 'green' }}>
              Hello World from region 2
            </div>
          ),
        ]}
      />
    );
  })

  .add('SidebarLayout (fixed)', () => {
    return (
      <LayoutSidebar
        side="left"
        fixed={true}
        content={[
          props => (
            <div style={{ backgroundColor: 'red' }}>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
            </div>
          ),
          props => (
            <div style={{ backgroundColor: 'pink' }}>
              <h3>alksdjfalksdjf</h3>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
              <p>asldfkjalskdjf</p>
            </div>
          ),
        ]}
      />
    );
  });
