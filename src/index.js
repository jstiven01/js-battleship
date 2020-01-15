import './scss/style.scss';
import GameBoard from '../src/js/gameBoard';
import Player from '../src/js/player';
import Ship from '../src/js/ship';
import UI from '../src/js/ui'
import gameBoard from '../src/js/gameBoard';

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

UI.renderInitialBoards(playerHuman, gameBoardH);
UI.renderInitialBoards(playerComputer, gameBoardC);

const buttons = document.querySelectorAll('.button-position-player2');

const playHuman = (event) => {
  if (!gameBoardC.isOver() && playerHuman.getTurn() && !gameBoardH.isOver()) {
    const row = parseInt(event.target.dataset.row, 10);
    const column = parseInt(event.target.dataset.column, 10);
    playerHuman.attackRival(gameBoardC, {row, column});
    if (gameBoardC.getHit()) {
      playerHuman.setTurn(true);
      playerComputer.setTurn(false);
    } else {
      playerHuman.setTurn(false);
      playerComputer.setTurn(true);
    }
  }
}

buttons.forEach(button => button.addEventListener('click', playHuman));