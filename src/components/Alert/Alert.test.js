import React from 'react';
import { shallow } from 'enzyme';
import { Alert, Icon, CloseButton } from '../';

describe('<Alert />', () => {
  it('should render', () => {
    expect(() => shallow(<Alert />)).not.toThrow();
  });
  it('should have an alert role', () => {
    expect(shallow(<Alert />).props().role).toBe('alert');
  })
  it('should have a default bootstrap context class', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.hasClass('alert')).toBe(true);
    expect(wrapper.hasClass('alert-info')).toBe(true);
  });
  it('should render Icons', () => {
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
  it('should render a CloseButton when onDismiss is provided', () => {
    const onDismiss = jasmine.createSpy('onDismiss');
    const wrapper = shallow(<Alert onDismiss={onDismiss} />);
    expect(wrapper.find(CloseButton).exists()).toBe(true);
    expect(wrapper.find(CloseButton).props().onClick).toBe(onDismiss);
  });
});
