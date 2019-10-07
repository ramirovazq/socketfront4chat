import io from "socket.io-client";

const socket = io("http://0.0.0.0:8080");

let connect = () => {
	  console.log("Attempting Connection...");

	  socket.on('connect', () => {
	  	 console.log("socket on...");
	     console.log(socket.connected); // true
	  });

	  socket.on('message', data => {
	  	 console.log("returned message from server... data");
	     console.log(data); // true

	  });

};

let sendMsg = msg => {
	  console.log("sending msg from react button send: ", msg);
	  socket.send(msg);
};

export { connect, sendMsg };
