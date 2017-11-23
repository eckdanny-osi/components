import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Alert } from './';

storiesOf('Alerts', module)

  /**
   *
   */
  .add('Colors', () => (
    <div>
      <Alert bsStyle="success"><strong>Success!</strong> You survived</Alert>
      <Alert bsStyle="info"><strong>Info</strong> Just some info...</Alert>
      <Alert bsStyle="warning"><strong>Caution!</strong> You better watch out!</Alert>
      <Alert bsStyle="danger"><strong>Error!</strong> You broke the internet.</Alert>
    </div>
  ))

  .add('Dismissible', () => (
    <div>
      TODO!!!
    </div>
  ))
