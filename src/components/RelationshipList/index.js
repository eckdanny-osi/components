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
            {data.links.filter(link => node.id === link.source).map(link => (
              <li key={link.id}><strong>{link.label}</strong> of {data.nodes.find(d => d.id === link.target)['label']}</li>
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
