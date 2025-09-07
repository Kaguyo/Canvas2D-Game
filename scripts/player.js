class Player {
    constructor(id, name, dx, dy, characters){
        this.id = id;
        this.name = name;
        this.dx = dx;
        this.dy = dy;
        this.characters = characters;
    }

    static drawPlayer(ctx, dx, dy, characters){
        ctx.drawImage(characters[0].characterFrame, dx, dy);
    }
    static updateCharacterFrame(characters){
        if (characters[0].Id == 1){
            characters[0].characterFrame = SeeleAnimation.updateFrame(characters[0]);
        }
    }
    static move(inputKeys, player){
        if (inputKeys.a) {
            player.dx -= player.characters[0].Speed * Game.gameSpeed;
            if (player.dx < 0) player.dx = 0;
        } else if (inputKeys.d) {
            player.dx += player.characters[0].Speed * Game.gameSpeed;
            if (player.dx > 1920 - 300) player.dx = 1920 - 300;
        }
    }

    handleInput(inputKeys) {
        this.characters[0].action(inputKeys, this);
    }
}