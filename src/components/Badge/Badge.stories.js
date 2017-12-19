import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Badge } from '../';

storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add(
    'Badge',
    withInfo()(() => (
      <Badge
        pullRight={boolean('pullRight', false)}
        children={text('content', 'hello')}
      />
    ))
  );
