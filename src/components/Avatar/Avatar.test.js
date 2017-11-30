import React from 'react';
import { shallow } from 'enzyme';
import { Avatar, Icon } from '../';

describe('<Avatar />', () => {
  it('should render', () => {
    expect(() => shallow(<Avatar />)).not.toThrow();
  });
  it('should render an Icon when no imgUrl is provided', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find(Icon).exists()).toBe(true);
    expect(wrapper.find(Icon).props().name).toEqual(jasmine.any(String));
    expect(wrapper.find('img').exists()).not.toBe(true);
  });
  it('should render an img when imgUrl is provided', () => {
    const wrapper = shallow(<Avatar imgUrl="my-img-url" />);
    expect(wrapper.find(Icon).exists()).not.toBe(true);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').props().src).toEqual('my-img-url');
  });
  it('should add CSS class for avatar size', () => {
    const wrapper = shallow(<Avatar size="sm" />);
    expect(wrapper.hasClass('avatar-sm')).toBe(true);
  });
});
