import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  Button,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  FormControl,
  Container,
  Icon,
} from '../';

class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <div className="form-check abc-checkbox">
          <input className="form-check-input" id="checkbox1" type="checkbox" />
          <label className="form-check-label" htmlFor="checkbox1">
            Check me out
          </label>
        </div>
        <div className="pretty p-default">
          <input type="checkbox" />
          <div className="state p-primary">
            <label>Check</label>
          </div>
        </div>
        <div className="pretty p-icon p-smooth">
          <input type="checkbox" />
          <div className="state p-primary">
            <i className="icon fa fa-check" />
            {/* <Icon classNameName="icon" name="rocket" /> */}
            <label>Fooo</label>
          </div>
        </div>

        <div className="pretty p-default p-round p-bigger p-smooth">
          <input type="radio" name="radio1" />
          <div className="state p-primary">
            <label>Male</label>
          </div>
        </div>

        <div className="pretty p-default p-round p-bigger p-smooth">
          <input type="radio" name="radio1" />
          <div className="state p-primary">
            <label>Female</label>
          </div>
        </div>

        <div className="pretty p-default p-round p-bigger p-smooth">
          <input type="radio" name="radio1" />
          <div className="state p-primary">
            <label>Special</label>
          </div>
        </div>
      </form>
    );
  }
}

storiesOf('Forms', module)
  /**
   *
   */
  .add('with validation', () => (
    <Container>
      <FormExample />
    </Container>
  ));
