const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

//do something when app is closing
process.on('exit', () => console.log(`you ded cuz you idled`));



  return conn;
}

module.exports = connect;