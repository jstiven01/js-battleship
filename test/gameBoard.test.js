import gameBoard from '../src/js/gameBoard';
import Ship from '../src/js/ship'

test('placing one ship', ()=> {
    const newShip = Ship(4);
    const gameBoardHuman = gameBoard();
    const initialPosition = { row: 3, column: 9};
    const orientation = 'V';
    const IsShipPlaced = gameBoardHuman.placeShip(newShip, initialPosition, orientation);
    expect(IsShipPlaced).toBe(true);

});

test.only('placing ship in a taken position', () => {
    const ship1 = Ship(3);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 3, column: 9};
    const orientation1 = 'V';
    const ship2 = Ship(4);
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition1, orientation1);
    expect(isTaken).toBe(false);

});

