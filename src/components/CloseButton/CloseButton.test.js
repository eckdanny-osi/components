import React from 'react';
import { shallow } from 'enzyme';

import CloseButton from './CloseButton';
import { Icon } from '../';

describe('<CloseButton />', () => {
  it('should render', () => {
    expect(() => shallow(<CloseButton />)).not.toThrow();
  });
  it('should render a button', () => {
    expect(shallow(<CloseButton />).type()).toBe('button');
  });
  it('should render an Icon', () => {
    const wrapper = shallow(<CloseButton />);
    expect(wrapper.find(Icon).length).toBe(1);
    expect(wrapper.find(Icon).first().props().name).toEqual(jasmine.any(String));
  });
  it('renders the label prop', () => {
    const wrapper = shallow((<CloseButton label="my label" />));
    expect(wrapper.text()).toContain('my label');
  });
  it('responds to click events', () => {
    const onClick = jasmine.createSpy('onClick');
    const wrapper = shallow(<CloseButton onClick={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
