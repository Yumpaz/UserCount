import React, { Component } from "react";
import "./styles/userCount.css";

export class UserCount extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      text: "Estado inicial"
    }
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleSubstract = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleReset = () => {
    this.setState({
        count: 0
    })
  }

  render() {
    return (
      <div className="count">
        <h1><strong>BIENVENIDO A USER RANDOM</strong></h1>
        <br/>
        <br/>
        <h2><strong>Contador de usuarios</strong></h2>
        <h3>{this.state.count}</h3>
        <button className="button" onClick={this.handleAdd}><strong>Aumentar</strong></button>
        <button className="button" onClick={this.handleReset}><strong>Reiniciar</strong></button>
        <button className="button" onClick={this.handleSubstract}><strong>Disminuir</strong></button>
      </div>
    );
  }
}

export default UserCount;