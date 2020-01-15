import './scss/style.scss';
import GameBoard from '../src/js/gameBoard';
import Player from '../src/js/player';
import Ship from '../src/js/ship';

const arrayShipsH = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
const arrayShipsC = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
const gameBoardH = GameBoard();
const gameBoardC = GameBoard();
const playerComputer = Player('Player Computer', 'C', arrayShipsC);
const playerHuman = Player('Player Human', 'H', arrayShipsH);

playerHuman.setTurn(true);
playerComputer.setTurn(false);

playerHuman.setShips(gameBoardH);
playerComputer.setShips(gameBoardC);

