class Player {
    constructor(id, name, dx, dy, character){
        this.id = id;
        this.name = name;
        this.dx = dx;
        this.dy = dy;
        this.character = character;
    }

    static generatePlayer(ctx, dx, dy, player){
        ctx.drawImage(player.character.Frame, dx, dy);
    }
}