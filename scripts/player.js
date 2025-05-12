class Player {
    constructor(id, name, dx, dy, character){
        this.id = id;
        this.name = name;
        this.dx = dx;
        this.dy = dy;
        this.character = character;
    }

    static generatePlayer(ctx, dx, dy, player){
        let playerFrame;
        if (player.character.Id == 1){
            playerFrame = Seele.getFrame();
            Seele.updateFrame();
        }

        ctx.drawImage(playerFrame, dx, dy);
        
    }
}