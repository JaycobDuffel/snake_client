const { connect } = require('./client')
const { setupInput } = require('./input');

/**
 * Establishes connection with the game server
 */


console.log('Connecting ...');
let conObj = connect();



setupInput(conObj);
  
  