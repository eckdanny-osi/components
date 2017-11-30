import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.shape({
    nodes: PropTypes.array.isRequired,
    links: PropTypes.array.isRequired
  }).isRequired
};

const defaultProps = {
  data: { nodes: [], links: [] }
};

const RelationshipList = ({ data }) => {
  const { nodes, links } = data;
  return (
    <ul className="relationship-list list-unstyled">
      {nodes.map(node => (
        <li key={node.id} className="relationship-list--node">
          <strong>{node.label}</strong> is the
          <ul className="relationship-list--connections">
            {
                links
                  .filter(link => node.id === link.source)
                  .map(link => (
                    <li
                      key={link.id}
                      className="relationship-list--connection"
                    >
                      <strong>
                        {link.label}
                      </strong>
                      {' of '}
                      { nodes.find(d => d.id === link.target)['label'] }
                    </li>
                  ))
            }
          </ul>
        </li>
      ))}
    </ul>
  )
};

RelationshipList.propTypes = propTypes;
RelationshipList.defaultProps = defaultProps;

export default RelationshipList;
