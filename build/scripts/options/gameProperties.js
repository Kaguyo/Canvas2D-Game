export class GameProperties {
    static ctx1;
    static ctx2;
    // public fields region
    static gameSpeed = 1;
    static inputKeys = {
        '1': false,
        '2': false,
        '3': false,
        'w': false,
        'a': false,
        's': false,
        'd': false,
        'q': false,
        'e': false,
        'l': false,
    };
    static allowE = true;
    static allowMovement = true;
    static usingUltimate = false;
    static allowUltimate = true;
    static allowExtendMapRight = true;
    static allowExtendMapLeft = false;
    static allowDash = true;
    static allowBasicAttack = true;
    static allowSwitchCharacter = true;
    static switchingCharacter = false;
    // public methods region
    static CeilToZero(value) {
        if (value < 0) {
            value = 0;
        }
        return value;
    }
}
