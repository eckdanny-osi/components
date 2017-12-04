import React from 'react';
import { shallow, mount } from 'enzyme';
import { default as Alert, AlertRBS } from './Alert';
// import { Alert as AlertRBS } from 'react-bootstrap';
import { Icon, CloseButton } from '../';

describe('<Alert />', () => {
  it('should render', () => {
    expect(() => shallow(<Alert />)).not.toThrow();
  });
  it('should have an alert role', () => {
    expect(shallow(<Alert />).dive().props().role).toBe('alert');
  })
  it('should have a default bootstrap context class', () => {
    const wrapper = shallow(<Alert />).dive();
    expect(wrapper.hasClass('alert')).toBe(true);
    expect(wrapper.hasClass('alert-info')).toBe(true);
  });
  it('should render Icons', () => {
    const wrapper = shallow(<Alert />).dive();
    wrapper.setProps({ bsStyle: 'info' });
    expect(wrapper.find(Icon).props().name).toBe('info-circle');
    wrapper.setProps({ bsStyle: 'success' });
    expect(wrapper.find(Icon).props().name).toBe('check-circle');
    wrapper.setProps({ bsStyle: 'warning' });
    expect(wrapper.find(Icon).props().name).toBe('warning');
    wrapper.setProps({ bsStyle: 'danger' });
    expect(wrapper.find(Icon).props().name).toBe('warning');
  });
  it('should render a CloseButton when onDismiss is provided', () => {
    const onDismiss = jasmine.createSpy('onDismiss');
    const wrapper = shallow(<Alert onDismiss={onDismiss} />).dive();
    expect(wrapper.find(CloseButton).exists()).toBe(true);
    expect(wrapper.find(CloseButton).props().onClick).toBe(onDismiss);
  });
});
