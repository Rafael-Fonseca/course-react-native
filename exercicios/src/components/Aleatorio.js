import React from "react";
import {Text} from 'react-native'
import Estilo from './style'

export default (props) => {
    var min = Math.ceil(props.min)
    var max = Math.floor(props.max)
    var num = Math.floor(Math.random() * (max-min)+min)
    console.warn('min:', props.min, 'max:', props.max, 'Rdm:', num)
    return (
        <Text style={Estilo.fontG}>
            Número aleatório gerado {num}
        </Text>
    )
}