const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host:'10.0.2.15',
    port:50541
  });
  
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to the game..');
  });

  conn.on('connect', () => {
    conn.write('Name: B.D');
  })

  conn.on('connect', () => {
    setInterval(() => {
      conn.write('Move: left');
    }, 500);
  })
  
  return conn;
};

module.exports = {
  connect
};