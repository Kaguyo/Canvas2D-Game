class Player {
    constructor(characterObject) {
        this.character = characterObject;
        this.id = Player.playersInGameArray.length + 1;
    }
    static x = 500;
    static y = 630;
    static playersInGameArray = [];

    // direction == 1 moves to the left
    // direction == 2 moves to the right
    static #moveAxisX(distanceInPixels, direction) {
        Math.floor(distanceInPixels);
        if (direction == 1)
            Player.x -= distanceInPixels;
        else
            Player.x += distanceInPixels;
    }
    // direction == 1 moves upwards
    // direction == 2 moves downwards
    static #moveAxisY(distanceInPixels, direction) {
        Math.floor(distanceInPixels);
        if (direction == 1)
            Player.y -= distanceInPixels;
        else
            Player.y += distanceInPixels;
    }

    static draw(player) {
        ctx.drawImage(player.character.CurrentFrameImg, Player.x, Player.y);
    }
    static update(player) {
        if (player.character.Id == 1) 
            player.character.CurrentFrameImg = Seele.GetCurrentFrame();
        else if (player.character.Id == 2) 
            player.character.CurrentFrameImg = Keqing.GetCurrentFrame();
        else if (player.character.Id == 3) 
            player.character.CurrentFrameImg = Gohan.GetCurrentFrame();
    }

    static handleInput(inputKeys, player) {
        if (inputKeys.a) {
            Player.#moveAxisX(player.character.Speed, 1)
        } else if (inputKeys.d) {
            Player.#moveAxisX(player.character.Speed, 2)
        }
    }
    
}
function createPlayer(characterObject){
    const player = new Player(characterObject);
    Player.playersInGameArray.push(player);

    return player;
}