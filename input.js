let connection;
let { moveUpKey, moveDownKey, moveLeftKey, moveRightKey, messages } = require('./constants');

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === moveUpKey) {
    connection.write('Move: up');
  }
  if (key === moveDownKey) {
    connection.write('Move: down');
  }
  if (key === moveLeftKey) {
    connection.write('Move: left');
  }
  if (key === moveRightKey) {
    connection.write('Move: right');
  }
  if (messages[key]) {
    connection.write(`Say: ${messages[key]}`);
  }
  process.stdout.write(key);
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  connection = conn;
  return stdin;
};

module.exports = {
  setupInput
};