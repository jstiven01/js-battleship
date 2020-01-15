import Player from '../src/js/player';
import Ship from '../src/js/ship';
import GameBoard from '../src/js/gameBoard';

describe('Creating Players and setting ships', () => {
  const arrayShips = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];

  test('Create Player Human', () => {
    const playerHuman = Player('Player Human', 'H', arrayShips);
    expect(playerHuman.name).toBe('Player Human');
    expect(playerHuman.type).toBe('H');
  });

  test('Create Player Computer', () => {
    const playerComputer = Player('Player Computer', 'C', arrayShips);
    expect(playerComputer.name).toBe('Player Computer');
    expect(playerComputer.type).toBe('C');
  });
  test('Player placing Ships', () => {
    const playerHuman = Player('Player Human', 'H', arrayShips);
    const gameBoardH = GameBoard();
    playerHuman.setShips(gameBoardH);
    expect(gameBoardH.isOver()).toBe(false);
  });
});

describe('Attacking ships among players', ()=> {
    const arrayShipsH = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
    const arrayShipsC = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
    let gameBoardH = GameBoard();
    let gameBoardC = GameBoard();
    const playerComputer = Player('Player Computer', 'C', arrayShipsC);
    const playerHuman = Player('Player Human', 'H', arrayShipsH);

    beforeEach(()=> {
        const ship1 = Ship(3);
        const shipPosition1 = { row: 2, column: 4 };
        const orientation1 = 'H';
        gameBoardC.placeShip(ship1, shipPosition1, orientation1);

    })
    



});
