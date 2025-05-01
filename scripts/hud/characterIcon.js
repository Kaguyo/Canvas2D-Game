const SeeleIcon1 = new Image();
SeeleIcon1.src = "../../assets/hud/characterContainer/characterIcons/SeeleIcon1.png";

class CharacterIcons {
    static generateCharacterIcon(ctx, dx, dy){
        ctx.drawImage(SeeleIcon1, dx, dy);
    }
    static drawCharacterIconBackground(ctx, dx, dy){
        ctx.drawImage(backgroundIcon1, dx, dy);
    }   
}

const backgroundIcon1 = new Image();
backgroundIcon1.src = "../../assets/hud/characterContainer/backgrounds/BackgroundDarkBlue.png";

const backgroundIcons = [
    backgroundIcon1
];