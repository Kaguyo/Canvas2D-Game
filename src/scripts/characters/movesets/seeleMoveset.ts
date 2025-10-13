import { SeeleAnimation } from "../animations/seeleAnimation.js";
import { GameProperties } from "../../options/gameProperties.js";
import { Attributes } from "../properties/attributes.js";

export class SeeleMoveset {
    // private fields region
    private animationSet = new SeeleAnimation();
    
    
    constructor(){
        
    }

    // public methods region
    reset(){
        this.animationSet.setAnimation(1);
        GameProperties.allowMovement = true;
        GameProperties.allowBasicAttack = true;
        GameProperties.allowDash = true;
        GameProperties.allowE = true;
        GameProperties.allowUltimate = true;
        GameProperties.usingUltimate = false;
    }

    Run(){
        if (GameProperties.allowMovement){
            this.animationSet.setAnimation(2);
        }
    }
    
    Ultimate(attributes: Attributes){
        if (attributes.energy >= 80 && GameProperties.allowUltimate){
            // this.reset();
            this.animationSet.setAnimation(6);
            attributes.energy -= 80;
            attributes.energy = GameProperties.CeilToZero(attributes.energy);
            GameProperties.usingUltimate = true;
            GameProperties.allowE = false;
            GameProperties.allowMovement = false;
            GameProperties.allowUltimate = false;
            
            let percentage;
            if (attributes.energy <= attributes.energyMax){
                percentage = (100 / (attributes.energyMax / attributes.energy)).toFixed(0).toString() + "%";
            } else {
                percentage = '100%';
            }
        }
    }   

    Dash(){
        if (GameProperties.allowDash){
            
        }
    }

    BasicAttack(){
        if (GameProperties.allowBasicAttack){
            // attack logic
        }
    }

    // private methods region


}