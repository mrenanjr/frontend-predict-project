/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AlunoDetail } from '../Detalhes';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import ImgSchool from '../../assets/outline_school_black_18dp.png'; 

const styles = StyleSheet.create({
    whiteContainer: {
        width: '100%',
        height: '100%',
        marginBottom: 30,
        padding: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    firstHeader: {
        backgroundColor: 'gray',
        height: '10vh',
        width: '70%',
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: 'black',
        fontSize: 12
    },
    secondHeader: {
        backgroundColor: 'gray',
        height: '10vh',
        width: '28%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 12
    },
    detailsprinttitle: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18
    },
    img: {
        width: 24
    },
    subtitle: {
        fontSize: 14,
        width: '100%'
    },
    devider: {
        width: '100%',
        marginTop: 10,
        borderBottom: '3 solid orange'
    },
    dados: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    elementbox: {
        fontSize: 10,
        width: '30%',
        padding: '5 5 5 0'
    },
    elementboxfive: {
        fontSize: 10,
        width: '20%',
        padding: '5 5 5 0'
    },
    elementboxfirst: {
        backgroundColor: 'gray',
        color: 'white',
        padding: 5,
        borderBottom: '2px solid white'
    },
    elementboxsecond: {
        backgroundColor: 'lightcyan',
        color: 'black',
        padding: 5
    },
    footer: {
        fontSize: 12,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
})

interface DetailObJ {
    matricula: string,
    aluno: AlunoDetail
};

const DetalhesPrint = ({ matricula, aluno }: DetailObJ) => {
    return (
        <Document>
            <Page size="A4" style={styles.whiteContainer}>
                <View style={styles.header}>
                    <View style={styles.firstHeader}>
                        <Text>NOME DA IES</Text>
                        <Text>Endereço, Cidade, Estado e CEP</Text>
                        <Text>Telefone telefone E-mail Redes Sociais</Text>
                    </View>
                    <View style={styles.secondHeader}>
                        <Text>LOGO TIPO DA IES</Text>
                        <Image src={ImgSchool} style={styles.img}/>
                    </View>
                </View>
                <Text style={styles.detailsprinttitle}>RELATÓRIO INDIVIDUAL DA PREDIÇÃO DE EVASÃO</Text>
                <Text style={styles.subtitle}>DADOS DO DISCENTE</Text>
                <View style={styles.devider}></View>
                <View style={styles.dados}>
                    <View style={styles.elementbox}>
                        <Text style={styles.elementboxfirst}>MATRÍCULA</Text>
                        <Text style={styles.elementboxsecond}>{matricula}</Text>
                    </View>
                    <View style={styles.elementbox}>
                        <Text style={styles.elementboxfirst}>NOME DO CURSO</Text>
                        <Text style={styles.elementboxsecond}>{aluno.curso}</Text>
                    </View>
                    <View style={styles.elementbox}>
                        <Text style={styles.elementboxfirst}>PROBABILIDADE DE EVASÃO (%)</Text>
                        <Text style={styles.elementboxsecond}>{aluno.probabilidade_evasao}%</Text>
                    </View>
                </View>
                <View style={styles.dados}>
                    <View style={styles.elementbox}>
                        <Text style={styles.elementboxfirst}>FORMA DE INGRESSO</Text>
                        <Text style={styles.elementboxsecond}>{aluno.forma_ingresso}</Text>
                    </View>
                    <View style={styles.elementbox}>
                        <Text style={styles.elementboxfirst}>ESCOLA ENSINO MÉDIO</Text>
                        <Text style={styles.elementboxsecond}>{aluno.escola_ensino_medio}</Text>
                    </View>
                    <View style={styles.elementbox}>
                        <Text style={styles.elementboxfirst}>NOTA DO IDEB*</Text>
                        <Text style={styles.elementboxsecond}>{aluno.ideb_escola_ensino_medio}</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>DADOS SOCIO-ECONÔMICOS</Text>
                <View style={styles.devider}></View>
                <View style={styles.dados}>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>ANO DE INGRESSO</Text>
                        <Text style={styles.elementboxsecond}>{aluno.ano_ingresso}</Text>
                    </View>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>CIDADE</Text>
                        <Text style={styles.elementboxsecond}>{aluno.cidade_endereco}</Text>
                    </View>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>ETNIA</Text>
                        <Text style={styles.elementboxsecond}>{aluno.cor_raca}</Text>
                    </View>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>ESCOLA PÚBLICA</Text>
                        <Text style={styles.elementboxsecond}>{aluno.escola_publica}</Text>
                    </View>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>IDADE INGRESSO</Text>
                        <Text style={styles.elementboxsecond}>{aluno.idade_ingresso}</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>DADOS ACADÊMICOS</Text>
                <View style={styles.devider}></View>
                <View style={styles.dados}>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>MODALIDADE DO CURSO</Text>
                        <Text style={styles.elementboxsecond}>{aluno.modalidade}</Text>
                    </View>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>TURNO</Text>
                        <Text style={styles.elementboxsecond}>{aluno.turno}</Text>
                    </View>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>TRANCAMENTO</Text>
                        <Text style={styles.elementboxsecond}>{aluno.total_trancamentos}</Text>
                    </View>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>MGA**</Text>
                        <Text style={styles.elementboxsecond}>{aluno.media_global_aluno}</Text>
                    </View>
                    <View style={styles.elementboxfive}>
                        <Text style={styles.elementboxfirst}>INTEGRALIZAÇÃO (%)</Text>
                        <Text style={styles.elementboxsecond}>{aluno.percentual_integralizado}%</Text>
                    </View>
                </View>
                <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                <View style={styles.footer}>
                     <Text>LEGENDA:</Text>
                     <Text>* IDEB - Índice de Desenvolvimento da Educação Básica</Text>
                     <Text>** MGA - Média Global do Aluno</Text>
                 </View>
            </Page>
        </Document>
    );
}

export default DetalhesPrint;