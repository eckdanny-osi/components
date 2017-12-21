import React from 'react';
import PropTypes from 'prop-types';
export { Radio as RadioRBS } from 'react-bootstrap';

const Radio = ({ children, ...props }) => {
  return (
    <div className="pretty p-default p-round p-bigger p-smooth">
      <input type="radio" name="radio1" />
      <div className="state p-primary">
        <label>{children}</label>
      </div>
    </div>
  );
};

export default Radio;
