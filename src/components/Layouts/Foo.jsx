import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from '../';

const propTypes = {};

const defaultProps = {};

const Foo = ({
  renderNav,
  renderMasthead,
  renderSideBar,
  children,
}) => (
  <div>
    <div style={{ backgroundColor: "red" }}>
      {renderNav()}
      {renderMasthead()}
    </div>
    <Container>
      <Row>
        <Col sm={4} style={{ backgroundColor: 'orange', height: "800px" }}>
          {renderSideBar()}
        </Col>
        <Col sm={8} style={{ backgroundColor: "yellow", height: "800px"}}>
          {children}
        </Col>
      </Row>
    </Container>
  </div>
);

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;
