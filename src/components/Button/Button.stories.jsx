import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Icon } from '../';

storiesOf('Button', module)

  /**
   *
   */
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

  /**
   *
   */
  .add('with Icon', () => (
    <Button onClick={action('clicked')}><Icon name="rocket" /> Click Me!</Button>
  ));
