import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Checkbox as CheckboxRBS } from 'react-bootstrap';
import Checkbox from './Checkbox';
import { Container, Row, Col, FormGroup, Icon } from '../';

storiesOf('Checkbox', module)
  /**
   *
   */
  .add('duh', () => <Checkbox>Some Label</Checkbox>)

  .add('default', () => (
    <Container>
      <Row className="text-center">
        <Col md={4}>
          <h4>Bootstrap3</h4>
        </Col>
        <Col md={4}>
          <h4>React-Bootstrap</h4>
        </Col>
        <Col md={4}>
          <h4>CWDS</h4>
        </Col>
      </Row>

      <h4>Defaults</h4>
      <Row>
        <Col md={4}>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" />
              One
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="" />
              Two
            </label>
          </div>
          <div className="checkbox disabled">
            <label>
              <input type="checkbox" value="" disabled />
              Three (disabled)
            </label>
          </div>
        </Col>
        <Col md={4}>
          <CheckboxRBS>One</CheckboxRBS>
          <CheckboxRBS>Two</CheckboxRBS>
          <CheckboxRBS disabled>Three</CheckboxRBS>
        </Col>
        <Col md={4}>
          <Checkbox>One</Checkbox>
          <Checkbox>Two</Checkbox>
          <Checkbox disabled={true}>Three</Checkbox>
        </Col>
      </Row>

      <h4>
        with <tt>inline</tt>
      </h4>
      <Row>
        <Col md={4}>
          <label className="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1" /> 1
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox2" value="option2" /> 2
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox3" value="option3" /> 3
          </label>
        </Col>
        <Col md={4}>
          <CheckboxRBS inline>One</CheckboxRBS>
          <CheckboxRBS inline>Two</CheckboxRBS>
          <CheckboxRBS inline disabled>
            Three
          </CheckboxRBS>
        </Col>
        <Col md={4}>
          <Checkbox inline>One</Checkbox>
          <Checkbox inline>Two</Checkbox>
          <Checkbox inline disabled={true}>
            Three
          </Checkbox>
        </Col>
      </Row>

      <br />
      <h4>Validation States</h4>
      <Row>
        <Col md={4}>
          <div>
            <div className="checkbox">
              <label>
                <input type="checkbox" id="checkboxSuccess" value="option1" />
                No ValidationState
              </label>
            </div>
          </div>
          <div className="has-success">
            <div className="checkbox">
              <label>
                <input type="checkbox" id="checkboxSuccess" value="option1" />
                Checkbox with success
              </label>
            </div>
          </div>
          <div className="has-warning">
            <div className="checkbox">
              <label>
                <input type="checkbox" id="checkboxWarning" value="option1" />
                Checkbox with warning
              </label>
            </div>
          </div>
          <div className="has-error">
            <div className="checkbox">
              <label>
                <input type="checkbox" id="checkboxError" value="option1" />
                Checkbox with error
              </label>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <CheckboxRBS validationState={null}>No ValidationState</CheckboxRBS>
          <CheckboxRBS validationState="success">
            Checkbox with success
          </CheckboxRBS>
          <CheckboxRBS validationState="warning">
            Checkbox with warning
          </CheckboxRBS>
          <CheckboxRBS validationState="error">Checkbox with error</CheckboxRBS>
        </Col>
        <Col md={4}>
          <Checkbox validationState={null}>No ValidationState</Checkbox>
          <Checkbox validationState="success">Checkbox with success</Checkbox>
          <Checkbox validationState="warning">Checkbox with warning</Checkbox>
          <Checkbox validationState="error">Checkbox with error</Checkbox>
        </Col>
      </Row>
    </Container>
  ))

  .add('inlined', () => (
    <div>
      <Checkbox inline={false}>One</Checkbox>
      <Checkbox inline={false}>Two</Checkbox>
      <Checkbox inline={false}>Three</Checkbox>
      <Checkbox inline={false}>Four</Checkbox>
      <Checkbox inline={false}>Five</Checkbox>
    </div>
  ));
