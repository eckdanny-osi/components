import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Alert } from '../';

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
        <Alert bsStyle={this.props.bsStyle} onDismiss={this.handleAlertDismiss}>
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

  /**
   *
   */
  .add('Colors', () => (
    <div>
      <Alert bsStyle="success"><strong>Success!</strong> You survived</Alert>
      <Alert bsStyle="info"><strong>Info</strong> Just some info...</Alert>
      <Alert bsStyle="warning"><strong>Caution!</strong> You better watch out!</Alert>
      <Alert bsStyle="danger"><strong>Error!</strong> You broke the internet.</Alert>
    </div>
  ))

  .add('Dismissible', () => (
    <div>
      <AlertDismissable bsStyle="danger">Boss is comming... Hide the alert!</AlertDismissable>
      <AlertDismissable bsStyle="info">The sky is blue</AlertDismissable>
    </div>
  ))

  // .add('Overflow', () => (

  // ));
