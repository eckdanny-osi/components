import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import getDisplayName from 'react-display-name';

const layoutDashboard = Wrapped => {
  const Component = ({ regions, ...props }) => (
    <Wrapped regions={[{ sm: 12 }]} {...props} />
  );
  Component.displayName = 'asldkfjasdlfj';
  return Component;
};

const layoutSidebar = Wrapped => {
  const Component = ({ regions, side, fixed, content, ...props }) => {
    const _regions =
      'right' === side ? [{ sm: 9 }, { sm: 3 }] : [{ sm: 3 }, { sm: 9 }];
    const _content = 'right' === side ? [...content].reverse() : [...content];
    return <Wrapped regions={_regions} content={_content} {...props} />;
  };
  Component.displayName = 'sidebar';
  Component.propTypes = {
    ...Wrapped.propTypes,
    side: PropTypes.oneOf(['left', 'right']),
    fixed: PropTypes.bool,
  };
  Component.defaultProps = {
    ...Component.defaultProps,
    side: 'left',
    fixed: false,
  };
  return Component;
};

export const LayoutDashboard = layoutDashboard(Layout);

export const LayoutSidebar = layoutSidebar(Layout);
