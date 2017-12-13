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
  JsonDump,
} from '../';
import { RelationshipForm } from './';

import AddNodeForm from './AddNode';
import AddLinkForm from './AddLink';
// import RelationshipGraph from '../RelationshipGraph';

import ContainerDimensions from 'react-container-dimensions';
import { D3Thing } from '../RelationshipGraph/RelationshipGraph';

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
  handleAddLink(link) {
    const links = [
      ...this.state.data.links,
      {
        ...link,
        id: uniqueId(),
      },
    ];
    const data = { ...this.state.data, links };
    this.setState({
      data,
      pendingLink: RelationshipFormContainer.defaultPendingLink,
    });
  }
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

          <div>
            <ContainerDimensions>
              {({ width }) => (
                <D3Thing graph={this.state.data} width={width} height={300} />
              )}
            </ContainerDimensions>
          </div>

          <JsonDump data={this.state.data} />

          <AddNodeForm
            pendingNode={this.state.pendingNode}
            onSubmit={() => this.handleAddNode(this.state.pendingNode)}
            onChange={pendingNode => this.setState({ pendingNode })}
          />
          <AddLinkForm
            pendingLink={this.state.pendingLink}
            onSubmit={() => this.handleAddLink(this.state.pendingLink)}
            onChange={pendingLink => this.setState({ pendingLink })}
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
