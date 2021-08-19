/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const { moveUp, moveLeft, moveDown, moveRight } = require("./constants");


//ends play.js if ctrl + c is pressed
const handleUserInput = ('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
});

let connection;
const setupInput = (conn) => {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //mapping wasd
  stdin.on('data', (key) => {
    handleUserInput(key);
    if (key === 'w') {
      conn.write(moveUp);
    } else if (key === 'a') {
      conn.write(moveLeft);
    } else if (key === 's') {
      conn.write(moveDown);
    } else if (key === 'd') {
      conn.write(moveRight);
      //cute message :)
    } else {
      conn.write('Say: boop!')
    }
  })


  return stdin;
}

module.exports = { setupInput };