import React, { useState } from 'react'
import FilhoIndireto from './FilhoIndireto'
import {Text} from 'react-native';
import Estilo from '../style'

export default props => {
    const [num, setNum] = useState(0)
    function exibirValor(numero) {
        setNum(numero)
    }

    return(
        <React.Fragment>
            <Text style={Estilo.fontG}>{num}</Text>
            <FilhoIndireto
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </React.Fragment>
    )
}