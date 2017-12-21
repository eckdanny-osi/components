import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

const layoutDashboard = Wrapped => {
  // TODO: omit throw away props
  const propTypes = {
    ...Wrapped.propTypes,
  };

  // TODO: omit throw away props
  const defaultProps = {
    ...Wrapped.defaultProps,
  };

  const Component = ({ regions, children, content, ...props }) => {
    const _content = content || [() => children];
    return <Wrapped regions={[{ sm: 12 }]} content={_content} {...props} />;
  };

  Component.propTypes = propTypes;
  Component.defaultProps = defaultProps;

  return Component;
};

export default layoutDashboard(Layout);
