const Ship = (length) => {
  const shipArray = Array(length).fill(false);
  
  const hit = (position) => {
    if (shipArray[position] === false) {
      shipArray[position] = true;
    }
  }

  const isSunk = () => {
    return shipArray.every((position) => position === true);
  }

  const getType = () => `${length}`;


  return { hit, isSunk, getType, length, }
}

export default Ship;