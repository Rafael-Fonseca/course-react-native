import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <SafeAreaView style={style.FlexV2}>
            <Quadrado cor='#ff801a'/>
            <Quadrado cor='#F00'/>
            <Quadrado cor='#0F0'/>
            <Quadrado cor='#00F'/>
            <Quadrado cor='#A5F'/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV2:{
        width: '100%',
        justifyContent:'space-evenly',
        alignItems:'flex-end',    
        backgroundColor:'#000',
        flexGrow: 1,
    }
})