const CardIcon1 = new Image();
CardIcon1.src = "../assets/hud/characterContainer/cards/CardIcon.png";
export class CharacterCard {
    static drawCard(ctx, dx, dy) {
        ctx.drawImage(CardIcon1, dx, dy);
    }
}
