import React from 'react'
import {SafeAreaView, View, StyleSheet, Platform, StatusBar} from 'react-native'
import Mega from './components/mega/Mega'
// separa
// import FlexBoxV4 from './components/layout/FlexBoxV4'
// import FlexBoxV3 from './components/layout/FlexBoxV3'
// import FlexBoxV2 from './components/layout/FlexBoxV2'
// import FlexBoxV1 from './components/layout/FlexBoxV1'
// import Quadrado from './components/layout/Quadrado'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import FilhoRelacao from './components/relacao/FilhoRelacao'
// import PaiRelacao from './components/relacao/PaiRelacao'
// import ParImpar from './components/ParImpar'
// import ContadorV2 from './components/contador/ContadorV2'
// import PaiIndireto from './components/indireta/PaiIndireto'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import Padrao,{Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/primeiro'


export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdNumeros={0}/>
        {/*
        <FlexBoxV4/>
        <FlexBoxV3/>
        <FlexBoxV2/>
        <FlexBoxV1/>
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <ListaProdutos/>
        <UsuarioLogado usuario={{nome: 'João', email: 'joao@gmail.com'}}/>
        <UsuarioLogado usuario={{nome: 'ana'}}/>
        <UsuarioLogado usuario={{email: 'carlos@gmail.com'}}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/>
        <PaiRelacao>
            <FilhoRelacao nome='João' sobrenome='Silva'/>
            <FilhoRelacao nome='Pedro' sobrenome='Silva'/>
        </PaiRelacao>

        <PaiRelacao>
            <FilhoRelacao nome='Antônio' sobrenome='Gusmão'/>
            <FilhoRelacao nome='Paulo' sobrenome='Gusmão'/>
        </PaiRelacao>
        <ParImpar num={4}/>
        <ContadorV2/>
        <PaiIndireto/>
        <Pai/>
        <Contador inicial={100} passo={10}/>
        <Botao/>
        <Titulo principal='Principal' secundario='Secundario'/>
        <Aleatorio min={5} max={10}/>
        <MinMax min={3} max={20}/>
        <Padrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})
