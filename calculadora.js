import React, { Component } from 'react';
import './App.css';

export default class Calc extends Component {
  state = {
    result: 0,
    num1: null,
    num2: null
  };

  handleChange = (e) => {
    this.setState({
      num1: e.target.value
    });
  };
  handleChange2 = (e) => {
    this.setState({
      num2: e.target.value
    });
  };

  minus = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 - num2
    });
  };
  multiply = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 * num2
    });
  };
  divide = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 / num2
    });
  };
  add = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: Number(num1) + Number(num2)
    });
  };

  render() {
    return (
      <div className='container'>
        <h1>CALCULADORA LINDA REACT BY ANNA ESTHER</h1>
        <h2>{this.state.result}</h2>
        <div className='calc'>
          <input className='input' onChange={this.handleChange} type="number" />
          <input className='input' onChange={this.handleChange2} type="number" />
         <div className='calc-button'>
         <button className='button' onClick={this.minus}>-</button>
         <button className='button' onClick={this.add}>+</button>
         <button className='button' onClick={this.divide}>/</button>
         <button className='button' onClick={this.multiply}>*</button>
         </div>
        
        </div>
       
      </div>
    );
  }
}