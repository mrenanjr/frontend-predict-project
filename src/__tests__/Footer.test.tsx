import * as React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

test('Footer loads corretly', () => {
  const wrapper = shallow(<Footer />);

  expect(wrapper).toMatchSnapshot();
});