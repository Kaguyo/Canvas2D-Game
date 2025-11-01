export class GameProperties {

    static ctx1 : CanvasRenderingContext2D;
    static ctx2 : CanvasRenderingContext2D;

    // public fields region
    static gameSpeed = 1;

    static inputKeys : Record<string, boolean> = {
        '1': false,
        '2': false,
        '3': false,
        'w' : false,
        'a' : false,
        's' : false,
        'd' : false,
        'q' : false,
        'e' : false,
        'l' : false,
    }

    private static _allowIdle: boolean;
    
    static set allowIdle(value: boolean) {
        GameProperties._allowIdle = value;
    }
    static get allowIdle(): boolean {
        GameProperties._allowIdle = true;

        if (GameProperties.usingIActionArray.includes(true)) {
            GameProperties._allowIdle = false;
        }

        return GameProperties._allowIdle;
    }

    static allowE = true;
    static allowMovement = true;
    static allowUltimate = true;
    static allowExtendMapRight = true;
    static allowExtendMapLeft = false;
    static allowDash = true;
    static allowBasicAttack = true;
    static allowSwitchCharacter = true;

    static usingUltimate = false;
    static usingMovement = false;
    static usingIActionArray: boolean[] = [GameProperties.usingUltimate, GameProperties.usingMovement];

    static switchingCharacter = false;

    // public methods region
    static CeilToZero(value : number){
        if (value < 0){
            value = 0;
        }

        return value;
    }
}