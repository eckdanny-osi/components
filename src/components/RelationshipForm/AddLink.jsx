import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Well, FormGroup, ControlLabel, Button, Icon } from '../';

const propTypes = {};

const defaultProps = {};

const AddLinkForm = ({ pendingLink, onChange, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };
  const handleChange = e => {
    onChange({
      ...pendingLink,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h4>Add Relationship</h4>
      <Row>
        <Col xs={12}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Well>
              <Row>
                <Col sm={3}>
                  <FormGroup>
                    <ControlLabel>Source</ControlLabel>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bob"
                      value={pendingLink.source}
                      name="source"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col sm={4}>
                  <FormGroup>
                    <ControlLabel>Relationship</ControlLabel>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bob"
                      value={pendingLink.label}
                      name="label"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col sm={3}>
                  <FormGroup>
                    <ControlLabel>Target</ControlLabel>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bob"
                      value={pendingLink.target}
                      name="target"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col sm={2}>
                  <FormGroup>
                    <ControlLabel style={{ visibility: 'hidden' }}>
                      Submit
                    </ControlLabel>
                    <Button block type="submit">
                      <Icon name="plus" /> Add
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Well>
          </form>
        </Col>
      </Row>
    </div>
  );
};

AddLinkForm.propTypes = propTypes;
AddLinkForm.defaultProps = defaultProps;

export default AddLinkForm;
