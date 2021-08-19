
const IP = '10.0.2.15'
const PORT = 50541
//ctrls
const moveUp = "Move: up";
const moveLeft = "Move: left";
const moveDown = "Move: down";
const moveRight = "Move: right";
const gameIntro = () => {
  const instructions = 'How to play:\nW: Moves snek up\nA: Moves snek right\nS: Moves snek down\nD: Moves snek right\nCTRL + C: quit snek'
  setTimeout(() => {
    console.log('Succesfully connected to the game server')
  }, setTimeout(() => {
    console.log(instructions)
  }, 2000), 3000)
};

module.exports = {
  IP,
  PORT,
  moveUp,
  moveLeft,
  moveDown,
  moveRight,
  gameIntro,
}