import Player from "./player";
import { IGameConfig } from "./types";

export default class Game {
    constructor(config: IGameConfig) {
        const { id, height, width } = config;
        const canvas = document.getElementById(id) as HTMLCanvasElement;
        if (canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d') as unknown as CanvasRenderingContext2D;
            this.screenWidth = width;
            this.screenHeight = height;
        }
    }

    canvas!: HTMLCanvasElement;
    ctx!: CanvasRenderingContext2D;
    screenWidth!: number;
    screenHeight!: number;

    render(player1: Player, player2: Player) {
        this.ctx.canvas.height = this.screenHeight;
        this.ctx.canvas.width = this.screenWidth;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
        player1.update(this.ctx);
        player2.update(this.ctx);
    }


}