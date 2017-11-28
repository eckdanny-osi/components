import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const RelationshipList = ({
  data
}) => {
  return (
    <div>
      {data.nodes.map(node => (
        <div key={node.id}>
          <strong>{node.label}</strong> is the
          <ul>
            {data.edges.filter(edge => node.id === edge.src).map(edge => (
              <li key={edge.id}><strong>{edge.label}</strong> of {data.nodes.find(d => d.id === edge.dest)['label']}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
};

RelationshipList.propTypes = propTypes;
RelationshipList.defaultProps = defaultProps;

export default RelationshipList;

// helpers

const nodes = data => data.nodes.map(node => node.label);
