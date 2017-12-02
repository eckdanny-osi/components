import React from 'react';
import getDisplayName from 'react-display-name';

export const BS_SIZE_NAMES = {
  XS: 'xsmall',
  SM: 'small',
  LG: 'large',
};

export const BS_SIZES = [
  BS_SIZE_NAMES.LG,
  BS_SIZE_NAMES.SM,
  BS_SIZE_NAMES.XS,
];

export const bsSizeHOC = (Component, defaultValue='', sizes=false) => {
  const WrappedComponent = ({
    bsSize: bsSizeRBS,
    lg,
    sm,
    xs,
    ...props
  }) => {

    sizes = sizes || [ [ 'lg', 'large' ], [ 'sm', 'small' ], [ 'xs', 'xsmall' ] ];

    let bsSize;
    // for (let [key, val] of sizes) {
    //   if (props[key]) {
    //     bsSize = val;
    //     break;
    //   }
    // }
    bsSize = lg && 'large' ||
             sm && 'small' ||
             xs && 'xsmall';
    bsSize = bsSize || defaultValue;

    // return <Component bsSize={bsSize} {...props} />
    return <Component bsSize="sm" {...props} />
  };
  WrappedComponent.displayName = `bsSize(${getDisplayName(Component)})`;
  return WrappedComponent;
};

