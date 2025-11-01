const SeeleIcon1: HTMLImageElement = new Image();
SeeleIcon1.src = "../assets/hud/characterContainer/characterIcons/SeeleIcon1.png";
const Strognoff: HTMLImageElement = new Image();
Strognoff.src = "../assets/hud/characterContainer/characterIcons/10295934.jpg";

export class CharacterIcons {
    static generateCharacterIcon(ctx: CanvasRenderingContext2D, dx: number, dy: number): void {
        ctx.drawImage(SeeleIcon1, dx, dy);
    }
    static drawCharacterIconBackground(ctx: CanvasRenderingContext2D, dx: number, dy: number): void {
        ctx.drawImage(backgroundIcon1, dx, dy);
    }   
}

const backgroundIcon1: HTMLImageElement = new Image();
backgroundIcon1.src = "../assets/hud/characterContainer/backgrounds/BackgroundDarkBlue.png";

const backgroundIcons = [
    backgroundIcon1
];