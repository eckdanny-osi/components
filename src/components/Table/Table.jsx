import React from 'react';
import { Table as TableRBS } from 'react-bootstrap';
import PropTypes from 'prop-types';

const {
  bsClass,
  ...propTypesRBS
} = TableRBS.propTypes;

const propTypes = { ...propTypesRBS };

const defaultProps = {

};

const Table = (props) => (
  <TableRBS {...props} />
);

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.displayName = 'Table';

export default Table;
