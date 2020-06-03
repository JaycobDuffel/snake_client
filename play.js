const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

//do something when app is closing
process.on('exit', () => console.log(`you ded cuz you idled`));



  return conn;
}

console.log('Connecting ...');
connect();