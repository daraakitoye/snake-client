const net = require('net');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


//Establishes connection with the game server

const connect = () => {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,

  });
  //interprets incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Succesfully connected to the game server')
    //sends user input to game server
    rl.question('Input username: ', (name) => {
      if (name.length === 3) {
        conn.write(`Name: ${name.toUpperCase()}`);
        rl.close();
        //refactor this block later
      } else {
        throw new Error('Length of Username !== 3')
      }
      setInterval(() => {
        conn.write('Move: up')
      }, 500)
    });


  });
  //log closing message to console after 5 seconds of inactivty
  conn.on('data', () => {
    console.log('u died for idling too long silly')

  });
  return conn;
}

module.exports = { connect };