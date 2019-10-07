import React, { Component } from "react";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import io from "socket.io-client";
import './App.css';

const socket = io("http://0.0.0.0:8080");


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        chatHistory:[]
    }
    this.send = this.send.bind(this);// binding
  } // constructor


  componentDidMount() {

    socket.on('connect', () => {
         console.log("socket on...");
         console.log(socket.connected); // true
    });

    socket.on('message', (data) => {
      this.setState(prevState => ({
          chatHistory: [...this.state.chatHistory, data]
      }))
    });

   }


  send(message) {
    //socket.send("ping1");
    console.log(`send message ... ${message}`);
    socket.send(message);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput sendValue={this.send} />
      </div>
    );
  }
}

export default App;