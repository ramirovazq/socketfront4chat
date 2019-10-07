import React, { Component } from 'react';
import "./ChatHistory.scss";
import Message from '../Message/Message';

export default class ChatHistory extends Component {

  render() {
  	const messages = this.props.chatHistory.map((msg, index) => <Message message={msg} message_index={index}/>);

	return (
	  <div className="ChatHistory">
        <h2>Historial</h2>
		{messages}
      </div>
	); //return
  }//render

}//Component

