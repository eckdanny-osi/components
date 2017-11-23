import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Alert } from '../';
// import { Alert } from 'react-bootstrap';

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

  // .add('Dismissible', () => {
  //   class AlertDismissable extends React.Component {
  //     constructor(props) {
  //       super(props);
  //       this.state = {
  //         alertVisible: true
  //       }
  //     }
  //     render() {
  //       if (this.state.alertVisible) {
  //         return (
  //           <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
  //             <h4>Oh snap! You got an error!</h4>
  //             <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
  //             <p>
  //               <Button bsStyle="danger">Take this action</Button>
  //               <span> or </span>
  //               <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
  //             </p>
  //           </Alert>
  //         );
  //       }

  //       return (
  //         <Button onClick={this.handleAlertShow}>Show Alert</Button>
  //       );
  //     }
  //     handleAlertDismiss() {
  //       this.setState({ alertVisible: false });
  //     }
  //     handleAlertShow() {
  //       this.setState({ alertVisible: true });
  //     }
  //   }
  //   return <AlertDismissable />
  // });
