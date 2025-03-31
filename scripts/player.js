class Player {
    constructor(x, y, characterObject) {
        this.x = x;
        this.y = y;
        this.character = characterObject;
        this.id = Player.playersInGameArray.length + 1;
    }
    
    static playersInGameArray = [];

    // direction == 1 moves to the left
    // direction == 2 moves to the right
    #moveAxisX(distanceInPixels, direction) {
        Math.floor(distanceInPixels);
        if (direction == 1)
            this.x -= distanceInPixels;
        else
            this.x += distanceInPixels;
    }
    // direction == 1 moves upwards
    // direction == 2 moves downwards
    #moveAxisY(distanceInPixels, direction) {
        Math.floor(distanceInPixels);
        if (direction == 1)
            this.y -= distanceInPixels;
        else
            this.y += distanceInPixels;
    }

    #draw() {

    }
    #update() {

    }


    
}
function createPlayer(characterObject){
    characterObject.AtkBase = 30;
    const player = new Player(400, 630, characterObject);
    Player.playersInGameArray.push(player);
    
    console.log(characterObject)
}