const gameBoard = () => {
    const board = [...Array(10)].map(() => Array(10).fill(null));
    let shipsPositions = [];
    let isAHit;

    const renderShipOnBoard = (ship, position, orientation) => {
        if(orientation ==='V'){
            for(let i = position.row; i < position.row + ship.length; i+=1) {
                board[i][position.column] = ship.getType();
            }
        }else {
            for(let i = position.column; i < position.column + ship.length; i+=1) {
                board[position.row][i] = ship.getType();
            }
        }

    }


    const validatePosition = (ship, position, orientation) => {
        for(let i = 0; i < shipsPositions.length; i+=1){
            const initialRow = shipsPositions[i].position.row;
            const initialCol = shipsPositions[i].position.column;
            const finalRow = shipsPositions[i].position.row + shipsPositions[i].ship.length - 1;
            const finalColumn = shipsPositions[i].position.column + shipsPositions[i].ship.length - 1;
      
            if (shipsPositions[i].orientation === 'V' && orientation === 'V'
                  && ((position.row + ship.length - 1 >= initialRow
                  && position.row + ship.length - 1 <= finalRow)
                  || (position.row >= initialRow
                  && position.row <= finalRow)) && initialCol === position.column) {
              return false;
            } if (shipsPositions[i].orientation === 'H' && orientation === 'V'
            && (position.row <= initialRow
            && position.row + ship.length - 1 >= initialRow)
            && (initialCol <= position.column && position.column <= finalColumn)) {
              return false;
            } if (shipsPositions[i].orientation === 'V' && orientation === 'H'
            && (position.column <= initialCol
            && position.column + ship.length - 1 >= initialCol)
            && (initialRow <= position.row && position.row <= finalRow)) {
              return false;
            } if (shipsPositions[i].orientation === 'H' && orientation === 'H'
            && ((position.column + ship.length - 1 >= initialCol
            && position.column + ship.length - 1 <= finalColumn)
            || (position.column >= initialCol && position.column <= finalColumn))
            && initialRow === position.row) {
              return false;
            }
          }
          return true;

    }

    const placeShip = (ship, position, orientation)=> {
        if (!validatePosition(ship, position, orientation)) return false;
        shipsPositions.push({ship, position, orientation})
        renderShipOnBoard(ship, position, orientation);
        //console.log(board, shipsPositions);
        return true;

    }

    const isHitShip = (position) => {
        for(let i = 0; i < shipsPositions.length; i+=1) {
            const initialCol = shipsPositions[i].position.column;
            const initialRow = shipsPositions[i].position.row;

            if(shipsPositions[i].orientation === 'V' && initialCol === position.column
            && position.row - initialRow >= 0 
            && position.row - initialRow <= shipsPositions[i].ship.length - 1) {
                shipsPositions[i].ship.hit(position.row - initialRow);
                if(shipsPositions[i].ship.isSunk()) shipsPositions.splice(i, 1);
                return true;
            }
            if(shipsPositions[i].orientation === 'H' && initialRow === position.row
            && position.column - initialCol >= 0 
            && position.column - initialCol <= shipsPositions[i].ship.length - 1){
                shipsPositions[i].ship.hit(position.column - initialCol);
                if(shipsPositions[i].ship.isSunk()) shipsPositions.splice(i, 1);
               return true;
            }
        }
        return false;
    }

    const getHit = () => isAHit;
    const isOver = () => shipsPositions.length === 0;

    const saveAttack = (position) => { 
        if (isAHit) {
            board[position.row][position.column] = 'X';
        } else {
            board[position.row][position.column] = 'M';
        }
    }

    const receiveAttack = (position) => {
        isAHit = isHitShip(position);
        saveAttack(position);
    }

    const getBoard = () => board;

    return {
        placeShip, receiveAttack, getHit, isOver, getBoard
    }

}
export default gameBoard;