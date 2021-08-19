import React from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <SafeAreaView style={style.FlexV3}>
            <Quadrado cor='#ff801a' lado={20}/>
            <Quadrado cor='#F00' lado={30}/>
            <Quadrado cor='#0F0' lado={40}/>
            <Quadrado cor='#00F' lado={50}/>
            <Quadrado cor='#A5F' lado={60}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection: 'row',
        height: 350,
        width: '100%',
        backgroundColor:'#000',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})