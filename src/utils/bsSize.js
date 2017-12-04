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

    const bsSize = lg && 'large' ||
                   sm && 'small' ||
                   xs && 'xsmall';

    const newProps = { bsSize, ...props };

    return <Component {...newProps} />
  };
  WrappedComponent.propTypes = { ...Component.propTypes };
  WrappedComponent.displayName = `bsSize(${getDisplayName(Component)})`;
  return WrappedComponent;
};

