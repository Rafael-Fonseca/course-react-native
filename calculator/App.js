import React, { Component } from 'react';
import {StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue:'0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0,
}

export default class App extends Component {
  state = {...initialState}

  addDigit = n => {
    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay

      if(n === '.'&& !clearDisplay 
      && this.state.displayValue.includes('.')){
        return
      }

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperation = operation => {
    if (this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true})
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }catch(e){
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        // clearDisplay: !equals, // O professor preferiu assim
        clearDisplay: true, // Eu prefiro assim
        values, // mesmo nome não precisa >> : values
      })
    }

  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button title='AC' triple onClick={this.clearMemory}/>
          <Button title='/' operation onClick={this.setOperation}/>
          <Button title='7' onClick={this.addDigit}/>
          <Button title='8' onClick={this.addDigit} />
          <Button title='9' onClick={this.addDigit} />
          <Button title='*' operation onClick={this.setOperation} />
          <Button title='4' onClick={this.addDigit} />
          <Button title='5' onClick={this.addDigit} />
          <Button title='6' onClick={this.addDigit} />
          <Button title='-' operation onClick={this.setOperation} />
          <Button title='1' onClick={this.addDigit} />
          <Button title='2' onClick={this.addDigit} />
          <Button title='3' onClick={this.addDigit} />
          <Button title='+' operation onClick={this.setOperation} />
          <Button title='0' double onClick={this.addDigit} />
          <Button title='.' onClick={this.addDigit}/>
          <Button title='=' operation onClick={this.setOperation} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap:'wrap',
    // justifyContent:'flex-end'
    // alignItems:'flex-start'
  }

});
