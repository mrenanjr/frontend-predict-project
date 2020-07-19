import React, { useEffect, useState } from 'react';
import Chart from "react-google-charts";
import { Table } from 'semantic-ui-react'
import { CursoPercent } from '../Inicio' 
import api from '../../services/api';
import { Dimmer, Loader } from 'semantic-ui-react'

import './styles.css'

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { RouteComponentProps } from 'react-router-dom';

interface Aluno {
    ano_ingresso: string,
    cor_raca: string,
    escola_publica: string,
    forma_ingresso: string,
    matricula: string,
    percentual_integralizado: string,
    sexo: string,
    turno: string
}

interface CursoEvasao {
    lista_aluno: Aluno[],
    percentual_evasao: string,
    total_aluno: string,
    total_evasao: string
}

interface AlunoDetail {
    probabilidade_evasao: string,
    media_global_aluno: string,
    media_global_curso: string,
    status: string
}

const Detalhes = (props: RouteComponentProps<{}, any, CursoPercent | any | {}>) => {
    const [cursoPercent, setcursoPercent] = useState<CursoPercent>({
        curso: '',
        curso_abreviado: '',
        percent_evasao: 0,
        quant_aluno: 0,
        quant_evasao: 0,
    });
    const [alunos, setAlunos] = useState<CursoEvasao>({
        lista_aluno: [],
        percentual_evasao: '',
        total_aluno: '',
        total_evasao: ''
    })
    const [corRacaPie, setCorRacaPie] = useState<number[]>([])
    const [turnoPie, setTurnoPie] = useState<number[]>([])
    const [loader, setLoader] = useState('');
    const [selectedRow, setSelectedRow] = useState<number>(-1);
    const [alunoDetail, setAlunoDetail] = useState<AlunoDetail>({
        probabilidade_evasao: '',
        media_global_aluno: '',
        media_global_curso: '',
        status: ''
    });

    useEffect(() => {
        setcursoPercent(props.location.state);
        setLoader('active');
        api.get(`evasao/curso/${props.location.state.curso_abreviado}`)
            .then(resp => {
                setAlunos(resp.data);
                resp.data.lista_aluno.sort((a: Aluno, b: Aluno) => (a.percentual_integralizado > b.percentual_integralizado) ? 1 : -1).reverse();
                var corRaca = [0, 0, 0, 0, 0, 0];
                var turno = [0, 0, 0, 0];
                for(let i = 0; i < resp.data.lista_aluno.length; i++) {
                    switch(resp.data.lista_aluno[i].cor_raca) {
                        case 'Pardo':
                            corRaca[0]++;
                            break;
                        case 'Preto':
                            corRaca[1]++;
                            break;
                        case 'Branco':
                            corRaca[2]++;
                            break;
                        case 'Não quis declarar cor/raça':
                            corRaca[3]++;
                            break;
                        case 'Amarelo':
                            corRaca[4]++;
                            break;
                        case 'Não Informado':
                            corRaca[5]++;
                            break;
                    }

                    switch(resp.data.lista_aluno[i].turno) {
                        case 'Integral':
                            turno[0]++;
                            break;
                        case 'Matutino':
                            turno[1]++;
                            break;
                        case 'Verpertino':
                            turno[2]++;
                            break;
                        case 'Noturno':
                            turno[3]++;
                            break;
                    }
                }
                setCorRacaPie(corRaca);
                setTurnoPie(turno);
            }).catch(err => {
                alert(`Erro na tentativa de requisitar os alunos do curso de ${cursoPercent.curso}. Error: ${err}`);
            }).finally(() => {
                setLoader('disabled');
            })
    }, [cursoPercent.curso, props.location.state]);

    function handleClickRow(index: number, matricula: string) {
        if(index === selectedRow) {
            setSelectedRow(-1);
        } else {
            setLoader('active');
            api.get(`evasao/aluno/${matricula}`)
                .then(resp => {
                    setAlunoDetail(resp.data);
                    setSelectedRow(index);
                }).catch(err => {
                    alert(`Erro na tentativa de buscar informações do aluno de matrícula ${matricula}. Error: ${err}`);
                }).finally(() => {
                    setLoader('disabled');
                })
        }
    }

    return (
        <>
            <Header />
            <Dimmer className={loader}>
                <Loader size="large" content='Carregando' />
            </Dimmer>
            <div className="container-principal">
                <div className="row">
                    <div className="container-filter-info col-6">
                        <div className="row">
                            <div className="col-6">
                                <Chart
                                    width={'16rem'}
                                    height={'200px'}
                                    chartType="PieChart"
                                    loader={<div style={{ color: 'white' }}>Carregando</div>}
                                    data={[
                                        ['Constância', 'Porcentagem'],
                                        ['Evasão', cursoPercent.percent_evasao],
                                        ['Permanência', 100 - cursoPercent.percent_evasao],
                                    ]}
                                    options={{
                                        backgroundColor: 'transparent',
                                        pieHole: 0.4,
                                        colors: ['#0067AC', '#BCBCBC'],
                                        legend: {
                                            position: 'bottom',
                                            alignment: 'start',
                                            textStyle: {
                                                color: 'white'
                                            }
                                        }
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                            <div className="col-6 centralizar">
                                <p style={{ textAlign: 'center', wordSpacing: '9999px' }}>{cursoPercent.curso}</p>
                                <p className="students">Alunos: {cursoPercent.quant_aluno}</p>
                            </div>
                            <div className="col-12 alunos-table-div">
                                <Table color={'blue'} celled inverted selectable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Matrícula</Table.HeaderCell>
                                            <Table.HeaderCell>Cor/Raça</Table.HeaderCell>
                                            <Table.HeaderCell>Esc. Pública</Table.HeaderCell>
                                            <Table.HeaderCell>Perc. Integralizado</Table.HeaderCell>
                                            <Table.HeaderCell>Forma Ingresso</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {alunos?.lista_aluno.map((aluno, index) => (
                                            <Table.Row
                                                key={index}
                                                active={index === selectedRow}
                                                onClick={() => {handleClickRow(index, aluno.matricula)}}>
                                                <Table.Cell>{aluno.matricula}</Table.Cell>
                                                <Table.Cell>{aluno.cor_raca}</Table.Cell>
                                                <Table.Cell>{aluno.escola_publica}</Table.Cell>
                                                <Table.Cell>{aluno.percentual_integralizado}</Table.Cell>
                                                <Table.Cell>{aluno.forma_ingresso}</Table.Cell>
                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        {selectedRow === -1 &&
                            <div className="row">
                                <div className="col-6">
                                    <Chart
                                        width={'16rem'}
                                        height={'200px'}
                                        chartType="PieChart"
                                        loader={<div style={{ color: 'white' }}>Carregando</div>}
                                        data={[
                                            ['Escola Pública', 'Porcentagem'],
                                            ['Não', (alunos.lista_aluno.length - alunos.lista_aluno.filter(obj => obj.escola_publica === 'SIM').length) / 100],
                                            ['Sim', (alunos.lista_aluno.length - alunos.lista_aluno.filter(obj => obj.escola_publica === 'NÃO').length) / 100],
                                        ]}
                                        options={{
                                            title: 'Escola Pública',
                                            titleTextStyle: {
                                                color: 'white'
                                            },
                                            backgroundColor: 'transparent',
                                            pieHole: 0.4,
                                            colors: ['#0067AC', '#BCBCBC'],
                                            legend: {
                                                position: 'bottom',
                                                alignment: 'start',
                                                textStyle: {
                                                    color: 'white'
                                                }
                                            }
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                                <div className="col-6">
                                    <Chart
                                        width={'16rem'}
                                        height={'200px'}
                                        chartType="PieChart"
                                        loader={<div style={{ color: 'white' }}>Carregando</div>}
                                        data={[
                                            ['Sexo', 'Porcentagem'],
                                            ['MASCULINO', (alunos.lista_aluno.length - alunos.lista_aluno.filter(obj => obj.sexo === 'FEMININO').length) / 100],
                                            ['FEMININO', (alunos.lista_aluno.length - alunos.lista_aluno.filter(obj => obj.sexo === 'MASCULINO').length) / 100],
                                        ]}
                                        options={{
                                            title: 'Sexo',
                                            titleTextStyle: {
                                                color: 'white'
                                            },
                                            backgroundColor: 'transparent',
                                            pieHole: 0.4,
                                            colors: ['#0067AC', '#BCBCBC'],
                                            legend: {
                                                position: 'bottom',
                                                alignment: 'start',
                                                textStyle: {
                                                    color: 'white'
                                                }
                                            }
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                                <div className="col-6">
                                    <Chart
                                        width={'16rem'}
                                        height={'200px'}
                                        chartType="PieChart"
                                        loader={<div style={{ color: 'white' }}>Carregando</div>}
                                        data={[
                                            ['Cor/Raça', 'Quantidade'],
                                            ['Pardo', corRacaPie[0]],
                                            ['Preto', corRacaPie[1]],
                                            ['Branco', corRacaPie[2]],
                                            ['Não quis declarar cor/raça', corRacaPie[3]],
                                            ['Amarelo', corRacaPie[4]],
                                            ['Não Informado', corRacaPie[5]],
                                        ]}
                                        options={{
                                            backgroundColor: 'transparent',
                                            title: 'Forma de ingresso',
                                            titleTextStyle: {
                                                color: 'white'
                                            },
                                            legend: {
                                                position: 'bottom',
                                                alignment: 'start',
                                                textStyle: {
                                                    color: 'white'
                                                }
                                            }
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                                <div className="col-6">
                                    <Chart
                                        width={'16rem'}
                                        height={'200px'}
                                        chartType="PieChart"
                                        loader={<div style={{ color: 'white' }}>Carregando</div>}
                                        data={[
                                            ['Turno', 'Quantidade'],
                                            ['Integral', turnoPie[0]],
                                            ['Matutino', turnoPie[1]],
                                            ['Vespertino', turnoPie[2]],
                                            ['Noturno', turnoPie[3]],
                                        ]}
                                        options={{
                                            backgroundColor: 'transparent',
                                            title: 'Turno',
                                            titleTextStyle: {
                                                color: 'white'
                                            },
                                            legend: {
                                                position: 'bottom',
                                                alignment: 'start',
                                                textStyle: {
                                                    color: 'white'
                                                }
                                            }
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                            </div>
                        }
                        {selectedRow !== -1 &&
                            <div className="row">
                                <div className="col-6 centralizar">
                                    <p style={{ fontSize: '50px' }}>{alunoDetail.probabilidade_evasao}%</p>
                                    <p className="students" style={{ textAlign: 'center' }}>
                                        Probabilidade de Evasão
                                    </p>
                                </div>
                                <div className="col-6 centralizar">
                                    <p style={{ fontSize: '50px' }}>{alunoDetail.status.toUpperCase()}</p>
                                    <p className="students" style={{ textAlign: 'center' }}>
                                        Sairá da Universidade
                                    </p>
                                </div>
                                <div className="col-12 centralizar">
                                    <p style={{ fontSize: '34px' }}>{alunoDetail.media_global_aluno}</p>
                                    <p className="students" style={{ textAlign: 'center' }}>
                                        Média Global do Aluno
                                    </p>
                                </div>
                                <div className="col-12 centralizar">
                                    <p style={{ fontSize: '34px' }}>{alunoDetail.media_global_curso}</p>
                                    <p className="students" style={{ textAlign: 'center' }}>
                                        Média Global do Curso
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Detalhes;
