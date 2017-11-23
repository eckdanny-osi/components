import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Navbar } from '../components/Navbar';
// import { PageHeader } from '../components/PageHeader';
// import {  } from '../components/'

import {
  Button,
  Navbar,
  Masthead,
  Container, Row, Col,
  Card,
  Icon
} from '../components';

storiesOf('Layout', module)

  /**
   *
   */
  .add('Duh', () => (
    <div>
      <Navbar />
      <Masthead
        title="Demo Page"
        actions={
          <div>
            <Button className="btn-outline" bsSize="large">Save</Button>
          </div>
        }
      />
      <Container>
        <Row>
          <Col sm={4}>
            I am a column
          </Col>
          <Col sm={8}>
            <h3>Subtitle <Icon name="rocket" /></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus venenatis auctor. Ut vestibulum aliquet fermentum. Curabitur a imperdiet risus. Aenean vulputate, est bibendum faucibus consequat, est tortor consectetur dolor, ac egestas arcu ligula sed metus. Aenean est metus, tincidunt cursus velit eu, lacinia luctus lorem. Etiam fermentum nibh ultrices facilisis bibendum. Integer eu luctus mi. Cras scelerisque diam in metus molestie aliquam. Nunc commodo metus sed est vulputate fermentum. Phasellus at nunc sit amet elit maximus euismod. Phasellus vitae imperdiet erat, cursus pretium orci. Maecenas nec sapien elit. Etiam congue risus non enim volutpat, vitae euismod enim condimentum. Sed malesuada rutrum lectus et dignissim.</p>
            <Card header="Some Card">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus venenatis auctor. Ut vestibulum aliquet fermentum. Curabitur a imperdiet risus. Aenean vulputate, est bibendum faucibus consequat, est tortor consectetur dolor, ac egestas arcu ligula sed metus. Aenean est metus, tincidunt cursus velit eu, lacinia luctus lorem. Etiam fermentum nibh ultrices facilisis bibendum. Integer eu luctus mi. Cras scelerisque diam in metus molestie aliquam. Nunc commodo metus sed est vulputate fermentum. Phasellus at nunc sit amet elit maximus euismod. Phasellus vitae imperdiet erat, cursus pretium orci. Maecenas nec sapien elit. Etiam congue risus non enim volutpat, vitae euismod enim condimentum. Sed malesuada rutrum lectus et dignissim.</p>
              <p>In tristique neque commodo dapibus auctor. Pellentesque aliquam euismod massa id varius. In hac habitasse platea dictumst. Morbi vel efficitur est, ut tincidunt libero. Duis dictum venenatis finibus. Sed tincidunt turpis aliquam arcu eleifend imperdiet. Fusce eu ultricies dolor, non gravida orci. Ut vulputate, nulla quis luctus commodo, orci nunc varius leo, id tempor tortor libero et tellus.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  ));
