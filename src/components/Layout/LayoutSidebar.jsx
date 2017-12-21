import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import getDisplayName from 'react-display-name';

const layoutSidebar = Wrapped => {
  // const propTypes = {
  //   ...Wrapped.propTypes,
  //   side: PropTypes.oneOf(['left', 'right']),
  //   fixed: PropTypes.bool,
  // };

  // const defaultProps = {
  //   ...Component.defaultProps,
  //   side: 'left',
  //   fixed: false,
  // };

  const Component = ({
    regions,
    side,
    renderSidebar,
    renderMain,
    children,
    fixed,
    content,
    ...props
  }) => {
    let _regions, _content;
    if (side === 'right') {
      [_regions, _content] = [
        [{ sm: 3, xsHidden: false, smPush: 9 }, { sm: 9, smPull: 3 }],
        [renderSidebar, renderMain],
      ];
    } else {
      [_regions, _content] = [
        [{ sm: 3, xsHidden: false }, { sm: 9 }],
        [renderSidebar, renderMain],
      ];
    }
    return <Wrapped regions={_regions} content={_content} {...props} />;
  };

  Component.displayName = 'LayoutSidebar';
  // Component.propTypes = propTypes;
  // Component.defaultProps = defaultProps;

  return Component;
};

export default layoutSidebar(Layout);
