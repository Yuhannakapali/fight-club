import { IPosition, ISpriteConfig } from "./types";

export default class Sprite {
    constructor(config: ISpriteConfig) {
        this.position = config.position;
        this.color = config.color;

    }
    position: IPosition;
    height: number = 150;
    color: string;

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, 50, this.height);
    }


}