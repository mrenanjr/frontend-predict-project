import * as React from 'react';
import { shallow } from 'enzyme';
import Sobrenos from '../pages/Sobrenos';

test('Sobrenos loads corretly', () => {
  const wrapper = shallow(<Sobrenos />);

  expect(wrapper).toMatchSnapshot();
});