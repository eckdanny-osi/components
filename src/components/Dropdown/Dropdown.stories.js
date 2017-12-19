import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

// import Dropdown from '../';
import { ButtonToolbar, DropdownButton } from 'react-bootstrap';
import { MenuItem, Icon } from '..';

import { BS_CONTEXTS_NAMES, BS_CONTEXT_NAMES } from '../../utils';
import { withInfo } from '@storybook/addon-info';

storiesOf('Dropdowns', module)
  .addDecorator(withKnobs)

  /**
   *
   */
  .add(
    'DropdownButton',
    withInfo()(() => {
      return (
        <DropdownButton
          title={
            <span>
              <Icon name="rocket" /> Click Me
            </span>
          }
          id="my-dropdown"
        >
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
      );
    })
  )

  /**
   *
   */
  .add(
    'colors',
    withInfo()(() => {
      const BUTTONS = [
        'Default',
        'Primary',
        'Success',
        'Info',
        'Warning',
        'Danger',
      ];
      return (
        <ButtonToolbar>
          {BUTTONS.map((title, i) => (
            <DropdownButton
              bsStyle={title.toLowerCase()}
              title={title}
              key={i}
              id={`dropdown-basic-${i}`}
            >
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Active Item</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>
          ))}
        </ButtonToolbar>
      );
    })
  )

  /**
   *
   */
  .add(
    'sizing',
    withInfo()(() => (
      <div>
        <ButtonToolbar>
          <DropdownButton
            bsSize="large"
            title="Large button"
            id="dropdown-size-large"
          >
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton title="Default button" id="dropdown-size-medium">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton
            bsSize="small"
            title="Small button"
            id="dropdown-size-small"
          >
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton
            bsSize="xsmall"
            title="Extra small button"
            id="dropdown-size-extra-small"
          >
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    ))
  );
