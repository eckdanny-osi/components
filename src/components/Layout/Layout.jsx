import React from 'react';
import { Grid as Container, Col, Row } from 'react-bootstrap';
import { Navbar, Masthead } from '../';
import PropTypes from 'prop-types';

const propTypes = {
  renderHeader: PropTypes.func,
  renderMasthead: PropTypes.func,
  layout: PropTypes.arrayOf(PropTypes.object),
  renderMain: PropTypes.arrayOf(PropTypes.func),
};
const defaultProps = {
  renderHeader: () => <Navbar />,
  renderMasthead: props => {
    return <Masthead title="lskdjflksdjf" {...props} />;
  },
  regions: [{ sm: 4 }, { sm: 8 }],
  content: [props => 'FIRST THING', props => 'SECOND THING'],
};

const _renderMain = (layout, renderMain, props) => {
  return renderMain
    .map((renderFn, i) => ({
      renderFn,
      colProps: layout[i],
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
      <div>
        {renderHeader(...props)}
        {renderMasthead(...props)}
      </div>
      <Container>
        <Row>{_renderMain(regions, content, props)}</Row>
      </Container>
    </div>
  );
};

Layout.propTypes = PropTypes;
Layout.defaultProps = defaultProps;

export default Layout;
