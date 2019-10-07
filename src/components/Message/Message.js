import React, { Component } from 'react';
import "./Message.scss";


export default class Message extends Component {

  constructor(props) {
    super(props);
    //let temp = JSON.parse(this.props.message);
    let temp = this.props.message;
    this.state = {
      message: temp
    };
  }

  render() {
	return <div className="Message" key={this.props.message_index} >{this.state.message}</div>;
  }//render

}//Component

