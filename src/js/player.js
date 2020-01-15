const Player = (name, type, arrayShips) => {
  let turn;
  const computerAttacks = [];

  const randomPosition = (length = 0) => {
    while (true) {
      const row = Math.round(Math.random() * 9);
      const column = Math.round(Math.random() * 9);
      if (length !== 0 && row + length < 10 && column + length < 10) {
        return { row, column };
      } if (length === 0
        && computerAttacks.filter((pos) => pos.row === row && pos.column === column).length === 0) {
        return { row, column };
      }
    }
  };

  const setShips = (gameBoard) => {
    for (let i = 0; i < arrayShips.length; i += 1) {
      let flag = true;
      while (flag) {
        const orientation = Math.round(Math.random()) === 0 ? 'H' : 'V';
        const position = randomPosition(arrayShips[i].length);
        flag = !gameBoard.placeShip(arrayShips[i], position, orientation);
      }
    }
  };

  const getTurn = () => turn;

  const setTurn = (boolean) => { turn = boolean; };

  const attackRival = (board, position = {}) => {
    if (type === 'C') {
      const newPosition = randomPosition();
      computerAttacks.push(newPosition);
      board.receiveAttack(newPosition);
    } else {
      board.receiveAttack(position);
    }
  };

  return {
    name, type, setShips, getTurn, setTurn, attackRival,
  };
};
export default Player;