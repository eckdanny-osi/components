import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Card } from './';

storiesOf('Card', module)

  /**
   *
   */
  .add('Simple Cards', () => (
    <div>
      <h3>Card</h3>
      <Card>I am a card</Card>
      <h3>Card with Header</h3>
      <Card header="The Header">
        Card Content here.
      </Card>
      <h3>Card with Header and Footer</h3>
      <p>Passing strings to <tt>header</tt> and <tt>footer</tt> props:</p>
      <Card
        header="Header"
        footer="Footer"
      >Card Content</Card>
    </div>
  ));
