export default class Game {
    constructor(id: string, screenWidth: number, screenHeight: number) {
        const canvas = document.getElementById(id) as HTMLCanvasElement;
        if (canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d') as unknown as CanvasRenderingContext2D;
            this.screenWidth = screenWidth;
            this.screenHeight = screenHeight;
        }
    }

    canvas!: HTMLCanvasElement;
    ctx!: CanvasRenderingContext2D;
    screenWidth!: number;
    screenHeight!: number;
    render() {
        this.canvas.style.height = `${this.screenHeight}px`;
        this.canvas.style.width = `${this.screenWidth}px`;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
    }
}