import { GameProperties } from "../../options/gameProperties.js";
export class SeeleMoveset {
    constructor() {
    }
    // public methods region
    reset(player) {
        player.activeCharacter.animationSet.setAnimation(1);
        GameProperties.allowMovement = true;
        GameProperties.allowBasicAttack = true;
        GameProperties.allowDash = true;
        GameProperties.allowE = true;
        GameProperties.usingUltimate = false;
    }
    Run(player) {
        if (GameProperties.allowMovement) {
            player.activeCharacter.animationSet.setAnimation(2);
        }
    }
    Ultimate(player) {
        if (player.activeCharacter.attribute.energy >= 80 && GameProperties.allowUltimate) {
            console.log("roça nos amigo da boca");
            player.activeCharacter.animationSet.setAnimation(6);
            player.activeCharacter.attribute.energy -= 80;
            player.activeCharacter.attribute.energy = GameProperties.CeilToZero(player.activeCharacter.attribute.energy);
            GameProperties.usingUltimate = true;
            GameProperties.allowE = false;
            GameProperties.allowMovement = false;
            let percentage;
            if (player.activeCharacter.attribute.energy <= player.activeCharacter.attribute.energyMax) {
                percentage = (100 / (player.activeCharacter.attribute.energyMax / player.activeCharacter.attribute.energy)).toFixed(0).toString() + "%";
            }
            else {
                percentage = '100%';
            }
        }
    }
    Dash() {
        if (GameProperties.allowDash) {
        }
    }
    BasicAttack() {
        if (GameProperties.allowBasicAttack) {
            // attack logic
        }
    }
}
