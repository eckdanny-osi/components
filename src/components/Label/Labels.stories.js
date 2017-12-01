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
      <Label>Default</Label>{' '}
      <Label primary>Primary</Label>{' '}
      <Label success>Success</Label>{' '}
      <Label info>Info</Label>{' '}
      <Label warning>Warning</Label>{' '}
      <Label danger>Danger</Label>
    </div>
  ));
