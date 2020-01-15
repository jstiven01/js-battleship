const Player = (name, type, arrayShips) => {
  const randomPosition = (length) => {
    while (true) {
      const row = Math.round(Math.random() * 9);
      const column = Math.round(Math.random() * 9);
      if (row + length < 10 && column + length < 10) {
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

  return {
    name, type, setShips,
  };
};
export default Player;