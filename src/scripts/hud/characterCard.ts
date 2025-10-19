const CardIcon1 : HTMLImageElement = new Image();
CardIcon1.src = "../assets/hud/characterContainer/cards/CardIcon.png"

export class CharacterCard {
    static drawCard(ctx: CanvasRenderingContext2D, dx: number, dy: number): void {
        ctx.drawImage(CardIcon1, dx, dy);
    }
}