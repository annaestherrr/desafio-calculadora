import React, { Component } from "react";
import './App.css';



export class App extends Component {
  state = {
    n1: "null",
    n2: "null",
    res: "0"
  };



  handleChange2 = (event) => {
    this.setState({
      n2: event.target.value
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: event.target.value
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

 clear = ()=>{
    let {num1, num2} = this.state
    if(num1 && num2 !== ""){
      this.setState({
        result: null,
        n1:" ",
        n2:" "
      })
    }else{
      this.setState({
        result: "Nenhum valor foi digitado"
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Calc App</h1>
        <h2>{this.state.result}</h2>
        <input onChange={this.handleChange1} type="number" />
        <input onChange={this.handleChange2} type="number" />
        <button  onClick={this.divide}>/</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.add}>+</button>
        <button onClick={this.clear}>LIMPAR</button>
      </div>
    );
  }
}


export default App;
