import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Masthead, Button } from '../';

storiesOf('Masthead', module)

  /**
   *
   */
  .add('Masthead', () => (
    <Masthead
      title="Demo Page"
      actions={
        <div>
          <Button className="btn-outline" bsSize="large">Save</Button>
        </div>
      }
      />
  ));
