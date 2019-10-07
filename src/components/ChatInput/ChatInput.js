import React, { Component } from 'react';
import "./ChatInput.scss";


export default class ChatInput extends Component {
  constructor() {
    super();
    this.state = {
      messageBox: '',
    };
    this.clickEnviar = this.clickEnviar.bind(this);
    this.updateMessageBox = this.updateMessageBox.bind(this);
  }

  clickEnviar() {
  	// console.log("clien enviar ...")
  	// console.log(this.state.messageBox)
  	this.props.sendValue(this.state.messageBox)
	this.setState({
      messageBox: ""
    });
  }


  updateMessageBox(event) {  	
	this.setState({
      messageBox: event.target.value
    });
  }

  render() {
	return (
	  <div className="form-inline">
		<input 
		    type="text"
			placeholder="Escriba un mensaje ..." 
			value={this.state.messageBox} 
			onChange = {this.updateMessageBox}
		 />
		<button onClick={this.clickEnviar}>Enviar</button>
      </div>
	); //return
  }//render

}//Component

