import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import { Container, Row, Col, Alert } from '../';
import { RelationshipForm } from './';

import _data from '../RelationshipList/data.json';
const data = JSON.parse(JSON.stringify(_data));

storiesOf('Relationships', module)

  /**
   *
   */
  .add('RelationshipForm', () => {
    return (
      <RelationshipForm
        data={data}
        renderRelationshipList={(data) => {
          if (!data.nodes) {
            return (
              <Alert info>You haven't added any people yet!</Alert>
            );
          }
          return (
            <h2>TODO</h2>
          );
        }}
      />
    );
  });
