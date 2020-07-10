import React from 'react';
import Chart from "react-google-charts";
import { Table } from 'semantic-ui-react'

import './styles.css'

import Header from '../../components/Header';
import Footer from '../../components/Footer'

const Detalhes = () => {
    return (
        <>
            <Header />
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
                                        ['Evasão', 66.38],
                                        ['Permanência', 33.62],
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
                                <p>Ciências</p>
                                <p>da</p>
                                <p>Computação</p>
                                <p className="students">Alunos: 432</p>
                            </div>
                            <div className="col-12 alunos-table-div">
                                <Table celled inverted selectable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Matrícula</Table.HeaderCell>
                                            <Table.HeaderCell>Turno</Table.HeaderCell>
                                            <Table.HeaderCell>Cidade</Table.HeaderCell>
                                            <Table.HeaderCell>Ano Ingresso</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>123456</Table.Cell>
                                            <Table.Cell>Matutino</Table.Cell>
                                            <Table.Cell>Jataí</Table.Cell>
                                            <Table.Cell>2012</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>123345</Table.Cell>
                                            <Table.Cell>Vespertino</Table.Cell>
                                            <Table.Cell>Goiânia</Table.Cell>
                                            <Table.Cell>2013</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>123334</Table.Cell>
                                            <Table.Cell>Vespertino</Table.Cell>
                                            <Table.Cell>Goiânia</Table.Cell>
                                            <Table.Cell>2014</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>123333</Table.Cell>
                                            <Table.Cell>Matutino</Table.Cell>
                                            <Table.Cell>Jataí</Table.Cell>
                                            <Table.Cell>2014</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>123336</Table.Cell>
                                            <Table.Cell>Matutino</Table.Cell>
                                            <Table.Cell>Goiânia</Table.Cell>
                                            <Table.Cell>2015</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <Chart
                                    width={'16rem'}
                                    height={'200px'}
                                    chartType="PieChart"
                                    loader={<div style={{ color: 'white' }}>Carregando</div>}
                                    data={[
                                        ['Escola Pública', 'Porcentagem'],
                                        ['Não', 45.7],
                                        ['Sim', 54.3],
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
                                        ['Deficiênte', 'Porcentagem'],
                                        ['Sem deficiência', 16],
                                        ['Com deficiência', 84],
                                    ]}
                                    options={{
                                        title: 'Deficiência',
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
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Task', 'Hours per Day'],
                                        ['Work', 11],
                                        ['Eat', 2],
                                        ['Commute', 2],
                                        ['Watch TV', 2],
                                        ['Sleep', 7],
                                    ]}
                                    options={{
                                        backgroundColor: 'transparent',
                                        title: 'Forma de ingresso',
                                        titleTextStyle: {
                                            color: 'white'
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>
                            <div className="col-6">
                                <Chart
                                    width={'16rem'}
                                    height={'200px'}
                                    chartType="BarChart"
                                    loader={<div style={{ color: 'white' }}>Carregando</div>}
                                    data={[
                                        [
                                            'Element',
                                            'Density',
                                            { role: 'style' },
                                            {
                                            sourceColumn: 0,
                                            role: 'annotation',
                                            type: 'string',
                                            calc: 'stringify',
                                            },
                                        ],
                                        ['Categ. 1', 8.94, '#0067AC', null],
                                        ['Categ. 2', 10.49, '#BCBCBC', null],
                                        ['Categ. 3', 19.3, '#0F084B', null],
                                    ]}
                                    options={{
                                        backgroundColor: 'transparent',
                                        title: 'Categoria de ingresso',
                                        titleTextStyle: {
                                            color: 'white'
                                        },
                                        bar: { groupWidth: '95%' },
                                        legend: {
                                            position: 'none',
                                        },
                                    }}
                                    rootProps={{ 'data-testid': '6' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Detalhes;
