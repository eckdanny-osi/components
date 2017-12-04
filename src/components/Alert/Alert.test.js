import React from 'react';
import { shallow, mount } from 'enzyme';
import { default as Alert, AlertRBS } from './Alert';
// import { Alert as AlertRBS } from 'react-bootstrap';
import { Icon, CloseButton } from '../';

describe('<Alert />', () => {
  fit('should render AlertRBS', () => {
    // let component;
    // expect(() => {
      // component = shallow(<Alert />);
    // }).not.toThrow();
    // console.log(component.debug());
    // expect(component.type()).toBe(AlertRBS);
    // expect(component.find(AlertRBS)).toBe(true);
    const wrapper = shallow(<Alert />);
    console.log(wrapper.debug());
    console.log(wrapper.type());
    console.log(AlertRBS);
  });
  xit('should pass a default prop to <AlertRBS />', () => {

  });
  xit('should have an alert role', () => {
    expect(shallow(<Alert />).props().role).toBe('alert');
  })
  xit('should have a default bootstrap context class', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.hasClass('alert')).toBe(true);
    expect(wrapper.hasClass('alert-info')).toBe(true);
  });
  xit('should render Icons', () => {
    const wrapper = shallow(<Alert />);
    wrapper.setProps({ bsStyle: 'info' });
    expect(wrapper.find(Icon).props().name).toBe('info-circle');
    wrapper.setProps({ bsStyle: 'success' });
    expect(wrapper.find(Icon).props().name).toBe('check-circle');
    wrapper.setProps({ bsStyle: 'warning' });
    expect(wrapper.find(Icon).props().name).toBe('warning');
    wrapper.setProps({ bsStyle: 'danger' });
    expect(wrapper.find(Icon).props().name).toBe('warning');
  });
  xit('should render a CloseButton when onDismiss is provided', () => {
    const onDismiss = jasmine.createSpy('onDismiss');
    const wrapper = shallow(<Alert onDismiss={onDismiss} />);
    expect(wrapper.find(CloseButton).exists()).toBe(true);
    expect(wrapper.find(CloseButton).props().onClick).toBe(onDismiss);
  });
});
