import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Estilo from '../style'

export default props => {
    return(
        <React.Fragment>
            <View style={style.Display}>
                <Text style={[Estilo.fontG, style.DisplayText]}>
                    {props.num}
                </Text>
            </View>
        </React.Fragment>
    )
}

const style = StyleSheet.create({
    Display:{
        backgroundColor:'#000',
        padding: 20,
        width: 300,
    },
    DisplayText:{
        color: '#FFF'
    }
})