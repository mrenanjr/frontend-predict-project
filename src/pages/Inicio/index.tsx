import React, { useEffect, useState } from 'react';
import Chart from "react-google-charts";
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Next from '../../assets/arrow_forward-24px.svg';
import Back from '../../assets/arrow_back-24px.svg';

interface Evasao {
    curso_percent: CursoPercent[],
    quant_aluno_total: number,
    quant_evasao_total: number
};

export interface CursoPercent {
    curso: string,
    curso_abreviado: string,
    percent_evasao: number,
    quant_aluno: number,
    quant_evasao: number,
};

const Inicio = () => {
    const [evasao, setEvasao] = useState<Evasao>({
      curso_percent: [],
      quant_aluno_total: 0,
      quant_evasao_total: 0  
    });

    useEffect(() => {
        api.get('evasao/').then(resp => {
            let result = resp.data;
            let curso_abreviado = ['cc', 'es', 'si'];
            for(let i = 0; i < result.curso_percent.length; i++) {
                result.curso_percent[i].percent_evasao = Number(result.curso_percent[i].percent_evasao);
                result.curso_percent[i].quant_aluno = Number(result.curso_percent[i].quant_aluno);
                result.curso_percent[i].quant_evasao = Number(result.curso_percent[i].quant_evasao);
                result.curso_percent[i].curso_abreviado = curso_abreviado[i];
            }
            setEvasao(result);
        }).catch(err => {
            alert(`Falha ao tentar buscar as informações de evasão dos alunos na api. Error: ${err}`);
        })
    }, []);

    return (
        <>
            <Header />
            <main className="container-principal">
                <div className="row">
                    <div className="col-md-12" style={{ height: 51 }}>
                        <p className="title">Sistema de Análise Preditiva</p>
                    </div>
                    <div className="col-md-12" style={{ height: 'calc(100% - 51px)'}}>
                        <div className="row justify-content-md-center">
                            <div className="col-md">
                                <img src={Back} alt="Back"/>
                            </div>
                            {evasao.curso_percent.map((cp, i) => (
                                <Link className="col-md-3 card" to={{
                                    pathname: `/detalhes/${cp.curso_abreviado}`,
                                    state: cp
                                }}>
                                    <p className="number">{i + 1}º</p>
                                    <p className="course">{cp.curso}</p>
                                    <p className="students">Alunos: {cp.quant_aluno}</p>
                                    <Chart
                                        width={'16rem'}
                                        height={'200px'}
                                        chartType="PieChart"
                                        loader={<div style={{ color: 'white' }}>Carregando</div>}
                                        data={[
                                            ['Constância', 'Porcentagem'],
                                            ['Evasão', cp.percent_evasao],
                                            ['Permanência', 100 - cp.percent_evasao],
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
                            ))}
                            <div className="col-md" style={{ justifyContent: 'flex-end' }}>
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