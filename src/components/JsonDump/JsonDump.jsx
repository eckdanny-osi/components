import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const JsonDump = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

JsonDump.propTypes = propTypes;
JsonDump.defaultProps = defaultProps;

export default JsonDump;
