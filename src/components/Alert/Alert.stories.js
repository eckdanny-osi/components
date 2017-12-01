import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';


import { Button, Alert } from '../';
import { BS_CONTEXTS_NAMES, BS_CONTEXT_NAMES } from '../../utils';
import { withInfo } from '@storybook/addon-info';

class AlertDismissable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: true
    }
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.handleAlertShow = this.handleAlertShow.bind(this);
  }
  render() {
    if (this.state.alertVisible) {
      return (
        <Alert onDismiss={this.handleAlertDismiss} {...this.props} >
          {this.props.children}
        </Alert>
      );
    }

    return (
      <Button onClick={this.handleAlertShow}>Show Alert</Button>
    );
  }
  handleAlertDismiss() {
    this.setState({ alertVisible: false });
  }
  handleAlertShow() {
    this.setState({ alertVisible: true });
  }
}

storiesOf('Alerts', module)

  .addDecorator(withKnobs)

  /**
   *
   */
  .add('Alert', withInfo()(() => {
    const contexts = [
      BS_CONTEXT_NAMES.SUCCESS,
      BS_CONTEXT_NAMES.INFO,
      BS_CONTEXT_NAMES.WARNING,
      BS_CONTEXT_NAMES.DANGER
    ].reduce((aggr, d) => ({ ...aggr,  [d]: boolean(d, false)  }), {});
    return (
      <Alert
        {...contexts}
        onDismiss={action('dismissed')}
        children={text('content', 'Pay Attention!')}
      />
    )
  }))

  /**
   *
   */
  .add('colors', () => (
    <div>
      <Alert success><strong>Success!</strong> You survived</Alert>
      <Alert info><strong>Info</strong> Just some info...</Alert>
      <Alert warning><strong>Caution!</strong> You better watch out!</Alert>
      <Alert danger><strong>Error!</strong> You broke the internet.</Alert>
    </div>
  ))

  .add('dismissible', () => (
    <div>
      <AlertDismissable danger>Boss is comming... Hide the alert!</AlertDismissable>
      <AlertDismissable info>The sky is blue</AlertDismissable>
    </div>
  ))

  .add('overflow', () => (
    <div>
      <Alert success>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus venenatis auctor. Ut vestibulum aliquet fermentum. Curabitur a imperdiet risus. Aenean vulputate, est bibendum faucibus consequat, est tortor consectetur dolor, ac egestas arcu ligula sed metus. Aenean est metus, tincidunt cursus velit eu, lacinia luctus lorem. Etiam fermentum nibh ultrices facilisis bibendum. Integer eu luctus mi. Cras scelerisque diam in metus molestie aliquam. Nunc commodo metus sed est vulputate fermentum. Phasellus at nunc sit amet elit maximus euismod. Phasellus vitae imperdiet erat, cursus pretium orci. Maecenas nec sapien elit. Etiam congue risus non enim volutpat, vitae euismod enim condimentum. Sed malesuada rutrum lectus et dignissim.</Alert>
      <AlertDismissable danger>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus venenatis auctor. Ut vestibulum aliquet fermentum. Curabitur a imperdiet risus. Aenean vulputate, est bibendum faucibus consequat, est tortor consectetur dolor, ac egestas arcu ligula sed metus. Aenean est metus, tincidunt cursus velit eu, lacinia luctus lorem. Etiam fermentum nibh ultrices facilisis bibendum. Integer eu luctus mi. Cras scelerisque diam in metus molestie aliquam. Nunc commodo metus sed est vulputate fermentum. Phasellus at nunc sit amet elit maximus euismod. Phasellus vitae imperdiet erat, cursus pretium orci. Maecenas nec sapien elit. Etiam congue risus non enim volutpat, vitae euismod enim condimentum. Sed malesuada rutrum lectus et dignissim.</AlertDismissable>
    </div>
  ));
