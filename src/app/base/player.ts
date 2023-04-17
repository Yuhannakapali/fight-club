import Sprite from "./sprite";
import { IPlayerConfig, IPosition } from "./types";

export default class Player extends Sprite {
    constructor(config: IPlayerConfig) {
        super(config);
        this.velocity = config.velocity;

    }
    private health: number = 100;
    gravity: number = 1;
    velocity!: IPosition
    isBlocking: boolean = false;
    isAttacking: boolean = false;

    get getHealth() {
        return this.health;
    }

    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false
        }, 100)
    }

    decreaseHealth(amount: number) {
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;
        }
    }

    block() {
        this.isBlocking = true;
        setTimeout(() => {
            this.isBlocking = false
        }, 100)
    }

    update(ctx: CanvasRenderingContext2D) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y >= ctx.canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y += this.gravity;
        }
        this.render(ctx, this.isAttacking)

    }
}