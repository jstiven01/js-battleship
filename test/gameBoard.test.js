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

test('placing ship in a taken position both of them vertical', () => {
    const ship1 = Ship(3);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 3, column: 9};
    const orientation1 = 'V';
    const ship2 = Ship(4);
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition1, orientation1);
    expect(isTaken).toBe(false);

});

test('placing ship in a available position both of them vertical', () => {
    const ship1 = Ship(2);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 2, column: 9};
    const initialPosition2 = { row: 4, column: 5};
    const orientation1 = 'V';
    const ship2 = Ship(4);
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition2, orientation1);
    expect(isTaken).toBe(true);

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

test('placing ship in available position both of them Horizontal', () => {
    const ship1 = Ship(2);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 1, column: 2};
    const initialPosition2 = { row: 1, column: 4};
    const orientation1 = 'H';
    const ship2 = Ship(4);
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition2, orientation1);
    expect(isTaken).toBe(true);
});

test('placing ship in taken position oldHorizontal NewVertical', () => {
    const ship1 = Ship(2);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 4, column: 4};
    const orientation1 = 'H';
    const ship2 = Ship(4);
    const initialPosition2 = { row: 1, column: 5};
    const orientation2 = 'V';
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition2, orientation2);
    expect(isTaken).toBe(false);
});

test('placing ship in available position oldHorizontal NewVertical', () => {
    const ship1 = Ship(2);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 4, column: 4};
    const orientation1 = 'H';
    const ship2 = Ship(4);
    const initialPosition2 = { row: 1, column: 6};
    const orientation2 = 'V';
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition2, orientation2);
    expect(isTaken).toBe(true);
});

test('placing ship in taken position  OldVertical NewHorizontal', () => {
    const ship1 = Ship(2);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 4, column: 4};
    const orientation1 = 'V';
    const ship2 = Ship(4);
    const initialPosition2 = { row: 4, column: 3};
    const orientation2 = 'H';
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition2, orientation2);
    expect(isTaken).toBe(false);
});

test('placing ship in available  OldVertical NewHorizontal', () => {
    const ship1 = Ship(2);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 4, column: 4};
    const orientation1 = 'V';
    const ship2 = Ship(4);
    const initialPosition2 = { row: 1, column: 3};
    const orientation2 = 'H';
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const isTaken = gameBoardHuman.placeShip(ship2, initialPosition2, orientation2);
    expect(isTaken).toBe(true);
});

test('receiving attack with hitting a vertical ship', ()=>{
    const ship1 = Ship(3);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 4, column: 4};
    const orientation1 = 'V';
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const attackedPosition = {row: 4, column: 4}
    gameBoardHuman.receiveAttack(attackedPosition);
    expect(gameBoardHuman.getHit()).toBe(true);
    expect(gameBoardHuman.isOver()).toBe(false);
});

test('receiving attack with hitting a Horizontal ship', ()=>{
    const ship1 = Ship(3);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 4, column: 4};
    const orientation1 = 'H';
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const attackedPosition = {row: 4, column: 6}
    gameBoardHuman.receiveAttack(attackedPosition);
    expect(gameBoardHuman.getHit()).toBe(true);
    expect(gameBoardHuman.isOver()).toBe(false);
});

test('receiving attack without hitting', ()=>{
    const ship1 = Ship(3);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 4, column: 4};
    const orientation1 = 'H';
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const attackedPosition = {row: 0, column: 6}
    gameBoardHuman.receiveAttack(attackedPosition);
    expect(gameBoardHuman.getHit()).toBe(false);
    expect(gameBoardHuman.isOver()).toBe(false);
});

test('checking if the game is over', () => {
    const ship1 = Ship(3);
    const gameBoardHuman = gameBoard();
    const initialPosition1 = { row: 4, column: 4};
    const orientation1 = 'H';
    gameBoardHuman.placeShip(ship1, initialPosition1, orientation1);
    const attackedPosition = {row: 4, column: 6}
    const attackedPosition2 = {row: 4, column: 5}
    const attackedPosition3 = {row: 4, column: 4}
    gameBoardHuman.receiveAttack(attackedPosition);
    gameBoardHuman.receiveAttack(attackedPosition2);
    gameBoardHuman.receiveAttack(attackedPosition3);
    expect(gameBoardHuman.isOver()).toBe(true);
})
