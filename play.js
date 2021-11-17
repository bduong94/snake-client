const net = require('net');
const conn = require('./client.js');
const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    };
    // process.stdout.write(key);
  });
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

console.log("Connecting ...");

conn.connect();
setupInput();