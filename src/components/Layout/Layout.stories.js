import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ContainerDimensions from 'react-container-dimensions';

import { Row, Col, Container, Card, Masthead, Navbar } from '../';

// import Layout from './Layout';
import { Sidebar } from '../Sidebar';
// import { LayoutDashboard, LayoutSidebar } from './LayoutDashboard';

// import Layout from './Layout';
import { Layout, LayoutDashboard, LayoutSidebar } from './';

// import { Nav, SubNav, NavItem } from 'react-bootstrap';

import AutoAffix from 'react-overlays/lib/AutoAffix';

// class AffixExample extends React.Component {
//   render() {
//     return (
//       <div
//         className="affix-example"
//         style={{ height: '800px', border: '1px solid blue' }}
//         ref={el => {
//           this.el = el;
//         }}
//       >
//         <AutoAffix viewportOffsetTop={15} container={this.el}>
//           <div className="panel panel-default">
//             <div className="panel-body">I am an affixed element</div>
//           </div>
//         </AutoAffix>
//       </div>
//     );
//   }
// }

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
      <LayoutDashboard>Dashboard has only one content region!</LayoutDashboard>
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
              <Row>
                <div className="col-sm-3 bs-docs-sidebar-holder">
                  <AutoAffix viewportOffsetTop={135} className="shit">
                    <div className="list-group">
                      <h4 className="list-group-item" style={{ marginTop: 0 }}>
                        Header
                      </h4>
                      <a href="#scrollspy" className="list-group-item">
                        ScrollSpy
                      </a>
                      <a href="#a" className="list-group-item">
                        A
                      </a>
                      <a href="#b" className="list-group-item">
                        B
                      </a>
                      <a href="#c" className="list-group-item">
                        C
                      </a>
                      <a href="#d" className="list-group-item">
                        D
                      </a>
                      <a href="#e" className="list-group-item">
                        E
                      </a>
                      <a href="#scrollspy" className="list-group-item">
                        ScrollSpy
                      </a>
                      <a href="#a" className="list-group-item">
                        A
                      </a>
                      <a href="#b" className="list-group-item">
                        B
                      </a>
                      <a href="#c" className="list-group-item">
                        C
                      </a>
                      <a href="#d" className="list-group-item">
                        D
                      </a>
                      <a href="#e" className="list-group-item">
                        E
                      </a>
                      <a href="#scrollspy" className="list-group-item">
                        ScrollSpy
                      </a>
                      <a href="#a" className="list-group-item">
                        A
                      </a>
                      <a href="#b" className="list-group-item">
                        B
                      </a>
                      <a href="#c" className="list-group-item">
                        C
                      </a>
                      <a href="#d" className="list-group-item">
                        D
                      </a>
                      <a href="#e" className="list-group-item">
                        E
                      </a>
                      <a href="#scrollspy" className="list-group-item">
                        ScrollSpy
                      </a>
                      <a href="#a" className="list-group-item">
                        A
                      </a>
                      <a href="#b" className="list-group-item">
                        B
                      </a>
                      <a href="#c" className="list-group-item">
                        C
                      </a>
                      <a href="#d" className="list-group-item">
                        D
                      </a>
                      <a href="#e" className="list-group-item">
                        E
                      </a>
                    </div>
                  </AutoAffix>
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
                            top: '-163px',
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
                  <Card
                    header={
                      <h3>
                        A
                        <a
                          id="a"
                          style={{
                            display: 'block',
                            position: 'relative',
                            top: '-163px',
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
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <Card
                    header={
                      <h3>
                        B
                        <a
                          id="b"
                          style={{
                            display: 'block',
                            position: 'relative',
                            top: '-163px',
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
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <Card
                    header={
                      <h3>
                        C
                        <a
                          id="c"
                          style={{
                            display: 'block',
                            position: 'relative',
                            top: '-163px',
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
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <Card
                    header={
                      <h3>
                        D
                        <a
                          id="d"
                          style={{
                            display: 'block',
                            position: 'relative',
                            top: '-163px',
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
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <Card
                    header={
                      <h3>
                        E
                        <a
                          id="e"
                          style={{
                            display: 'block',
                            position: 'relative',
                            top: '-163px',
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
                    <p>alksdjflkasdfjalksdjfalksdfj</p>
                  </Card>
                  <a href="#scrollspy">ScrollSpy</a>
                </Col>
              </Row>
            </div>
          ),
        ]}
      />
    );
  })

  .add('Another idea...', () => {
    return (
      <Layout
        regions={[{ sm: 3 }, { sm: 9 }]}
        content={[
          () => (
            <ContainerDimensions>
              {({ width }) => {
                return (
                  // <D3Thing graph={data} width={width} height={300} />
                  <div
                    style={{
                      backgroundColor: 'pink',
                      width: '230px',
                      position: 'fixed',
                      bottom: '0',
                      top: '130px',
                      overflowY: 'scroll',
                    }}
                  >
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                    <p>SOMETHING</p>
                  </div>
                );
              }}
            </ContainerDimensions>
          ),
          () => (
            <div>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
              <p>alskdfjalksdjf</p>
            </div>
          ),
        ]}
      />
    );
  });
