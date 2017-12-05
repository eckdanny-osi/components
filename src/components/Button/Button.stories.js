import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import { Button, ButtonToolbar, Icon } from '../';

storiesOf('Buttons', module)

.addDecorator(withKnobs)
.add('Button', withInfo()(() => (
  <Button
    onClick={action('clicked')}
    children={text('Text', 'Hello')}
    active={boolean('active', false)}
    disabled={boolean('disabled', false)}
    block={boolean('block', false)}
    href={text('href', '')}
    type={select('type', ['button', 'reset', 'submit'], 'button')}

    danger={boolean('danger', false)}
    success={boolean('success', false)}
    warning={boolean('warning', false)}
    primary={boolean('primary', false)}
    info={boolean('info', false)}
    default={boolean('default', true)}
    link={boolean('link', false)}

    />
)))

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
        <Button primary lg>Large button</Button>
        <Button lg>Large button</Button>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <Button primary>Default button</Button>
        <Button>Default button</Button>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <Button primary sm>Small button</Button>
        <Button sm>Small button</Button>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <Button primary xs>Extra small button</Button>
        <Button xs>Extra small button</Button>
      </ButtonToolbar>
    </div>
  ))

  /**
   *
   */
  .add('Blocks', () => (
    <div>
      <Button primary lg block>Block level button</Button>
      <Button lg block>Block level button</Button>
    </div>
  ))

  /**
   *
   */
  .add('States', () => (
    <div>
      <h3>Normal</h3>
      <ButtonToolbar>
        <Button primary lg>Primary button</Button>
        <Button lg>Button</Button>
      </ButtonToolbar>
      <h3>Active</h3>
      <ButtonToolbar>
        <Button primary lg active>Primary button</Button>
        <Button lg active>Button</Button>
      </ButtonToolbar>
      <h3>Disabled</h3>
      <ButtonToolbar>
        <Button primary lg disabled>Primary button</Button>
        <Button lg disabled>Button</Button>
      </ButtonToolbar>
    </div>
  ))

  /**
   *
   */
