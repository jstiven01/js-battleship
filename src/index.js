import './scss/style.scss';
import GameBoard from './js/gameBoard';
import Player from './js/player';
import Ship from './js/ship';
import UI from './js/ui';

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
const eventComputer = new Event('EventComputer');
const sectionPlayer1 = document.getElementById('section-player-1');

const playHuman = (event) => {
  if (!gameBoardC.isOver() && playerHuman.getTurn() && !gameBoardH.isOver()) {
    const row = parseInt(event.target.dataset.row, 10);
    const column = parseInt(event.target.dataset.column, 10);
    playerHuman.attackRival(gameBoardC, { row, column });
    UI.renderAttack(playerComputer, gameBoardC, { row, column }, event);
    if (gameBoardC.getHit()) {
      playerHuman.setTurn(true);
      playerComputer.setTurn(false);
      UI.renderMessage(playerHuman, gameBoardC);
    } else {
      playerHuman.setTurn(false);
      playerComputer.setTurn(true);
      UI.disablePlayer();
      UI.renderMessage(playerComputer, gameBoardH);
      setTimeout(() => {
        sectionPlayer1.dispatchEvent(eventComputer);
      }, 1000);
    }
  }
};

const playComputer = () => {
  if (!gameBoardC.isOver() && playerComputer.getTurn() && !gameBoardH.isOver()) {
    playerComputer.attackRival(gameBoardH);
    UI.renderAttack(playerHuman, gameBoardH);
    if (gameBoardH.getHit()) {
      playerHuman.setTurn(false);
      playerComputer.setTurn(true);
      UI.renderMessage(playerComputer, gameBoardH);
      setTimeout(() => {
        sectionPlayer1.dispatchEvent(eventComputer);
      }, 1000);
    } else {
      setTimeout(() => {
        UI.disablePlayer();
        UI.renderMessage(playerHuman, gameBoardC);
      }, 1000);
      playerHuman.setTurn(true);
      playerComputer.setTurn(false);
    }
  }
};

buttons.forEach(button => button.addEventListener('click', playHuman));
sectionPlayer1.addEventListener('EventComputer', playComputer);