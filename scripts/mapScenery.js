class MapScenery {
    constructor(id, player){
        this.id = id
        this.initialOffsetX = this.initialOffsetX;
        this.initialOffsetY = this.initialOffsetY;
        this.width = this.width;
        this.height = this.height;
        player.dx = this.initialOffsetX;
        player.dy = this.initialOffsetY;
    }
    static allowlog = true;

    static playerTrackedX = 0;
    static playerTrackedY = 0;

    static localizePlayerAndSetOrigin(player) {
        MapScenery.playerTrackedX = player.dx;
        MapScenery.playerTrackedY = player.dy;
    }
    
    static trackPlayer(player) {
        if (player.characte)
        MapScenery.playerTrackedX += player.characters[0].Speed;
        MapScenery.playerTrackedY += player.characters[0].Speed;

        console.log("Map:", MapScenery.playerTrackedX, MapScenery.playerTrackedY)
    }

    static handleMapWithPlayerCoordinates(player, map){
        if (player.dx >= map.width - 300){
            player.dx = map.width - 300;
            player.extendMap = 0;
            GameProperties.allowMapExtendRight = false;
        } else if (player.dx <= 0) {
            player.dx = 0;
            player.extendMap = 0;
            GameProperties.allowMapExtendLeft = false;
        }

        if (MapScenery.playerTrackedX > 1620) {
            GameProperties.allowExtendMapLeft = true;
            GameProperties.allowExtendMapRight = false;
            if (MapScenery.allowlog){
                console.log("Allow Left:", GameProperties.allowExtendMapLeft)
                console.log("Allow Right:", GameProperties.allowExtendMapRight)
                if (MapScenery.allowlog)
                    MapScenery.allowlog = false;
                else if (!MapScenery.allowlog)
                    MapScenery.allowlog = true;
            }
        } else if (MapScenery.playerTrackedX < 400) {
            GameProperties.allowExtendMapRight = true;
            GameProperties.allowExtendMapLeft = false;
            if (MapScenery.allowlog){
                console.log("Allow Left:", GameProperties.allowExtendMapLeft)
                console.log("Allow Right:", GameProperties.allowExtendMapRight)
                if (MapScenery.allowlog)
                    MapScenery.allowlog = false;
                else if (!MapScenery.allowlog)
                    MapScenery.allowlog = true;

            }
        }
    }

    set initialOffsetX(value){ this._initialOffsetX = value };
    get initialOffsetX(){ 
        this._initialOffsetX = 0;

        if (this.id == 1) {
            this._initialOffsetX = 830;
        }

        return this._initialOffsetX;
    }

    set initialOffsetY(value){ this._initialOffsetY = value };
    get initialOffsetY(){ 
        this._initialOffsetY = 0;

        if (this.id == 1) {
            this._initialOffsetY = 600;
        }

        return this._initialOffsetY;
    }

    set width(value){ this._width = value };
    get width(){ 
        this._width = 1920;

        if (this.id == 1) {
            this._width = 8000;
        }

        return this._width;
    }

    set height(value){ this._height = value };
    get height(){ 
        this._height = 1080;

        if (this.id == 1) {
            this._height = 1080;
        }

        return this._height;
    }
}