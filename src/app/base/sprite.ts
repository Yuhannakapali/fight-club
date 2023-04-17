import { IAttackBox, IPosition, ISpriteConfig } from "./types";

export default class Sprite {
    constructor(config: ISpriteConfig) {
        this.position = config.position;
        this.color = config.color;
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            height: 50,
            width: 100
        }
    }
    position: IPosition;
    height: number = 150;
    width: number = 50;
    color: string;
    private attackBox: IAttackBox

    render(ctx: CanvasRenderingContext2D, isAttacking: boolean = false) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.attackBox.position.x = this.position.x;
        this.attackBox.position.y = this.position.y;
        if (isAttacking) {
            ctx.fillStyle = 'white';
            ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);
        }
    }

    get getAttackBox() {
        return this.attackBox;
    }


}