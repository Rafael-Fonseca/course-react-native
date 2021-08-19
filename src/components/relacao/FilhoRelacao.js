import React from 'react'
import {Text} from 'react-native'
import Estilo from '../style'

export default props => {
    return(
        <React.Fragment>
            <Text style={Estilo.fontG}>
                {props.nome} {props.sobrenome}
            </Text>
        </React.Fragment>
    )
}