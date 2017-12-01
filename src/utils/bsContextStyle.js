import React from 'react';

export const BS_CONTEXT_NAMES = {
  DANGER: 'danger',
  DEFAULT: 'default',
  INFO: 'info',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
};

export const BS_CONTEXTS = [
  BS_CONTEXT_NAMES.DANGER,
  BS_CONTEXT_NAMES.SUCCESS,
  BS_CONTEXT_NAMES.WARNING,
  BS_CONTEXT_NAMES.PRIMARY,
  BS_CONTEXT_NAMES.INFO,
  BS_CONTEXT_NAMES.DEFAULT,
]

export const bsContextStyle = (Component, defaultValue='default', contexts) => {
  const component = ({
    bsStyle: bsStyleOld,
    ...props
  }) => {

    contexts = contexts || BS_CONTEXTS;

    let bsStyle;
    for (let context of contexts) {
      if (props[context]) {
        bsStyle = context;
        break;
      }
    }
    bsStyle = bsStyle || defaultValue;

    return (
      <Component bsStyle={bsStyle} {...props} />
    )
  };
  component.displayName = Component.displayName;
  return component;
};
