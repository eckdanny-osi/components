import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Well, FormGroup, ControlLabel, Button, Icon } from '../';

const propTypes = {};

const defaultProps = {};

const AddNodeForm = ({ pendingNode, onChange, onSubmit }) => {
  pendingNode = pendingNode || { name: '' };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };
  const handleChange = e => {
    onChange({ label: e.target.value });
  };
  return (
    <div>
      <h4>Add Person</h4>
      <Row>
        <Col xs={12}>
          <Well>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Row>
                <Col sm={10}>
                  <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bob"
                      value={pendingNode.label}
                      name="newPerson.label"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col sm={2}>
                  <FormGroup>
                    <ControlLabel className="invisible hidden-xs">
                      Submit
                    </ControlLabel>
                    <Button block type="submit" disabled={!pendingNode.label}>
                      <Icon name="plus" /> Add
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </form>
          </Well>
        </Col>
      </Row>
    </div>
  );
};

AddNodeForm.propTypes = propTypes;
AddNodeForm.defaultProps = defaultProps;

export default AddNodeForm;
