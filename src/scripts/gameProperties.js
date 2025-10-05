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
    static allowUltimate = true;
    static allowExtendMapRight = true;
    static allowExtendMapLeft = false;

    static RestoreInitialState(){
        GameProperties.allowUltimate = true;
        GameProperties.allowE = true;
        GameProperties.allowMovement = true;
        GameProperties.usingUltimate = false;
    }

    static TreatNegativeValue(numericValue){
        if (numericValue < 0){
            numericValue = 0;
        }

        return numericValue;
    }
}