import React, {useState} from 'react'
import {Text, SafeAreaView, TextInput} from 'react-native'
import Estilo from './style'

export default props => {
    const [nome, setNome] = useState('Teste')
    return(
        <SafeAreaView>
            <Text>{nome}</Text>
            <TextInput
                placeholder='Digite seu nome: '
                value={nome}
                onChangeText={new_name => setNome(new_name)}
            />
                
        </SafeAreaView>
    )
}