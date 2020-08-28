import * as React from 'react';
import { shallow } from 'enzyme';
import Login from '../pages/Login';

test('Login loads corretly', () => {
  const wrapper = shallow(<Login />);

  expect(wrapper).toMatchSnapshot();
});