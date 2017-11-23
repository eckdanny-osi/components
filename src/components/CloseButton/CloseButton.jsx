import React from 'react';
import { CloseButton, utils } from 'react-bootstrap';
import { Icon } from '../';

function CloseButtonHOC(ComponentWrapped) {
  class Component extends ComponentWrapped {
    static displayName = 'CloseButton';
    render() {
      const { label, onClick } = this.props;
      return (
        <button
          type="button"
          className="close"
          onClick={onClick}
        >
          <span aria-hidden="true"><Icon name="times" /></span>
          <span className="sr-only">{label}</span>
        </button>
      );
    }

  }
  return Component;
}

export default CloseButtonHOC(CloseButton);
