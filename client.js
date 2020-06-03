const net = require('net');
const { IP, PORT } = require('./constants');
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

//do something when app is closing
process.on('exit', () => console.log(`you ded cuz you idled`));

// confirm we are connected to server
conn.on('connect', () => {
  console.log(`connection established`);
  conn.write(`Name: JBD`);
//   conn.write(`Move: up`)
//   setInterval(() => {
//     conn.write(`Move: up`)
//   }, 500);

});


  return conn;
}

module.exports = { 
  connect,
};