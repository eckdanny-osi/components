import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Row, Col, Card, Masthead, Navbar } from '../';

import Layout from './Layout';
import { Sidebar } from '../Sidebar';
import { LayoutDashboard, LayoutSidebar } from './LayoutDashboard';

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

  // .add('SidebarLayout', () => {
  //   return (
  //     <LayoutSidebar
  //       side="left"
  //       fixed={false}
  //       content={[
  //         props => (
  //           <div style={{ backgroundColor: 'yellow' }}>
  //             Hello World from region 1
  //           </div>
  //         ),
  //         props => (
  //           <div style={{ backgroundColor: 'green' }}>
  //             Hello World from region 2
  //           </div>
  //         ),
  //       ]}
  //     />
  //   );
  // })

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
                  <a href="#" className="list-group-item">
                    Cras justo odio
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
                <Col sm={3}>
                  <div>
                    <div className="list-group">
                      <h4 className="list-group-item">Header</h4>
                      <a href="#" className="list-group-item">
                        Cras justo odio
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
                      <a href="#" className="list-group-item">
                        Morbi leo risus
                      </a>
                      <a href="#" className="list-group-item">
                        Porta ac consectetur ac
                      </a>
                      <a href="#" className="list-group-item">
                        Vestibulum at eros
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
                </Col>
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
                </Col>
              </Row>
            </div>
          ),
        ]}
      />
    );
  });
