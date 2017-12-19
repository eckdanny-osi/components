import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Row, Col, Card, Masthead, Navbar } from '../';

import Layout from './Layout';
import { Sidebar } from '../Sidebar';
import { LayoutDashboard, LayoutSidebar } from './LayoutDashboard';

import { Nav, SubNav, NavItem } from 'react-bootstrap';

import AutoAffix from 'react-overlays/lib/AutoAffix';

class AffixExample extends React.Component {
  render() {
    return (
      <div
        className="affix-example"
        style={{ height: '800px', border: '1px solid blue' }}
        ref={el => {
          this.el = el;
        }}
      >
        <AutoAffix viewportOffsetTop={15} container={this.el}>
          <div className="panel panel-default">
            <div className="panel-body">I am an affixed element</div>
          </div>
        </AutoAffix>
      </div>
    );
  }
}

storiesOf('LayoutTest', module)
  /**
   *
   */
  .add('testing...', () => {
    return (
      <Layout
        regions={[{ sm: 8 }, { sm: 4 }]}
        content={[props => 'FIRST REGION', props => 'SECOND REGION']}
      />
    );
  })

  .add('test DashboardLayout', () => {
    return (
      <LayoutDashboard
        content={[props => 'Dashboard has only one content region!']}
      />
    );
  })

  .add('SidebarLayout', () => {
    return (
      <LayoutSidebar
        side="right"
        title="My Title"
        renderSidebar={props => (
          <Card>
            Hello From <tt>renderSidebar(props)</tt>
          </Card>
        )}
        renderMain={() => (
          <div>
            {/* <h3>I am the Main Content Area</h3>
            <p> I have a grid of my own!</p>
            <Row>
              <Col sm={3}>alskdfj</Col>
              <Col sm={3}>alksdjfalksdfj</Col>
              <Col sm={3} smOffset={3}>
                alksdjflaksdjf
              </Col>
            </Row> */}
            <Row>
              <Col sm={9}>
                <Card>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                </Card>
                <Card header="Hello World">
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                </Card>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
                <p>alksdjflkasdfjalksdjfalksdfj</p>
              </Col>
              <Col sm={3}>
                <ul className="list-group">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>

                <div className="list-group">
                  <h4 className="list-group-item">Header</h4>
                  <a href="#scrollspy" className="list-group-item">
                    ScrollSpy
                  </a>
                  <a href="#" className="list-group-item">
                    Dapibus ac facilisis in
                  </a>
                  <a href="#" className="list-group-item">
                    Morbi leo risus
                  </a>
                  <a href="#" className="list-group-item">
                    Porta ac consectetur ac
                  </a>
                  <a href="#" className="list-group-item">
                    Vestibulum at eros
                  </a>
                </div>

                <Card>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">alksdjflkasdjf</a>
                    </li>
                    <li>
                      <a href="#">alksdjflkasdjf</a>
                    </li>
                    <li>
                      <a href="#">alksdjflkasdjf</a>
                    </li>
                    <li>
                      <a href="#">alksdjflkasdjf</a>
                    </li>
                    <li>
                      <a href="#">alksdjflkasdjf</a>
                    </li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      />
    );
  })

  .add('SidebarLayout (fixed)', () => {
    return (
      <div>
        <Navbar />
        <Masthead />
        <div className="container-fluid">
          <Sidebar />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h2>Hello world</h2>
          </div>
        </div>
      </div>
    );
  })

  .add('SidebarLayout Fixing', () => {
    return (
      <LayoutDashboard
        title="My Title"
        content={[
          () => (
            <div>
              <Row id="asdf">
                <div className="col-sm-3 bs-docs-sidebar-holder">
                  <AutoAffix viewportOffsetTop={135}>
                    <div>
                      <div className="list-group">
                        <h4
                          className="list-group-item"
                          style={{ marginTop: 0 }}
                        >
                          Header
                        </h4>
                        <a href="#scrollspy" className="list-group-item">
                          ScrollSpy
                        </a>
                        <a href="#" className="list-group-item">
                          Dapibus ac facilisis in
                        </a>
                        <a href="#" className="list-group-item">
                          Morbi leo risus
                        </a>
                        <a href="#" className="list-group-item">
                          Porta ac consectetur ac
                        </a>
                        <a href="#" className="list-group-item">
                          Vestibulum at eros
                        </a>
                      </div>
                    </div>
                  </AutoAffix>
                  {/* <AutoAffix /> */}
                  {/* <AutoAffix viewportOffsetTop={20}>
                    <div
                      className="bs-docs-sidebar hidden-print"
                      role="complementary"
                    >
                      <Nav className="bs-docs-sidenav" onSelect={() => {}}>
                        <SubNav text="Buttons">
                          <NavItem>Button groups</NavItem>
                          <NavItem>Dropdowns</NavItem>
                          <NavItem>Menu items</NavItem>
                        </SubNav>
                        Similar blocks of code found in 2 locations. Consider
                        refactoring. …
                        <SubNav text="Overlays">
                          <NavItem>Modals</NavItem>
                          <NavItem>Tooltips</NavItem>
                          <NavItem>Popovers</NavItem>
                          <NavItem>Custom overlays</NavItem>
                        </SubNav>
                        <SubNav text="Navigation">
                          <NavItem>Navs</NavItem>
                          <NavItem>Navbars</NavItem>
                          <NavItem>Breadcrumbs</NavItem>
                          <NavItem>Tabs</NavItem>
                          <NavItem>Pagination</NavItem>
                          <NavItem>Pager</NavItem>
                        </SubNav>
                        <SubNav text="Page layout">
                          <NavItem>Grid system</NavItem>
                          <NavItem>Jumbotron</NavItem>
                          <NavItem>Page header</NavItem>
                          <NavItem>List group</NavItem>
                          <NavItem>Tables</NavItem>
                          <NavItem>Panels</NavItem>
                          <NavItem>Wells</NavItem>
                        </SubNav>
                        Similar blocks of code found in 2 locations. Consider
                        refactoring. …
                        <SubNav text="Forms">
                          <NavItem>Supported controls</NavItem>
                          <NavItem>Form layout</NavItem>
                          <NavItem>Input groups</NavItem>
                          <NavItem>Validation states</NavItem>
                        </SubNav>
                        Similar blocks of code found in 2 locations. Consider
                        refactoring. …
                        <SubNav text="Media content">
                          <NavItem>Images</NavItem>
                          <NavItem>Thumbnails</NavItem>
                          <NavItem>Responsive embed</NavItem>
                          <NavItem>Carousels</NavItem>
                          <NavItem>Media objects</NavItem>
                        </SubNav>
                        Similar blocks of code found in 2 locations. Consider
                        refactoring. …
                        <SubNav text="Miscellaneous">
                          <NavItem>Glyphicons</NavItem>
                          <NavItem>Labels</NavItem>
                          <NavItem>Badges</NavItem>
                          <NavItem>Alerts</NavItem>
                          <NavItem>Progress bars</NavItem>
                        </SubNav>
                        Similar blocks of code found in 2 locations. Consider
                        refactoring. …
                        <SubNav text="Utilities">
                          <NavItem>Transitions</NavItem>
                          <NavItem>Custom Styles</NavItem>
                        </SubNav>
                        Similar blocks of code found in 2 locations. Consider
                        refactoring. …
                        <SubNav text="Missing components">
                          <NavItem>Affix</NavItem>
                          <NavItem>Scrollspy</NavItem>
                        </SubNav>
                      </Nav>

                      <a className="back-to-top" href="#top">
                        Back to top
                      </a>
                    </div>
                  </AutoAffix> */}
                </div>
                <Col sm={9}>
                  <Card
                    header={
                      <h3>
                        ScrollSpy
                        <a
                          id="scrollspy"
                          style={{
                            display: 'block',
                            position: 'relative',
                            top: '-250px',
                            visibility: 'hidden',
                          }}
                        />
                      </h3>
                    }
                  >
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <Card header="Hello World">
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <Card>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <Card header="Hello World">
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <Card>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <Card header="Hello World">
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <Card>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <Card header="Hello World">
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <Card>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <Card header="Hello World">
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <p>alksdjflkasdfjalksdjfalksdfj</p>
                  <a href="#scrollspy">ScrollSpy</a>
                </Col>
              </Row>
            </div>
          ),
        ]}
      />
    );
  });
