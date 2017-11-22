import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.scss';

const propTyeps = {};

const defaultProps = {}; 

console.log(style);

const Button = ({
    onClick,
    children,
}) => (
    <button
        className="btn btn-success"
        onClick={onClick}
    >{children}</button>
);

export default Button;