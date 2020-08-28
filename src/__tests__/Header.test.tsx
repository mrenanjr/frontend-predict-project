import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

test('Header loads corretly', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});