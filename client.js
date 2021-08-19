const net = require('net');

const { IP, PORT } = require('./constants');

//Establishes connection with the game server

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,

  });
  //interprets incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    setTimeout(() => {
      console.log('Succesfully connected to the game server')
    }, setTimeout(() => {
      console.log('How to play:\nW: Moves snek up\nA: Moves snek right\nS: Moves snek down\nD: Moves snek right\nCTRL + C: quit snek')
    }, 2000), 3000)

    //sends user input to game server
    conn.write('Name: YOU')
  });

  //log closing message to console after 5 seconds of inactivty
  conn.on('data', () => {
    console.log('\nu died :(')

  });
  return conn;
}

module.exports = { connect };