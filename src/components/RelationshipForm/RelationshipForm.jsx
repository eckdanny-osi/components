import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup,
  ControlLabel,
  Container,
  Row,
  Col,
  Button,
  Icon,
  Well,
  Card,
  Alert,
  Table,
  RelationshipList
} from '../';
import set from 'lodash.set';
import uniqueId from 'lodash.uniqueid';

const propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.any, label: PropTypes.string })),
    links: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.any, source: PropTypes.any, target: PropTypes.any, label: PropTypes.string }))
  })
};
const defaultProps = {
  data: {
    nodes: [],
    links: [],
  }
};

class RelationshipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      newRelationship: RelationshipForm.newRelationship,
      newPerson: RelationshipForm.newPerson,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.addPerson = this.addPerson.bind(this);
  }
  static get newRelationship() {
    return {
      source: '',
      target: '',
      label: '',
    };
  }
  static get newPerson() {
    return {
      label: ''
    };
  }
  handleOnChange(e) {
    const newState = set(this.state, e.target.name, e.target.value);
    this.setState(newState);
  }
  addPerson(e) {
    e.preventDefault();
    const nodes = [...this.state.data.nodes, { ...this.state.newPerson, id: uniqueId('tmp') } ];
    const data = { ...this.state.data, nodes };
    this.setState({ data, newPerson: RelationshipForm.newPerson });
  }
  renderRelationshipsList() {
    if (!this.state.data.nodes.length) {
      return <Alert info>No people added yet!</Alert>
    }
    return <RelationshipList data={this.state.data} />
  }
  renderAddPerson() {
    return (
      <div>
        <h4>Add Person</h4>
        <Row>
          <Col xs={12}>
            <Well>
              <form onSubmit={this.addPerson}>
              <Row>
                <Col sm={10}>
                  <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bob"
                      value={this.state.newPerson.label}
                      name="newPerson.label"
                      onChange={this.handleOnChange}
                    />
                  </FormGroup>
                </Col>
                <Col sm={2}>
                  <FormGroup>
                    <ControlLabel style={{ visibility: "hidden" }}>Submit</ControlLabel>
                    <Button
                      block
                      type="submit"
                    ><Icon name="plus" /> Add</Button>
                  </FormGroup>
                </Col>
              </Row>
              </form>
            </Well>
          </Col>
        </Row>
      </div>
    );
  }
  renderAddRelationship() {
    return (
      <div>
        <h4>Add Relationship</h4>
        <Row>
          <Col xs={12}>
            <Well>
              <Row>
              <Col sm={3}>
                <FormGroup>
                  <ControlLabel>Source</ControlLabel>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bob"
                    value={this.state.newRelationship.source}
                    name="model.fname"
                    onChange={(e) => this.setState({
                      newRelationship: {
                        ...this.state.newRelationship,
                        source: e.target.value
                      }
                    })}
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
                    value={this.state.newRelationship.label}
                    name="model.fname"
                    onChange={(e) => this.setState({
                      newRelationship: {
                        ...this.state.newRelationship,
                        label: e.target.value
                      }
                    })}
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
                    value={this.state.newRelationship.target}
                    name="model.fname"
                    onChange={(e) => this.setState({
                      newRelationship: {
                        ...this.state.newRelationship,
                        target: e.target.value
                      }
                    })}
                  />
                </FormGroup>
              </Col>
              <Col sm={2}>
                <FormGroup>
                  <ControlLabel style={{ visibility: "hidden" }}>Submit</ControlLabel>
                  <Button block><Icon name="plus" /> Add</Button>
                </FormGroup>
              </Col>
              </Row>
            </Well>
          </Col>
        </Row>
      </div>
    );
  }
  render() {
    return (
      <Container>
        <Card header={<h2>Relationships</h2>}>
          { this.renderRelationshipsList() }
          { this.renderAddPerson() }
          { this.renderAddRelationship() }
        </Card>
      </Container>
    );
  }
}

RelationshipForm.propTypes = propTypes;
RelationshipForm.defaultProps = defaultProps;

export default RelationshipForm;
