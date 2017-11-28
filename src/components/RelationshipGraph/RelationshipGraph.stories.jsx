import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import { LineChart } from './RelationshipGraph';

storiesOf('Relationships', module)

  /**
   *
   */
  .add('RelationshipGraph', () => (
    <LineChart />
  ));
