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

test.only('placing ship in a taken position both of them vertical', () => {
    const ship1 = Ship(3);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 3, column: 9};
    const orientation1 = 'V';
    const ship2 = Ship(4);
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition1, orientation1);
    expect(isTaken).toBe(false);

});

test('placing ship in a taken position both of them Horizontal', () => {
    const ship1 = Ship(2);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 1, column: 5};
    const orientation1 = 'H';
    const ship2 = Ship(4);
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition1, orientation1);
    expect(isTaken).toBe(false);
});

test.only('placing ship in same occupied position oldHorizontal NewVertical', () => {
    const ship1 = Ship(2);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 4, column: 4};
    const orientation1 = 'H';
    const ship2 = Ship(4);
    const initialPosition2 = { row: 1, column: 7};
    const orientation2 = 'V';
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition2, orientation2);
    expect(isTaken).toBe(false);
});
test.todo('placing ship in available position oldHorizontal newVertical');

