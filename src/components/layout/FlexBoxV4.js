import React from 'react'
import {StyleSheet, SafeAreaView, View} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <SafeAreaView style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV4:{
        width: '100%',
        backgroundColor:'#000',
        flexGrow: 1,
    },
    V0:{
        backgroundColor:'#36c9a7',
        height: 300,
    },
    V1:{
        flexGrow: 3,
        backgroundColor:'#ff801a',
    },
    V2:{
        flexGrow: 1,
        backgroundColor:'#dd22c1',
    }
})