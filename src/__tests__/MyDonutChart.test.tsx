import * as React from 'react';
import { shallow } from 'enzyme';
import MyDonutChart from '../components/MyDonutChart';

const TestDonutValues = {
    value: 70,
    valueLabel: 'Teste',
    size: 126,
    strokewidth: 26
}

test('MyDonutChart loads corretly', () => {
  const wrapper = shallow(<MyDonutChart 
        value={TestDonutValues.value}
        valuelabel={TestDonutValues.valueLabel}
        size={TestDonutValues.size}
        strokewidth={TestDonutValues.strokewidth}
    />);

  expect(wrapper).toMatchSnapshot();
});