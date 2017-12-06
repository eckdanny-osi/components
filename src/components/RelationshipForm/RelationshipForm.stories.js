import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';
import uniqueId from 'lodash.uniqueid';
import {
  Container,
  Row,
  Col,
  Alert,
  Card,
  RelationshipList,
  Well,
  FormGroup,
  ControlLabel,
  Button,
  Icon,
} from '../';
import { RelationshipForm } from './';

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

const AddLinkForm = ({ pendingLink }) => {
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
                    onChange={e =>
                      this.setState({
                        newRelationship: {
                          ...this.state.newRelationship,
                          source: e.target.value,
                        },
                      })
                    }
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
                    onChange={e =>
                      this.setState({
                        newRelationship: {
                          ...this.state.newRelationship,
                          label: e.target.value,
                        },
                      })
                    }
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
                    onChange={e =>
                      this.setState({
                        newRelationship: {
                          ...this.state.newRelationship,
                          target: e.target.value,
                        },
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col sm={2}>
                <FormGroup>
                  <ControlLabel style={{ visibility: 'hidden' }}>
                    Submit
                  </ControlLabel>
                  <Button block>
                    <Icon name="plus" /> Add
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Well>
        </Col>
      </Row>
    </div>
  );
};

// import _data from '../RelationshipList/data.json';
// const data = JSON.parse(JSON.stringify(_data));

class RelationshipFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { nodes: [], links: [] }, // this.props.data,
      pendingNode: RelationshipFormContainer.defaultPendingNode,
      pendingLink: RelationshipFormContainer.defaultPendingLink,
    };
  }
  static get defaultPendingNode() {
    return {
      label: '',
    };
  }
  static get defaultPendingLink() {
    return {
      source: '',
      target: '',
      label: '',
    };
  }
  handleAddNode = node => {
    const nodes = [
      ...this.state.data.nodes,
      {
        ...node,
        id: uniqueId(),
      },
    ];
    const data = { ...this.state.data, nodes };
    this.setState({
      data,
      pendingNode: RelationshipFormContainer.defaultPendingNode,
    });
  };
  handleAddLink = link => {
    debugger;
  };
  renderRelationshipList() {
    if (!this.state.data.nodes.length) {
      return <Alert info>No people added yet!</Alert>;
    }
    return <RelationshipList data={this.state.data} />;
  }
  renderAddLink() {}
  render() {
    return (
      <Container>
        <Card header={<h2>Relationships</h2>}>
          {this.renderRelationshipList()}
          <AddNodeForm
            onSubmit={() => {
              this.handleAddNode(this.state.pendingNode);
            }}
            pendingNode={this.state.pendingNode}
            onChange={pendingNode => {
              this.setState({ pendingNode });
            }}
          />
          {/* <RelationshipForm
            data={this.state.data}
            onAddNode={this.handleAddNode}
            onAddLink={this.handleAddLink}
          /> */}
        </Card>
      </Container>
    );
  }
}

storiesOf('Relationships', module)
  /**
   *
   */
  .add('RelationshipForm', () => <RelationshipFormContainer />);
// return (
//   <RelationshipForm
//     data={data}
//     renderRelationshipList={data => {
//       if (!data.nodes) {
//         return <Alert info>You haven't added any people yet!</Alert>;
//       }
//       return <h2>TODO</h2>;
//     }}
//   />
// );
// });
