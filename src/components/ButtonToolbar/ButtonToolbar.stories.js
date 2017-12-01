import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, ButtonToolbar, Icon } from '../';

storiesOf('Buttons', module)

.add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

.add('with Icon', () => (
  <Button onClick={action('clicked')}><Icon name="rocket" /> Click Me!</Button>
))

  /**
   *
   */
  .add('Colors', () => (
    <ButtonToolbar>
      <Button>Default</Button>
      <Button primary>Primary</Button>
      {/* <Button secondary>Secondary</Button> */}
      <Button success>Success</Button>
      <Button info>Info</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
      <Button link>Link</Button>
    </ButtonToolbar>
  ))

  /**
   *
   */
  .add('Sizes', () => (
    <div>
      <ButtonToolbar>
        <Button primary bsSize="large">Large button</Button>
        <Button bsSize="large">Large button</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button primary>Default button</Button>
        <Button>Default button</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button primary bsSize="small">Small button</Button>
        <Button bsSize="small">Small button</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button primary bsSize="xsmall">Extra small button</Button>
        <Button bsSize="xsmall">Extra small button</Button>
      </ButtonToolbar>
    </div>
  ))

  /**
   *
   */
  .add('Blocks', () => (
    <div>
      <Button primary bsSize="large" block>Block level button</Button>
      <Button bsSize="large" block>Block level button</Button>
    </div>
  ))

  /**
   *
   */
  .add('States', () => (
    <div>
      <h3>Normal</h3>
      <ButtonToolbar>
        <Button primary bsSize="large">Primary button</Button>
        <Button bsSize="large">Button</Button>
      </ButtonToolbar>
      <h3>Active</h3>
      <ButtonToolbar>
        <Button primary bsSize="large" active>Primary button</Button>
        <Button bsSize="large" active>Button</Button>
      </ButtonToolbar>
      <h3>Disabled</h3>
      <ButtonToolbar>
        <Button primary bsSize="large" disabled>Primary button</Button>
        <Button bsSize="large" disabled>Button</Button>
      </ButtonToolbar>
    </div>
  ))

  /**
   *
   */
