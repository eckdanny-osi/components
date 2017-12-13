import React from 'react';
import { shallow } from 'enzyme';
import { RelationshipList } from '../';

describe('<RelationshipList />', () => {
  it('should render', () => {
    expect(() => shallow(<RelationshipList />)).not.toThrow();
  });
});
