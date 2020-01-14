const Ship = (length) => {
  const ship = Array(length).fill(false);
  
  const hit = (position) => {
    if (ship[position] === false) {
      ship[position] = true;
    }
  }

  const isSunk = () => {
    return ship.every((position) => position === true);
  }

  const getType = () => `${length}`;

  return { hit, isSunk, getType, length }
}

export default Ship;