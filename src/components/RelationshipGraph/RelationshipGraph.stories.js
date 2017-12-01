import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import ContainerDimensions from 'react-container-dimensions';

import { Container, Row, Col, JsonDump } from '../'
import { D3Thing } from './RelationshipGraph';

import _data from '../RelationshipList/data.json';
const data = JSON.parse(JSON.stringify(_data));

import './style.scss';

storiesOf('Relationships', module)

  /**
   *
   */
  .add('RelationshipGraph', () => (
    <Container>
      <Row>
        <Col sm={6}>
          <div>
            <ContainerDimensions>
              { ({ width }) => <D3Thing graph={data} width={width} height={300} /> }
            </ContainerDimensions>
          </div>
        </Col>
        <Col sm={6}>
          <JsonDump data={_data} />
        </Col>
      </Row>
    </Container>
  ));
