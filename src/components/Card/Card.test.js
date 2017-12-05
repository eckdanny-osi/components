import React from 'react';
import { shallow } from 'enzyme';
import Card from './';

describe('<Card />', () => {
  xit('should render', () => {
    expect(() => shallow(<Card />)).not.toThrow();
  });
});
