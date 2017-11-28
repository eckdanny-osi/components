import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import { Container, Row, Col } from '../';
import RelationshipList from './';
import _data from './data.json';

const data = JSON.parse(JSON.stringify(_data));



const JsonDump = ({
  data
}) => (
  <pre>
    {JSON.stringify(data, null, 2)}
  </pre>
);

storiesOf('Relationships', module)

  /**
   *
   */
  .add('RelationshipList', () => (
    <Container>
      <Row>
        <Col sm={6}>
          <RelationshipList data={data} />
        </Col>
        <Col sm={6}>
          <JsonDump data={data} />
        </Col>
      </Row>
    </Container>
  ));
