import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox as CheckboxRBS, utils } from 'react-bootstrap';
import { Icon } from '../';

const { getClassSet, prefix, splitBsProps } = utils.bootstrapUtils;

const propTypes = {
  ...CheckboxRBS.propTypes,
};

const defaultProps = {
  ...CheckboxRBS.propTypes,
};

const Checkbox = ({
  inline,
  disabled,
  validationState,
  inputRef,
  className,
  style,
  title,
  children,
  ...props
}) => {
  const [bsProps, elementProps] = splitBsProps(props);
  const input = (
    <input
      {...elementProps}
      ref={inputRef}
      type="checkbox"
      disabled={disabled}
    />
  );

  if (inline) {
    const classes = { [prefix(bsProps, 'inline')]: true, disabled };
    return (
      // <div className="pretty p-icon p-smooth">
      //   <input type="checkbox" />
      //   <div className="state p-primary">
      //     <Icon className="icon" name="check" />
      //     <label title={title}>{children}</label>
      //   </div>
      // </div>
      <label
        className={classNames(className, classes)}
        style={style}
        title={title}
      >
        {input}
        {children}
      </label>
    );
  }

  const classes = {
    ...getClassSet(bsProps),
    disabled,
  };
  if (validationState) {
    classes[`has-${validationState}`] = true;
  }

  // return (
  //   <div className={classNames(className, classes)} style={style}>
  //     <label title={title}>
  //       {input}
  //       {children}
  //     </label>
  //   </div>
  // );
  return (
    <div className="pretty p-icon p-smooth">
      <input type="checkbox" />
      <div className="state p-primary">
        <Icon className="icon" name="check" />
        <label>{children}</label>
      </div>
    </div>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
