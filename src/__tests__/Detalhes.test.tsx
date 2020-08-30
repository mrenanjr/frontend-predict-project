import * as React from 'react';
import { shallow } from 'enzyme';
import Detalhes from '../pages/Detalhes'; 

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
  const wrapper = shallow(
      <Detalhes history={{} as any} match={{} as any} location={{
          state: TestDetalhesValues.location,
          pathname: {} as any,
          search: {} as any,
          hash: {} as any
      }} />
  );

  expect(wrapper).toMatchSnapshot();
});