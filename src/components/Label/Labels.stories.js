import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Label } from '../';

storiesOf('Labels', module)

  /**
   *
   */
  .add('Label', () => (
    <Label>HELLO WORLD</Label>
  ))

  /**
   *
   */
  .add('sizes', () => (
    <div>
      <h1>Label <Label>New</Label></h1>
      <h2>Label <Label>New</Label></h2>
      <h3>Label <Label>New</Label></h3>
      <h4>Label <Label>New</Label></h4>
      <h5>Label <Label>New</Label></h5>
      <p>Label <Label>New</Label></p>
    </div>
  ))

  /**
   *
   */
  .add('colors', () => (
    <div>
      <Label bsStyle="default">Default</Label>&nbsp;
      <Label bsStyle="primary">Primary</Label>&nbsp;
      <Label bsStyle="success">Success</Label>&nbsp;
      <Label bsStyle="info">Info</Label>&nbsp;
      <Label bsStyle="warning">Warning</Label>&nbsp;
      <Label bsStyle="danger">Danger</Label>
    </div>
  ));
