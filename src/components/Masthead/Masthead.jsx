import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../Container';
import { Row } from '../Row';
import { Col } from '../Col';

const propTypes = {
  pageTitle: PropTypes.string,
};

const defaultProps = {};

const Masthead = ({
  title,
  actions
}) => (
  <div className="masthead">
    <Container>
      <div className="masthead-body">
        <div className="masthead-title">
          <h1>{title}</h1>
        </div>
        <div className="masthead-actions">
          {actions}
        </div>
      </div>
    </Container>
  </div>
);

export default Masthead;
