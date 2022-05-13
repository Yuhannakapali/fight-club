import './style.css'
import Game from "./app/base/game";
// const app = document.querySelector<HTMLDivElement>('#game-screen')!
const id: string = 'game-screen';

const game = new Game(id, 1440, 900);
game.render()