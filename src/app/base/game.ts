import Player from "./player";
import { IGameConfig, IGameRenderConfig } from "./types";
import { detectedRectangleCollision } from "../utils";

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

    render(gameRenderOption: IGameRenderConfig) {
        const { players, assets } = gameRenderOption;
        this.ctx.canvas.height = this.screenHeight;
        this.ctx.canvas.width = this.screenWidth;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
        if (players.length > 0) {
            players.forEach((player: Player) => player.update(this.ctx))
        }
        if (assets.length > 0) {
            assets.forEach(asset => {
                asset.render(this.ctx)
            });
        }
        const [player1, player2] = players;
        if (detectedRectangleCollision(player1, player2)) {
            if (player1.isAttacking && !player2.isBlocking) {
                player2.decreaseHealth(10);
                player1.isAttacking = false;
            }

        };

        if (detectedRectangleCollision(player2, player1)) {
            if (player2.isAttacking && !player1.isBlocking) {
                player1.decreaseHealth(10);
                player2.isAttacking = false;
            }
        };


    }



}

