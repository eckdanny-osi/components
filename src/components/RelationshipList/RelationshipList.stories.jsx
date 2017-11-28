import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import RelationshipList from './';
import data from './data.json';

storiesOf('Relationships', module)

  /**
   *
   */
  .add('RelationshipList', () => (
    <RelationshipList data={data} />
  ));
