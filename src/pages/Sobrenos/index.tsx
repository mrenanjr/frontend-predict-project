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
                <div className="row" style={{ height: '100%' }}>
                    <div className="col-2 img">
                        <img src={Img} alt="Imagem"/>
                    </div>
                    <div className="col-9">
                        <p className="sobrenos-text">
                                Observações e análises de fenômenos como a retenção e evasão no ensino superior
                            público é de suma importância visto que, compromete a taxa de de conclusão nos cursos de Bacharelado e Licenciatura, gera ociosidade de recursos humanos e materiais e não retorna os
                            investimentos aplicados pelos recursos públicos à própria sociedade. Assim os impactos
                            negativos que a retenção e a evasão causam na sociedade e na própria UFG são sensíveis e
                            importantes de serem investigados e estudados.
                        </p>
                    </div>
                    <div className="col-12">
                        <p className="sobrenos-text">
                                Posto que a sociedade é forçada a custear
                            estes estudantes e que eles não irão dar um retorno ao investimento aplicado em sua
                            formação, dentro do período previsto se prolongando no curso (retenção) ou até mesmo
                            inviabilizando seu retorno como um profissional graduado (evasão) regressando, assim, os
                            recursos investidos durante sua permanência na universidade. Estes estudantes ocupam uma
                            vaga pública que poderia ter sido mais bem aproveitada.
                        </p>
                        <p className="sobrenos-text">
                                Ainda, de acordo com o site “somospar” a taxa de evasão escolar no Brasil é a terceira
                            maior do mundo com média de 24,1% na lista dos 100 países com melhor IDH. Existem
                            algumas causas listadas pelo site “politize.com.br” que são: Acesso limitado; Necessidade
                            especial; Gravidez e Maternidade; Atividades ilegais; Mercado de trabalho; Pobreza; Violência;
                            Deficit de aprendizagem; Qualidade da educação e etc.
                        </p>
                        <p className="sobrenos-text">
                                O projeto discorre da procura em diminuir a quantidade de retenção e evasão de
                            estudantes dos cursos da Universidade Federal de Goiás (UFG), diminuindo sua taxa de
                            retenção e evasão em pelo menos 50% em 5 anos comparado ao total.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Inicio;
