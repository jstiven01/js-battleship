const gameBoard = () => {
    const board = [...Array(10)].map(() => Array(10).fill(null));
    let shipsPositions = [];

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
            const finalRow = shipsPositions[i].position.row + ship.length - 1;
            const finalCol = shipsPositions[i].position.column + ship.length - 1;

            console.log((shipsPositions[i].row === position.row), (shipsPositions.column === position.column))
            //console.log()
            if((shipsPositions[i].orientation === 'V' && orientation ==='V'
            || shipsPositions[i].orientation === 'H' && orientation ==='H')  
            && initialRow === position.row 
            && initialCol === position.column ) {
                return false;
            }

            if(shipsPositions[i].orientation === 'H' && orientation === 'V'
            && (position.row <= initialRow
            && position.row + ship.length - 1 >= initialRow)
            && (initialCol <= position.column && position.column <= finalCol))  {
                return false;
            }

        }
        return true;

    }

    const placeShip = (ship, position, orientation)=> {
        if (!validatePosition(ship, position, orientation)) return false;
        shipsPositions.push({ship, position, orientation})
        renderShipOnBoard(ship, position, orientation);
        console.log(board, shipsPositions);
        return true;

    }

    return {
        placeShip,
    }

}
export default gameBoard;