import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Card, Button, ButtonToolbar } from '../';

storiesOf('Card', module)

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
    <Card
      header={(
        <div className="clearfix">
          <div style={{
            display: 'inline-block',
            padding: '6px 0'  // $padding-base-vertical
          }}>Header</div>
          <Button bsStyle="secondary" className="pull-right">Edit</Button>
        </div>
      )}
      footer={(
        <div className="clearfix">
          <ButtonToolbar className="pull-right">
            <Button bsStyle="secondary">Cancel</Button>
            <Button bsStyle="primary">Save</Button>
          </ButtonToolbar>
        </div>
      )}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus venenatis auctor. Ut vestibulum aliquet fermentum. Curabitur a imperdiet risus. Aenean vulputate, est bibendum faucibus consequat, est tortor consectetur dolor, ac egestas arcu ligula sed metus. Aenean est metus, tincidunt cursus velit eu, lacinia luctus lorem. Etiam fermentum nibh ultrices facilisis bibendum. Integer eu luctus mi. Cras scelerisque diam in metus molestie aliquam. Nunc commodo metus sed est vulputate fermentum. Phasellus at nunc sit amet elit maximus euismod. Phasellus vitae imperdiet erat, cursus pretium orci. Maecenas nec sapien elit. Etiam congue risus non enim volutpat, vitae euismod enim condimentum. Sed malesuada rutrum lectus et dignissim.</p>
    </Card>
  ));
