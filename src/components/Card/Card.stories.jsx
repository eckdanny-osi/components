import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Card, Button, ButtonToolbar, Container, Row, Col } from '../';

import CardExample from './CardExample.stories';


class ActiveCardDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scope: 'read'
    };
    this.setScope = this.setScope.bind(this);
  }
  setScope(scope) {
    this.setState({scope});
  }
  _renderReadView() {
    return (
      <Card
        header={(
          <div className="clearfix">
            <div style={{
              display: 'inline-block',
              padding: '6px 0'  // $padding-base-vertical
            }}>Header</div>
            <Button
              className="pull-right"
              onClick={() => this.setScope('edit')}
              >Edit</Button>
          </div>
        )}
      >
        <p>I am the <tt>Read</tt> scope!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus venenatis auctor. Ut vestibulum aliquet fermentum. Curabitur a imperdiet risus. Aenean vulputate, est bibendum faucibus consequat, est tortor consectetur dolor, ac egestas arcu ligula sed metus. Aenean est metus, tincidunt cursus velit eu, lacinia luctus lorem. Etiam fermentum nibh ultrices facilisis bibendum. Integer eu luctus mi. Cras scelerisque diam in metus molestie aliquam. Nunc commodo metus sed est vulputate fermentum. Phasellus at nunc sit amet elit maximus euismod. Phasellus vitae imperdiet erat, cursus pretium orci. Maecenas nec sapien elit. Etiam congue risus non enim volutpat, vitae euismod enim condimentum. Sed malesuada rutrum lectus et dignissim.</p>
      </Card>
    );
  }

  _renderEditView() {
    return (
      <Card
        className="panel-active"
        header={(
          <div className="clearfix">
            <div style={{
              display: 'inline-block',
              padding: '6px 0'  // $padding-base-vertical
            }}>Header</div>
          </div>
        )}
        footer={(
          <div className="clearfix">
            <ButtonToolbar className="pull-right">
              <Button
                onClick={() => this.setScope('read')}
                >Cancel</Button>
              <Button
                bsStyle="primary"
                onClick={() => this.setScope('read')}
                >Save</Button>
            </ButtonToolbar>
          </div>
        )}
      >
        <p>I am the <tt>edit</tt> scope!</p>
        <p>Imagine a form here...</p>
      </Card>
    );
  }

  render() {
    switch (this.state.scope) {
      case 'read': {
        return this._renderReadView();
      }
      case 'edit': {
        return this._renderEditView();
      }
      default:
        return <div>OH NO, i broke</div>
    }
  }
}


storiesOf('Cards', module)

  /**
   *
   */
  .add('Simple Cards', () => (
    <div>
      <h3>Card</h3>
      <Card>I am a card</Card>
      <h3>Card with Header</h3>
      <Card header="The Header">
        Card Content here.
      </Card>
      <h3>Card with Header and Footer</h3>
      <p>Passing strings to <tt>header</tt> and <tt>footer</tt> props:</p>
      <Card
        header="Header"
        footer="Footer"
      >Card Content</Card>
    </div>
  ))

  /**
   *
   */
  .add('Action Cards', () => (
    <ActiveCardDemo />
  ))

  /**
   *
   */
  .add('Complex Example', () => (
    <CardExample />
  ));
