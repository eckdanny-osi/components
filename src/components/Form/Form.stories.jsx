import React from 'react';

// import 'react-select/src/scss/default';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Select from 'react-select';

import {
  Form,
  Button,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  FormControl,
  Container,
  Row,
  Col,
  Card,
} from '../';

const FieldGroup = ({ id, label, help, ...props }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

const FormInstance = () => (
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup id="formControlsPassword" label="Password" type="password" />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>

    <FormGroup>
      <Radio name="radioGroup" inline>
        1
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        2
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        3
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>email@example.com</FormControl.Static>
    </FormGroup>

    <Button type="submit">Submit</Button>
  </form>
);

class Foo extends React.Component {
  state = {
    selectedOption: '',
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };
  render() {
    return (
      <Select
        name="form-field-name"
        value={this.state.selectedOption.value}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
}

storiesOf('Form Elements', module)
  /**
   *
   */
  .add('form elements', () => (
    <Container>
      <Row>
        <Col sm={8} smOffset={2} md={6} mdOffset={3}>
          <Card>
            <Form>
              <FieldGroup
                id="formControlsText"
                type="email"
                label="Email address"
                placeholder="foo@bar.com"
              />
              <FormGroup
                controlId="formBasicText"
                validationState={() => 'success'}
              >
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                  type="text"
                  value={'this.state.value'}
                  placeholder="Enter text"
                  onChange={() => {}}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
              <FieldGroup
                id="formControlsText"
                type="email"
                label="Email address"
                placeholder="foo@bar.com"
              />
              <FieldGroup
                id="formControlsPassword"
                label="Password"
                type="password"
              />
              <FormGroup>
                <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
                <Checkbox inline>3</Checkbox>
              </FormGroup>
              <FormGroup>
                <Radio name="radioGroup" inline>
                  1
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  2
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  3
                </Radio>
              </FormGroup>

              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formControlsSelectMultiple">
                <ControlLabel>Multiple select</ControlLabel>
                <FormControl componentClass="select" multiple>
                  <option value="select">select (multiple)</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>

              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Static text</ControlLabel>
                <FormControl.Static>email@example.com</FormControl.Static>
              </FormGroup>

              <Foo />

              <Button type="submit">Submit</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  ));
