import './style.css'
import Game from "./app/base/game";
import { IGameConfig } from './app/base/types';
import Player from './app/base/player';
// const app = document.querySelector<HTMLDivElement>('#game-screen')!
const id: string = 'game-screen';
const config: IGameConfig = { id: id, width: 1440, height: 900 };

const player1 = new Player({ position: { x: 10, y: 10 }, velocity: { x: 0, y: 0 }, color: 'red' });
const player2 = new Player({ position: { x: 200, y: 10 }, velocity: { x: 0, y: 0 }, color: 'blue' });
const game = new Game(config);


function animate() {
    const config = { players: [player1, player2], assets: [] }
    game.render(config)
    window.requestAnimationFrame(animate);
}

animate();

window.addEventListener('keydown', (e: KeyboardEvent) => {
    switch (e.key) {
        case 'ArrowLeft':
            player2.velocity.x = -5
            break;
        case 'ArrowRight':
            player2.velocity.x = +5
            break;
        case 'ArrowUp':
            player2.velocity.y = -30
            break;
        case 'ArrowDown':
            player2.block()
            break;

        case 'Shift':
            player2.attack()
            break;
    }



    switch (e.key) {
        case "w":
            player1.velocity.y = -30
            break;

        case "a":
            player1.velocity.x = -5
            break;

        case "d":
            player1.velocity.x = +5
            break;

        case "s":
            player1.block()
            break;

        case "v":
            player1.attack()
            break;


    }
});

window.addEventListener('keyup', (e: KeyboardEvent) => {
    switch (e.key) {
        case 'ArrowLeft':
            player2.velocity.x = 0
            break;

        case 'ArrowRight':
            player2.velocity.x = 0
            break;

        case 'ArrowUp':
            player2.velocity.y = 0
            break;
    }

    switch (e.key) {
        case "a":
            player1.velocity.x = 0
            break;

        case "d":
            player1.velocity.x = 0
            break;

        case "w":
            player1.velocity.y = 0
            break;

        default:
            break;
    }
})
