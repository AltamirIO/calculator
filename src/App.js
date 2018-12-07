import React, { Component } from 'react';
import Calculator from './Calculator'
import './App.css'

class App extends Component {
  state = {
    calculatedValue: 0
  }

  onPress = (value) => {
    console.log(value)
    // do something with this value
  }
  render() {
    return (
      <Calculator
        calculatedValue={this.state.calculatedValue}
        onPress={this.onPress}
      />
    )
  }
}

export default App;
