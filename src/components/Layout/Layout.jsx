import React from 'react';
import { Navbar, Masthead, Container, Col, Row } from '../';
import PropTypes from 'prop-types';

const propTypes = {
  renderHeader: PropTypes.func,
  renderMasthead: PropTypes.func,
  regions: PropTypes.any,
  content: PropTypes.any,
};

const defaultProps = {
  renderHeader: () => <Navbar />,
  renderMasthead: props => {
    return <Masthead {...props} />;
  },
  regions: [{ sm: 4 }, { sm: 8 }],
  content: [props => 'FIRST THING', props => 'SECOND THING'],
};

const _renderMain = (regions, contents, props) => {
  return contents
    .map((renderFn, i) => ({
      renderFn,
      colProps: regions[i],
    }))
    .map(({ colProps, renderFn }, i) => {
      return (
        <Col key={i} {...colProps}>
          {renderFn(props)}
        </Col>
      );
    });
};

const Layout = ({
  renderHeader,
  renderMasthead,
  regions,
  content,
  ...props
}) => {
  return (
    <div>
      {renderHeader(props)}
      {renderMasthead(props)}
      <Container>
        <Row>{_renderMain(regions, content, props)}</Row>
      </Container>
    </div>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
