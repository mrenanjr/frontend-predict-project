import React from 'react';
import './styles.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Img from '../../assets/insert_photo-24px.svg';

const Inicio = () => {
    return (
        <>
            <Header />
            <main className="container-principal">
                <div className="row justify-content-center" style={{ height: '100%' }}>
                    <div className="col-3 img">
                        <img src={Img} alt="Imagem"/>
                    </div>
                    <div className="col-12">
                        <p className="sobrenos-text">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;O Sistema de Análise Preditiva – SISAP é o produto final funcional proveniente da 
                            Especialização em Design de Sistemas e Soluções de Business Inteligence – DSSBI e da Especialização em 
                            Governança e Gestão de Sistemas e Tecnologias da Informação – EspGTI do Instituto de Informática da 
                            Universidade Federal de Goiás.
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;O SISAP trata-se de um modelo preditivo com uma interface amigável para retorno 
                            dos resultados obtidos pelo algoritmo. O algoritmo foi criado e testado com dados extraídos do histórico 
                            acadêmico de alguns cursos em uma Instituição de Ensino Superior (IES) no período compreendido entre 2008 a 2018. 
                            De posse destes dados, foram avaliados os principais indicadores que poderiam ser apontados como fatores influentes 
                            para o problema da evasão através de um algoritmo que utiliza “<i>machine learning</i>” ou aprendizado de máquina.
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;O algoritmo foi elaborado a partir de um estudo longitudinal, resultando em um modelo de 
                            classificação preditiva uma acurácia que supera os 70% (setenta por cento).
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;Assim o SISAP é um “<i>dashboard</i>” onde as métricas consolidadas são organizadas de modo inteligível, 
                            com linguagem de fácil acesso aos usuários, contribuindo assim para gestão acadêmica, possibilitando a tomada de ações tendo em 
                            vista discentes apontados pelo algoritmo com alta probabilidade de evasão.
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;O sistema encontra-se em sua Versão 1.0 criada em agosto/2020
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Estudantes do Projeto:
                            <br />
                            <br />
                            <b>&nbsp;&nbsp;&nbsp;&nbsp;Especialização em Design de Sistemas e Soluções de Business Inteligence – DSSBI:</b>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Anderson de Oliveira Costa<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Breno Rodrigo da Silva<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Manoel Renan Oliveira Júnior<br />
                            <br />
                            <b>&nbsp;&nbsp;&nbsp;&nbsp;Especialização em Governança e Gestão de Sistemas e Tecnologias da Informação – EspGTI:</b>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Daniel Chaffe Stone<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Diogo Sebastião Fernandes Guimarães<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Franceles Bezerra de Oliveira<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Joelson Coelho Costa<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Leila Aparecida Santos Motta Cunha<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Matheus Silva Santos<br />
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Inicio;
