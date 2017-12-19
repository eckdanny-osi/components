import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Container } from './';
import { Row } from '../Row';
import { Col } from '../Col';

storiesOf('Grid', module)
  /**
   *
   */
  .add('duh', () => (
    <Container>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
        </Col>
        <Col xs={6} md={4}>
          <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col xs={6} md={4}>
          <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
        </Col>
        <Col xs={6} md={4}>
          <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
        </Col>
        <Col xsHidden md={4}>
          <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col xs={6} xsOffset={6}>
          <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
        </Col>
        <Col md={6} mdPull={6}>
          <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
        </Col>
      </Row>
    </Container>
  ));
