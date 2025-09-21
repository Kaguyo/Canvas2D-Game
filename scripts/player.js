class Player {
    constructor(id, name, dx, dy, characters){
        this.id = id;
        this.name = name;
        this.dx = dx;
        this.dy = dy;
        this.characters = characters;
    }

    static switchingWeapon = false;

    static drawPlayer(ctx, dx, dy, characters){
        ctx.drawImage(characters[0].characterFrame, dx, dy);
    }
    static updateCharacterFrame(characters){
        if (characters[0].Id == 1){
            characters[0].characterFrame = SeeleAnimation.updateFrame(characters[0]);
        }
        if (characters[0].hasWeapon){
            let image = new Image();
            image.src = characters[0].characterFrame.src.split(".png")[0] + "-" + characters[0].Weapon.name + ".png";
            characters[0].characterFrame = image;
        }
        if (Player.switchingWeapon){
            Player.switchingWeapon = false;
        }
    }
    static move(inputKeys, player){
        if (inputKeys.a) {
            player.dx -= player.characters[0].Speed * GameProperties.gameSpeed;
            if (player.dx < 0) player.dx = 0;
        } else if (inputKeys.d) {
            player.dx += player.characters[0].Speed * GameProperties.gameSpeed;
            if (player.dx > 1920 - 300) player.dx = 1920 - 300;
        }
    }

    handleInput(inputKeys) {
        this.characters[0].action(inputKeys, this);
    }
}