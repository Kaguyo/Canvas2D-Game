import { SpBarManager } from "../hud/spBarManager.js";
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
    // private fields region
    static _usingMovement;
    static _usingUltimate;
    static _allowIdle;
    static _allowUltimate;
    // public fields region
    static get allowIdle() {
        GameProperties._allowIdle = true;
        if (GameProperties.usingIActionArray.includes(true)) {
            GameProperties._allowIdle = false;
        }
        return GameProperties._allowIdle;
    }
    static get allowUltimate() {
        GameProperties._allowUltimate = true;
        if (GameProperties.usingUltimate) {
            GameProperties._allowUltimate = false;
        }
        return GameProperties._allowUltimate;
    }
    static allowE = true;
    static allowMovement = true;
    static allowExtendMapRight = true;
    static allowExtendMapLeft = false;
    static allowDash = true;
    static allowBasicAttack = true;
    static allowSwitchCharacter = true;
    static get usingUltimate() {
        return this._usingUltimate;
    }
    static set usingUltimate(value) {
        this.usingIActionArray[0] = value;
        this._usingUltimate = value;
    }
    ;
    static get usingMovement() {
        return this._usingMovement;
    }
    static set usingMovement(value) {
        this.usingIActionArray[1] = value;
        this._usingMovement = value;
    }
    ;
    static usingIActionArray = [GameProperties.usingUltimate, GameProperties.usingMovement];
    static switchingCharacter = false;
    // public methods region
    static ceilToZero(value) {
        if (value < 0) {
            value = 0;
        }
        return value;
    }
    static handleEnergy(characterEnergy, characterEnergyModifier) {
        return characterEnergy += characterEnergyModifier;
    }
    static setInitialEnergy(anything) {
        let percentage = ((anything.characterEnergy / anything.characterMaxEnergy) * 100) + "%";
        SpBarManager.setEnergyBar(percentage);
        return anything.characterEnergy;
    }
}
