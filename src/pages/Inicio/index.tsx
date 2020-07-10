import React from 'react';
import Chart from "react-google-charts";
import { Link } from 'react-router-dom';

import './styles.css'

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Next from '../../assets/arrow_forward-24px.svg';
import Back from '../../assets/arrow_back-24px.svg';

const Inicio = () => {
    return (
        <>
            <Header />
            <main className="container-principal">
                <div className="row">
                    <div className="col-md-12">
                        <p className="title">Sistema de Análise Preditiva</p>
                    </div>
                    <div className="col-md-12">
                        <div className="row justify-content-md-center">
                            <div className="col-md">
                                <img src={Back} alt="Back"/>
                            </div>
                            <Link to="/detalhes" className="col-md-3 card">
                                <p className="number">1º</p>
                                <p className="course">Ciências da Computação</p>
                                <p className="students">Alunos: 432</p>
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
                            </Link>
                            <div className="col-md-3 card">
                                <p className="number">2º</p>
                                <p className="course">Engenharia de Software</p>
                                <p className="students">Alunos: 440</p>
                                <Chart
                                    width={'16rem'}
                                    height={'200px'}
                                    chartType="PieChart"
                                    loader={<div style={{ color: 'white' }}>Carregando</div>}
                                    data={[
                                        ['Constância', 'Hours per Day'],
                                        ['Evasão', 20.85],
                                        ['Permanência', 79.15],
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
                            <div className="col-md-3 card">
                                <p className="number">3º</p>
                                <p className="course">Sistema de Informação</p>
                                <p className="students">Alunos: 207</p>
                                <Chart
                                    width={'16rem'}
                                    height={'200px'}
                                    chartType="PieChart"
                                    loader={<div style={{ color: 'white' }}>Carregando</div>}
                                    data={[
                                        ['Constância', 'Hours per Day'],
                                        ['Evasão', 12.77],
                                        ['Permanência', 87.23],
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
                            <div className="col-md">
                                <img src={Next} alt="Next"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Inicio;
