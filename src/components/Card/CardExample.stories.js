import React from 'react';
import set from 'lodash.set';

import {
  Card,
  Button, ButtonToolbar,
  Container, Row, Col,
  FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, FormControl,
  Icon,
  Well,
  utils
} from '../';

const change = fn => ({target: { type, checked, value, name }}) => fn(name, 'checkbox' === type ? checked : value);

const initialState = {
  mode: 'edit',
  form: {
    _saving: false,
    _dirty: false,
    _invalid: false,
  },
  model: {
    email: 'danny.eck@osi.ca.gov',
    fname: 'Danny',
    lname: 'Eck',
    isAwesome: true,
    tel: [
      { value: '5553334444', type: 'cell' },
      { value: '3334445566', type: 'work' }
    ]
  }
};

const CardExampleEditView = ({
  model: {
    email,
    fname,
    isAwesome,
    tel: telNumbers
  },
  onChange: _onChange,
  onCancel,
  onSubmit
}) => {
  const onChange = change(_onChange);
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
              onClick={onCancel}
              >Cancel</Button>
            <Button
              bsStyle="primary"
              onClick={onSubmit}
              >Save</Button>
          </ButtonToolbar>
        </div>
      )}
    >
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="model.email"
            className="form-control"
            placeholder="bob@example.com"
            value={email}
            onChange={onChange}
          />
        </div>
        <FormGroup>
          <ControlLabel>First Name</ControlLabel>
          <input
            type="text"
            className="form-control"
            placeholder="Bob"
            value={fname}
            name="model.fname"
            onChange={onChange}
          />
        </FormGroup>

        <FormGroup >
          <Checkbox
            inline
            name="model.isAwesome"
            checked={isAwesome}
            onChange={onChange}
          >Awesome?</Checkbox>
        </FormGroup>

        {/* <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              checked={isAwesome}
              name="model.isAwesome"
              onChange={onChange}
            />
            Awesome?
          </label>
        </div> */}
        <label>Phone Numbers</label>
        <Well>
          {telNumbers.map(({type, value}, i, arr) => (
            <Row key={i}>
              <Col sm={4} >
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="5554443322"
                    value={value}
                    name={`model.tel[${i}][value]`}
                    onChange={onChange}
                  />
                </div>
              </Col>
              <Col sm={6}>
                {/* <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`model.tel[${i}][type]`}
                      value="mobile"
                      checked={'mobile' === type}
                      onChange={onChange}
                    />
                    Mobile
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`model.tel[${i}][type]`}
                      value="work"
                      checked={'work' === type}
                      onChange={onChange}
                    />
                    Work
                  </label>
                </div> */}
                <FormGroup>
                  <FormControl
                    componentClass="select"
                    placeholder="select"
                    name={`model.tel[${i}][type]`}
                    value={telNumbers[i]['type'] || 'select'}
                    onChange={onChange}
                  >
                    <option disabled value="select">Select...</option>
                    <option value="cell">Cell</option>
                    <option value="work">Work</option>
                    <option value="home">Home</option>
                  </FormControl>
                </FormGroup>
              </Col>
              <Col>
                <Button
                  onClick={() => _onChange('model.tel', arr.filter((_, j) => i !== j))}
                >
                  <Icon name="times-circle" />
                </Button>
              </Col>
            </Row>
          ))}
        </Well>
        <Button
          type="button"
          onClick={() => _onChange('model.tel', [...telNumbers, { type: '', value: '' }])}
        >
          <Icon name="plus" /> Add Telephone
        </Button>
      </form>
    </Card>
  );
};

const CardExampleReadView = ({
  email,
  fname,
  isAwesome,
  tel: telNumbers,
  onEdit
}) => {
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
            onClick={onEdit}
            >Edit</Button>
        </div>
      )}
    >
      <Row>
        <Col xs={3}>Email</Col>
        <Col>{email}</Col>
      </Row>
      <Row><Col xs={3}>First Name</Col><Col>{fname}</Col></Row>
      <Row><Col xs={3}>Is Awesome?</Col><Col>{isAwesome ? 'Yes' : 'No'}</Col></Row>
      <h4>Telephone(s)</h4>
      {telNumbers && telNumbers.map(({type, value}, i, arr) => {
        return (
          <Row key={i}><Col xs={3}>{type}</Col><Col>{utils.formatters.telephone(value)}</Col></Row>
        );
      })}
    </Card>
  );
};

export default class CardExample extends React.Component {

    static defaultProps = {};

    static propTypes = {};

    constructor(props) {
      super(props);
      this.state = initialState;
      this.handleCancel = this.handleCancel.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
    }

    handleChange(key, value) {
      this.setState(set(this.state, key, value));
    }

    _renderReadView(...props) {
      return <CardExampleReadView
        {...props}
        {...this.state.model}
        onEdit={() => this.setState({ mode: 'edit' })}
        />
    }

    _renderEditView(...props) {
      return (
        <CardExampleEditView
          {...props}
          model={this.state.model}
          onChange={this.handleChange}
          onCancel={this.handleCancel}
          onSubmit={this.onSubmit}
        />
      );
    }

    // _renderBody(...props) {
    //   return 'read' === this.state.mode
    //     ? this._renderReadView(...props)
    //     : this._renderEditView(...props)
    //     ;
    // }

    handleCancel() {
      this.setState({ mode: 'read' });
    }

    handleSave() {
      this.setState(set(this.state, 'form._saving', true));
      setTimeout(() => {
        this.setState({
          mode: 'read',
          form: { ...this.state.form, _saving: false }
        });
      }, 1000);
    }

    render() {

      switch (this.state.mode) {
        case 'read': {
          return this._renderReadView();
        }
        case 'edit': {
          return this._renderEditView();
        }
        default:
          return (
            <div>Oh no!</div>
          );
      }

      return (
          {/* <CardFooter>
            <div className="card-actions">
              <Button
                type="light"
                size="sm"
                onClick={this.handleCancel}
                className={'edit' !== this.state.mode ? 'd-none' : false}
                disabled={this.state.form._saving}
                >Cancel</Button>
              {' '}
              <Button
                type="primary"
                size="sm"
                onClick={this.handleSave}
                className={'edit' !== this.state.mode ? 'd-none' : false}
                disabled={this.state.form._saving}
                >{
                  !this.state.form._saving
                    ? 'Save'
                    : <span>
                        <Icon name='circle-o-notch' spin />{' '}
                        Saving...
                      </span>
                  }</Button>
            </div>
          </CardFooter> */}
      );
    }
  }
