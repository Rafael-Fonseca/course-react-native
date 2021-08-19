import React from 'react'
import {Text, FlatList} from 'react-native'
import Estilo from '../style'
import produtos from './Produtos'

export default props => {
    return(
        <React.Fragment>
            <Text style={Estilo.fontG}>
                Lista Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i=>`${i.id}`}
                renderItem= {({item: p})=> {
                    return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
                }}
            />
        </React.Fragment>
    )
}