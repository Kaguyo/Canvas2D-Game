class Player {
    constructor(id, name, characters){
        this.id = id;
        this.name = name;
        this.dx = 0;
        this.dy = 0;
        this.characters = characters;
        this.extendMap = 0;
    }
    
    static directionLeft = false;
    static directionRight = true;

    static switchingWeapon = false;

    static drawPlayer(ctx, dx, dy, characters){
        ctx.drawImage(characters[0].characterFrame, dx, dy);
    }

    static updateCharacterFrame(characters){
        if (characters[0].Id == 1){
            characters[0].characterFrame = SeeleAnimation.updateFrame(characters[0]);
        }
        if (characters[0].hasWeapon && !GameProperties.usingUltimate){
            let image = new Image();
            image.src = characters[0].characterFrame.src.split(".png")[0] + "-" + characters[0].Weapon.name + ".png";
            characters[0].characterFrame = image;
        }
        if (Player.switchingWeapon)
            Player.switchingWeapon = false;
    }

    static move(inputKeys, player){
        if (inputKeys.a) {
            player.dx -= player.characters[0].Speed * GameProperties.gameSpeed;
            if (player.dx < 400 && GameProperties.allowExtendMapLeft) {
                player.extendMap = player.dx - 1220;
                player.dx = 400;
            } else if (player.dx < 400 && !GameProperties.allowExtendMapLeft) {
                if (player.dx < 0) {
                    player.dx = 0;
                }
            }
            
            MapScenery.trackPlayer(player);

        } else if (inputKeys.d) {
            player.dx += player.characters[0].Speed * GameProperties.gameSpeed;
            if (player.dx > 1220 && GameProperties.allowExtendMapRight) {
                player.extendMap = player.dx - 1220;
                player.dx = 1220;   
            } else if (player.dx > 1220 && !GameProperties.allowExtendMapRight) {
                if (player.dx > 1620) {
                    player.dx = 1620;
                }
            }

            MapScenery.trackPlayer(player);
        }


    }

    static vfxEffects(ctx, dx, dy, character){
        if (GameProperties.usingUltimate){
            if (character.Id == 1){
                let vfxSparkle = SeeleAnimation.ultimateAnimation.updateVFXSparkles();
                let vfxWing = SeeleAnimation.ultimateAnimation.updateVFXWing();
                ctx.drawImage(vfxSparkle, dx, dy);
                ctx.drawImage(vfxWing, dx, dy);
            }
        }
    }

    handleInput(inputKeys) {
        this.characters[0].action(inputKeys, this);
    }
}