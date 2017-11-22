import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Alert } from './';

/*
<Button>Default</Button>
<Button bsStyle="primary">Primary</Button>
<Button bsStyle="success">Success</Button>
<Button bsStyle="info">Info</Button>
<Button bsStyle="warning">Warning</Button>
<Button bsStyle="danger">Danger</Button>
<Button bsStyle="link">Link</Button>
*/

storiesOf('Alerts', module)

  /**
   *
   */
  .add('duh', () => (
    <div>
      <Alert><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</Alert>
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
