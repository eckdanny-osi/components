import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import { Container, Row, Col, JsonDump } from '../'
import { D3Thing } from './RelationshipGraph';

import _data from '../RelationshipList/data.json';
const data = JSON.parse(JSON.stringify(_data));

storiesOf('Relationships', module)

  /**
   *
   */
  .add('RelationshipGraph', () => (
    <Container>
      <Row>
        <Col sm={6}>
        <D3Thing
          width={300}
          height={300}
          graph={data} />
        </Col>
        <Col sm={6}>
          <JsonDump data={_data} />
        </Col>
      </Row>
    </Container>
  ));
