import './scss/style.scss';
import GameBoard from './js/gameBoard';
import Player from './js/player';
import Ship from './js/ship';
import UI from './js/ui';

const arrayShipsH = [Ship(2)];
const arrayShipsC = [Ship(2)];
// const arrayShipsC = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
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
console.log(gameBoardC.getBoard());
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
      UI.renderMessage(playerHuman);
    } else {
      playerHuman.setTurn(false);
      playerComputer.setTurn(true);
      UI.disablePlayer();
      UI.renderMessage(playerComputer);
      sectionPlayer1.dispatchEvent(eventComputer);
    }
  } else if (gameBoardC.isOver()) {
    UI.renderMessage(playerHuman, gameBoardC)
  } else if (gameBoardH.isOver()) {
    UI.renderMessage(playComputer, gameBoardH)
  }
};

const playComputer = (event) => {
  console.log('this is PC', event);
  if (!gameBoardC.isOver() && playerComputer.getTurn() && !gameBoardH.isOver()) {
    playerComputer.attackRival(gameBoardH);
    UI.renderAttack(playerHuman, gameBoardH);
    if (gameBoardH.getHit()) {
      playerHuman.setTurn(false);
      playerComputer.setTurn(true);
      UI.renderMessage(playerComputer);
      setTimeout(() => {
        sectionPlayer1.dispatchEvent(eventComputer);
      }, 2000);
    } else {
      setTimeout(UI.disablePlayer, 2000);
      playerHuman.setTurn(true);
      playerComputer.setTurn(false);
      UI.renderMessage(playerHuman);
    }
  } else if (gameBoardC.isOver()) {
    UI.renderMessage(playerHuman, gameBoardC)
  } else if (gameBoardH.isOver()) {
    UI.renderMessage(playComputer, gameBoardH)
  }
};

buttons.forEach((button) => button.addEventListener('click', playHuman));
sectionPlayer1.addEventListener('EventComputer', playComputer);