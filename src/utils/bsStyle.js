import React from 'react';
import getDisplayName from 'react-display-name';
import PropTypes from 'prop-types';

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

export const bsContextStyle = (Component, defaultValue=BS_CONTEXT_NAMES.DEFAULT, contexts=BS_CONTEXTS) => {

  if (!Component.propTypes) {
    debugger;
  }
  const {
    bsStyle,
    ...originalPropTypes
  } = Component.propTypes;

  const newPropsTypes = contexts.reduce((aggr, d) => ({ ...aggr, [d]: PropTypes.bool }), {});

  const component = props => {

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

  component.displayName = `bsStyled(${getDisplayName(Component)})`;
  component.propTypes = {
    ...originalPropTypes,
    ...newPropsTypes,
  };

  return component;
};
