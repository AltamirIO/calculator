import React from 'react'

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <div className="calculated-value">{this.props.calculatedValue}</div>
            {Array(10).fill(null).map((_, index) => {
              return <button onClick={() => this.props.onPress(index)}>{ 9 - index}</button>
            })}
          <div className="operators">
            <button>+</button>
            <button>-</button>
            <button>x</button>
            <button>/</button>
          </div>
        </div>
      </div>
    );
  }
}