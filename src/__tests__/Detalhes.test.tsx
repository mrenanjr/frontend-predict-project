import * as React from 'react';
import {Link} from 'react-router-dom';
import { shallow } from 'enzyme';

const TestDetalhesValues = {
    location: {
        curso: 'Ciências da Computação',
        curso_abreaviado: 'cc',
        percent_evasao: 68,
        quant_aluno: 432,
        quant_evasao: 156
    }
}

test('Detalhes loads corretly', () => {
  const wrapper = shallow(<Link to={{ pathname: `/detalhes/cc`, state:  TestDetalhesValues }}/>);

  expect(wrapper).toMatchSnapshot();
});