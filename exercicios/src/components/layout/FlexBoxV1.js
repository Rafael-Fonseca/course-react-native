import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <SafeAreaView style={style.FlexV1}>
            <Quadrado/>
            <Quadrado cor='#F00'/>
            <Quadrado cor='#0F0'/>
            <Quadrado cor='#00F'/>
            <Quadrado cor='#A5F'/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        backgroundColor: '#ff801a',
        flexGrow: 1,
        justifyContent:'flex-start',
    }
})