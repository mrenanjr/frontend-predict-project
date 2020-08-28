import * as React from 'react';
import { shallow } from 'enzyme';
import DetalhesPrint from '../pages/DetalhesPrint';

const TestDetalhesPrintValues = {
    matricula: '201300766',
    alunoDetail: {
        ano_ingresso: 2013,
        categoria_ingresso: '',
        cidade_endereco: 'Goiania',
        cor_raca: 'Não quis declarar cor/raça',
        curso: 'CIÊNCIA DA COMPUTAÇÃO',
        deficiencia: '',
        escola_ensino_medio: 'COLÉGIO EST.JOÃO TAVARES MARTINS',
        escola_publica: 'NÃO',
        especificidade_ingresso: '',
        forma_ingresso: 'INGRESSO POR TRANSFERÊNCIA',
        grau_academico: 'BACHARELADO',
        idade_ingresso: 20,
        ideb_escola_ensino_medio: 'Sem cadastro no Censo da Educação Básica 2017',
        media_global_aluno: 3.35,
        media_global_curso: 4.97,
        modalidade: 'Presencial',
        percentual_integralizado: 59.57,
        probabilidade_evasao: 60.2,
        semestre_ingresso: 1,
        sexo: 'MASCULINO',
        status: 'sim',
        total_trancamentos: 0,
        turno: 'Integral',
        uf_endereco: 'GO',
        usuario: 'Administrador'
    }
}

test('DetalhesPrint loads corretly', () => {
  const wrapper = shallow(<DetalhesPrint matricula={TestDetalhesPrintValues.matricula} aluno={TestDetalhesPrintValues.alunoDetail} />);

  expect(wrapper).toMatchSnapshot();
});