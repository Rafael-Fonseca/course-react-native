import React from 'react'
import {Button, StyleSheet, SafeAreaView} from 'react-native'

export default props => {
    return(
        <React.Fragment>
            <SafeAreaView style={style.Botoes}>
                <Button title='+' onPress={props.inc}/>
                <Button title='-' onPress={props.dec}/>
            </SafeAreaView>
        </React.Fragment>
    )
}

const style = StyleSheet.create({
    Botoes:{
        flexDirection: 'row'
    }
})