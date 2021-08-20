import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from '../style';

import MegaNumero from "./MegaNumero";

export default class Mega extends React.Component{
    
    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: [],
    }

    alterarQtdNumero = (qtd) => {
        this.setState(() => {return {qtdNumeros: +qtd}})
    }

    aleatorio = () => {
        return Math.floor((Math.random()*(60-1))+1)
    }

    gerarNumeroNaoContido = nums =>{
        const novo = Math.floor((Math.random()*(60-1))+1)
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce((n) => [...n, this.gerarNumeroNaoContido(n)],[])
            .sort((a,b) => a - b)
            this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return<MegaNumero key={num} num={num}/>
        })
    }

    render(){
        return(
        <>
            <Text style={Estilo.fontG}>
                Gerador de Mega-Sena, 
            </Text>
            <TextInput
                keyboardType={'numeric'}
                style={{borderBottomWidth: 1}}
                placeholder='Quantidade de números'
                value={`${this.state.qtdNumeros}`}
                onChangeText={this.alterarQtdNumero}
            />
            <Button title='Ver valores' onPress={this.gerarNumeros}></Button>
            <Text style={Estilo.fontG}>
                Números gerados: 
            </Text>
            <View style={{
                flexDirection:'row',
                flexWrap: "wrap",
                justifyContent:"center",
            }} >
            {this.exibirNumeros()}
            </View>
        </>
        )
    }
}