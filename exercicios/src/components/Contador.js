import React, {useState} from 'react'
import {Text, Button} from 'react-native'
import Estilo from './style'

export default (props) => {
    var passo = props.passo
    const [num, setNum] = useState(props.inicial)

    const inc = () => setNum(num + passo)
    const dec = () => setNum(num - passo)


    return(
        <React.Fragment>
            <Text style={Estilo.fontG}>{num}</Text>
            <Button title='+' onPress={inc}></Button>
            <Button title='-' onPress={dec}></Button>
        </React.Fragment>
    )
}