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


// output { name: string, children: [{ name: string, ?children: [] }]}

const toTree = ({ nodes, links }) => {
  return nodes.reduce((aggr, node) => {
    return [
      ...aggr,
      {
        ...node,
        children: links.filter(d => d.source === node.id)
      }
    ]
  }, []);
}


const RelationshipList = ({ data }) => {
  const { nodes, links } = data;

  const getTargetLabel = id => nodes.find(d => d.id === id).label;

  const relationships = toTree(data).map(node => {
    const { children, ...nodeProps } = node;
    return {
      ...nodeProps,
      children: children.map(child => {
        return {
          ...child,
          targetLabel: getTargetLabel(child.target)
        };
      })
    }
  });

  if (relationships.length) {
    return (
      <ul className="relationship-list">
        {relationships.map(node => (
          <li key={node.id} className="relationship-list--node">
            <strong>{node.label}</strong> {(node.children && node.children.length) ? 'is the' : 'has no relationships'}
            {node.children && (
              <ul className="relationship-list--links">
                {node.children.map(link => {
                  return (
                    <li
                      key={link.id}
                      className="relationship-list--link"
                    >
                      <strong>{link.label}</strong> of <strong>{link.targetLabel}</strong>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  }
};

RelationshipList.propTypes = propTypes;
RelationshipList.defaultProps = defaultProps;

export default RelationshipList;
