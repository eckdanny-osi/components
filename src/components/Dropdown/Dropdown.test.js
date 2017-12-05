import React from 'react';
import { shallow } from 'enzyme';
import { DropdownButton } from 'react-bootstrap';

describe('<DropdownButton />', () => {
  it('should render', () => {
    expect(() => shallow(<DropdownButton title="my dropdown" />)).not.toThrowError();
  });
});
