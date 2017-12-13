import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './';

describe('<Card />', () => {
  it('should render', () => {
    expect(() => shallow(<Card />)).not.toThrow();
  });
});
