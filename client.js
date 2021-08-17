const net = require('net');

//Establishes connection with the game server

const connect = () => {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  //interprets incoming data as text
  conn.setEncoding('utf8');
  //logs closing message to console after wait time has passed
  conn.on('data', () => {
    console.log('u died for idling too long silly')
  });
  return conn;
}

module.exports = { connect };