import React, { Component } from 'react';
import Calculator from './Calculator'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calculatedValue: 0
    }
  }
  onPress = (value) => {
    // do something with this value
  }
  render() {
    return (
      <Calculator />
    )
  }
}

export default App;
