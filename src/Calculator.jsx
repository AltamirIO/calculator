import React from 'react'

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <div className="calculated-value"><button onClick={() => this.props.onPress('=')} > =</button>{this.props.calculatedValue}</div>
          <div className="numbers">
            {Array(10).fill(null).map((_, index) => (
              <button
                children={index}
                className="number"
                onClick={() => this.props.onPress(index)} />
            ))}
          </div>
          {['+', '-', '*', '/'].map((val) => (
            <button name={val} onClick={() => this.props.onPress(val)}>{val}</button>
          ))}
        </div>
      </div>
    );
  }
}