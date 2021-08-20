import React from 'react'
import {Text} from 'react-native'
import Estilo from '../style'
import produtos from './Produtos'

export default props => {
    return(
        <React.Fragment>
            <Text style={Estilo.fontG}>
                Lista de Produtos
            </Text>
            {produtos.map(p => {
                return <Text key={p.id}>{p.id}) {p.nome} custa R${p.preco} </Text>
            })}
        </React.Fragment>
    )
}