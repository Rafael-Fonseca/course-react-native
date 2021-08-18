import React from 'react'
import {View, StyleSheet} from 'react-native'

import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import Padrao,{Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/primeiro'


export default () => (
    <View style={style.App}>

        <Contador inicial={100} passo={10}/>
        {/*<Botao/>
        <Titulo principal='Principal' secundario='Secundario'/>
        <Aleatorio min={5} max={10}/>
        <MinMax min={3} max={20}/>
        <Padrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})