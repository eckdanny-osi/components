import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ButtonToolbar } from './';
import { Button } from '../Button';

storiesOf('Buttons', module)

  /**
   *
   */
  .add('Contextual Colors', () => (
    <ButtonToolbar>
      <Button>Default</Button>
      <Button bsStyle="primary">Primary</Button>
      <Button bsStyle="success">Success</Button>
      <Button bsStyle="info">Info</Button>
      <Button bsStyle="warning">Warning</Button>
      <Button bsStyle="danger">Danger</Button>
      <Button bsStyle="link">Link</Button>
    </ButtonToolbar>
  ))

  /**
   *
   */
  .add('Sizes', () => (
    <div>
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large">Large button</Button>
        <Button bsSize="large">Large button</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="primary">Default button</Button>
        <Button>Default button</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="small">Small button</Button>
        <Button bsSize="small">Small button</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
        <Button bsSize="xsmall">Extra small button</Button>
      </ButtonToolbar>
    </div>
  ))

  /**
   *
   */
  .add('Blocks', () => (
    <div>
      <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
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
        <Button bsStyle="primary" bsSize="large">Primary button</Button>
        <Button bsSize="large">Button</Button>
      </ButtonToolbar>
      <h3>Active</h3>
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
        <Button bsSize="large" active>Button</Button>
      </ButtonToolbar>
      <h3>Disabled</h3>
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
        <Button bsSize="large" disabled>Button</Button>
      </ButtonToolbar>
    </div>
  ))

  /**
   *
   */
