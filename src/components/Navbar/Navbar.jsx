import React from 'react';
import PropTypes from 'prop-types';
import './_navbar.scss';
import Headroom from 'react-headroom';

import {
  Navbar,
  NavbarBrand,
  NavbarHeader,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  NavbarCollapse,
  NavbarToggle,
} from 'react-bootstrap';

export default ({}) => (
  <Headroom
    disableInlineStyles
    onPin={() => console.log('callback called when header is pinned')}
    onUnpin={() => console.log('callback called when header is unpinned')}
    onUnfix={() =>
      console.log('callback called when header position is no longer fixed')
    }
  >
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">CWDS</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link Right
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link Right
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Headroom>
);
