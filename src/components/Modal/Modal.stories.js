import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Modal, ModalHeader, ModalBody, ModalTitle, ModalFooter } from '../';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = (
    //   <Tooltip id="modal-tooltip">
    //     wow.
    //   </Tooltip>
    // );
    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close} animation={false}>
          <ModalHeader closeButton>
            <ModalTitle>Modal heading</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.close}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

storiesOf('Modals', module)

  /**
   *
   */
  .add('Modal', () => (
    <Example />
  ));
