class GameProperties {
    static gameSpeed = 1;
    static inputKeys = {
        w : false,
        a : false,
        s : false,
        d : false,
        q : false,
        e : false,
        l : false,
    }
    static allowE = true;
    static allowMovement = true;
    static usingUltimate = false;

    static RestoreInitialState(){
        GameProperties.allowE = true;
        GameProperties.allowMovement = true;
        GameProperties.usingUltimate = false;
    }
}