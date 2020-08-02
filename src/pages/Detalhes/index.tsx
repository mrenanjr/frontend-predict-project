import React, { useEffect, useState } from 'react';
import Chart from "react-google-charts";
import { Table } from 'semantic-ui-react'
import { CursoPercent } from '../Inicio' 
import api from '../../services/api';
import { Dimmer, Loader } from 'semantic-ui-react'

import './styles.css'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MyDonutChart from '../../components/MyDonutChart';
import { RouteComponentProps } from 'react-router-dom';

interface Aluno {
    ano_ingresso: number,
    cidade_endereco: string,
    cor_raca: string,
    escola_publica: string,
    forma_ingresso: string,
    matricula: string,
    media_global_aluno: number,
    media_global_curso: number,
    percentual_integralizado: number,
    probabilidade_evasao: number,
    sexo: string,
    turno: string
}

interface CursoEvasao {
    lista_aluno: Aluno[],
    percentual_evasao: number,
    total_aluno: number,
    total_evasao: number
}

interface AlunoDetail {
    ano_ingresso?: number,
    categoria_ingresso?: string,
    cidade_endereco?: string,
    cor_raca?: string,
    curso?: string,
    deficiencia?: string,
    escola_ensino_medio?: string,
    escola_publica?: string,
    especificidade_ingresso?: string,
    forma_ingresso?: string,
    grau_academico?: string,
    idade_ingresso?: number,
    ideb_escola_ensino_medio?: string,
    media_global_aluno?: number,
    media_global_curso?: number,
    modalidade?: string,
    percentual_integralizado?: number,
    probabilidade_evasao?: number,
    semestre_ingresso?: number,
    sexo?: string,
    status?: string,
    total_trancamentos?: number,
    turno?: string,
    uf_endereco?: string
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
        percentual_evasao: 0,
        total_aluno: 0,
        total_evasao: 0
    })
    const [loader, setLoader] = useState('');
    const [mediaPie, setMediaPie] = useState<string[][]>()
    const [selectedRow, setSelectedRow] = useState<number>(-1);
    const [alunoDetail, setAlunoDetail] = useState<AlunoDetail>({});

    useEffect(() => {
        setcursoPercent(props.location.state);
        setLoader('active');
        api.get(`evasao/curso/${props.location.state.curso_abreviado}?token=${localStorage.getItem('token')}`)
            .then(resp => {
                resp.data.lista_aluno.sort((a: Aluno, b: Aluno) => (a.probabilidade_evasao > b.probabilidade_evasao) ? 1 : -1).reverse();
                var mediaPieResult = [['Matrícula', 'Média Global Curso', 'Média Global Aluno']];
                for(let i  = 0; i < resp.data.lista_aluno.length; i++) {
                    mediaPieResult.push([resp.data.lista_aluno[i].matricula, resp.data.lista_aluno[i].media_global_curso, resp.data.lista_aluno[i].media_global_aluno]);
                }
                setAlunos(resp.data);
                setMediaPie(mediaPieResult);
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
            api.get(`evasao/aluno/${matricula}?token=${localStorage.getItem('token')}`)
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
                        {selectedRow === -1 &&
                            <div className="col-md-12 line">
                                <div className="col-md-3 centralizar">
                                    <p className="course-name">{cursoPercent.curso}</p>
                                    <p className="students">Alunos: {cursoPercent.quant_aluno}</p>
                                </div>
                                <div className="col-md-3">
                                    <Chart
                                        width={'100%'}
                                        height={'250px'}
                                        chartType="PieChart"
                                        loader={<div style={{ color: 'white' }}>Carregando</div>}
                                        data={[
                                            ['Constância', 'Porcentagem'],
                                            ['Evasão', alunos.percentual_evasao],
                                            ['Permanência', 100 - alunos.percentual_evasao],
                                        ]}
                                        options={{
                                            backgroundColor: 'transparent',
                                            title: 'Evasão',
                                            titleTextStyle: {
                                                color: 'white'
                                            },
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
                                <div className="col-md-3">
                                    <Chart
                                        width={'100%'}
                                        height={'250px'}
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
                                <div className="col-md-3">
                                    <Chart
                                        width={'100%'}
                                        height={'250px'}
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
                            </div>
                        }
                        {selectedRow !== -1 &&
                            <>
                                <div className="col-md-12 line">
                                    <div className="col-2 centralizar">
                                        <MyDonutChart value={alunoDetail.probabilidade_evasao} valuelabel={'Evasão'} size={116} strokewidth={26}/>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p>{alunoDetail.ano_ingresso}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Ano Ingresso
                                        </p>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p>{alunoDetail.cidade_endereco}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Cidade
                                        </p>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p>{alunoDetail.cor_raca}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Etnia
                                        </p>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p >{alunoDetail.escola_publica}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Escola Pública
                                        </p>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p >{alunoDetail.status?.toUpperCase()}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Abandonará a Universidade
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12 line">
                                    <div className="col-2 centralizar">
                                        <p >{alunoDetail.idade_ingresso}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Idade Ingresso
                                        </p>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p>{alunoDetail.total_trancamentos}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Total Trancamentos
                                        </p>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p>{alunoDetail.media_global_aluno}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Média Global do Aluno
                                        </p>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p>{alunoDetail.percentual_integralizado}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Percentual Integralizado
                                        </p>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p>{alunoDetail.modalidade}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Modadalidade
                                        </p>
                                    </div>
                                    <div className="col-2 centralizar">
                                        <p>{alunoDetail.turno}</p>
                                        <p className="students" style={{ textAlign: 'center' }}>
                                            Turno
                                        </p>
                                    </div>
                                </div>
                            </>
                        }
                    <div className="col-md-12 line">
                        <div className="col-md-5 alunos-table-div">
                            <Table color={'blue'} celled inverted selectable>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Matrícula</Table.HeaderCell>
                                        <Table.HeaderCell>Sexo</Table.HeaderCell>
                                        <Table.HeaderCell>Perc. Integralizado</Table.HeaderCell>
                                        <Table.HeaderCell>Prob. de Evasão</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {alunos?.lista_aluno.map((aluno, index) => (
                                        <Table.Row
                                            key={index}
                                            active={index === selectedRow}
                                            onClick={() => {handleClickRow(index, aluno.matricula)}}>
                                            <Table.Cell>{aluno.matricula}</Table.Cell>
                                            <Table.Cell>{aluno.sexo}</Table.Cell>
                                            <Table.Cell>{aluno.percentual_integralizado} %</Table.Cell>
                                            <Table.Cell>{aluno.probabilidade_evasao} %</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                        {selectedRow === -1 &&
                            <div className="col-md-7 ">
                                <Chart
                                    width={'100%'}
                                    height={'185px'}
                                    chartType="LineChart"
                                    loader={<div style={{ color: 'white' }}>Carregando</div>}
                                    data={mediaPie}
                                    options={{
                                        hAxis: {
                                            title: 'Matrículas',
                                            slantedText: false,
                                            titleTextStyle: {
                                                color: 'white'
                                            },
                                        },
                                        vAxis: {
                                            title: 'Médias Globáis',
                                            textStyle: {
                                                color: 'white',
                                            },
                                            titleTextStyle: {
                                                color: 'white'
                                            },
                                        },
                                        backgroundColor: 'transparent',
                                        legend: {
                                            position: 'bottom',
                                            alignment: 'start',
                                            textStyle: {
                                                color: 'white'
                                            }
                                        },
                                        colors: ['#BCBCBC', '#0067AC'],
                                        series: {
                                            1: { curveType: 'function' },
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                        }
                        {selectedRow !== -1 &&
                            <div className="col-md-7 ">
                                <div className="col-12 centralizar">
                                    <p>{alunoDetail.escola_ensino_medio}</p>
                                    <p className="students" style={{ textAlign: 'center' }}>
                                        Escola Ensino Médio
                                    </p>
                                </div>
                                <div className="col-12 centralizar">
                                    {typeof alunoDetail.ideb_escola_ensino_medio! === 'number' &&
                                        <p>{alunoDetail.ideb_escola_ensino_medio}</p>
                                    }
                                    {alunoDetail.ideb_escola_ensino_medio!.length > 5 &&
                                        <p>{alunoDetail.ideb_escola_ensino_medio}</p>
                                    }
                                    <p className="students" style={{ textAlign: 'center' }}>Ideb</p>
                                </div>
                                <div className="col-12 centralizar">
                                    <p>{alunoDetail.forma_ingresso}</p>
                                    <p className="students" style={{ textAlign: 'center' }}>
                                        Forma de Ingresso
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
