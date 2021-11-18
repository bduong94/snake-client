const net = require('net');
const { IP, PORT, playerInitials } = require('./constants');
const connect = function() {
  const conn = net.createConnection({
    host:IP,
    port:PORT
  });
  
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });
  
  conn.on('connect', () => {
    console.log('Sucessfully connected to the game..');
  });

  conn.on('connect', () => {
    conn.write(`Name: ${playerInitials}`);
  });

  return conn;
};

module.exports = {
  connect
};