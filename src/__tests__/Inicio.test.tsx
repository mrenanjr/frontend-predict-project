import * as React from 'react';
import { shallow } from 'enzyme';
import Inicio from '../pages/Inicio';

test('Inicio loads corretly', () => {
  const wrapper = shallow(<Inicio />);

  expect(wrapper).toMatchSnapshot();
});