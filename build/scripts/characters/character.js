import { Attributes } from "./properties/attributes.js";
import { SeeleMoveset } from "./movesets/seeleMoveset.js";
import { CartethyiaMoveset } from "./movesets/cartethyiaMoveset.js";
import { KeqingMoveset } from "./movesets/keqingMoveset.js";
import { GutsMoveset } from "./movesets/gutsMoveset.js";
import { SeeleAnimation } from "./animations/seeleAnimation.js";
import { CartethyiaAnimation } from "./animations/cartethyiaAnimation.js";
import { KeqingAnimation } from "./animations/keqingAnimation.js";
import { GutsAnimation } from "./animations/gutsAnimation.js";
export class Character {
    // public fields region
    attribute;
    moveset;
    animationSet;
    frame;
    constructor(id, level) {
        this.attribute = new Attributes(id, level);
        this.frame = new Image();
        this.moveset = this.#getMoveset(id.toString());
        this.animationSet = this.#getAnimationSet(id.toString());
    }
    // public methods region
    updateFrame(player) {
        return this.frame = this.animationSet.getFrame(player);
    }
    // private methods region
    #getAnimationSet(id) {
        const animationMap = {
            '1': new SeeleAnimation(),
            '2': new KeqingAnimation(),
            '3': new CartethyiaAnimation(),
            '4': new GutsAnimation()
        };
        return animationMap[id];
    }
    #getMoveset(id) {
        const movesetMap = {
            '1': new SeeleMoveset(),
            '2': new KeqingMoveset(),
            '3': new CartethyiaMoveset(),
            '4': new GutsMoveset()
        };
        return movesetMap[id];
    }
}
