import React from 'react';
import getDisplayName from 'react-display-name';

export const BS_CONTEXT_NAMES = {
  DANGER: 'danger',
  DEFAULT: 'default',
  INFO: 'info',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
};

// Order determines priority
export const BS_CONTEXTS = [
  BS_CONTEXT_NAMES.DANGER,
  BS_CONTEXT_NAMES.SUCCESS,
  BS_CONTEXT_NAMES.WARNING,
  BS_CONTEXT_NAMES.PRIMARY,
  BS_CONTEXT_NAMES.INFO,
  BS_CONTEXT_NAMES.DEFAULT,
]

export const bsContextStyle = (Component, defaultValue=BS_CONTEXT_NAMES.DEFAULT, contexts=false) => {
  // TODO: DO NOT DO PROPTYPE STUFF IN HERE
  // const propTypes = {};
  // for (let prop in Component.propTypes) {
  //   if ('bsStyle' !== prop) {
  //     propTypes[prop] = Component.propTypes[prop];
  //   }
  // }
  const component = (props) => {

    contexts = contexts || BS_CONTEXTS;

    let bsStyle;
    for (let context of contexts) {
      if (props[context]) {
        bsStyle = context;
        break;
      }
    }
    bsStyle = bsStyle || defaultValue;

    const newProps = {};
    for (const prop in props) {
      if (!contexts.includes(prop)) {
        newProps[prop] = props[prop];
      }
    }

    return (
      <Component bsStyle={bsStyle} {...newProps} />
    )
  };
  component.displayName = `bsStyle(${getDisplayName(Component)})`;
  // component.propTypes = Component.propTypes
  // component.propTypes = propTypes;
  return component;
};
