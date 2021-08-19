const net = require('net');
const { IP, PORT } = require('./constants');
const { gameIntro } = require('./constants')

//Establishes connection with the game server

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,

  });
  //interprets incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    gameIntro();
    //sends user input to game server
    conn.write('Name: YOU');
  });

  //log closing message to console after 5 seconds of inactivty
  conn.on('data', () => {
    console.log('\nu died :( quit and rerun play.js to try again!')

  });
  return conn;
}

module.exports = { connect };