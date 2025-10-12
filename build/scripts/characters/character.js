import { Attributes } from "./properties/attributes";
import { SeeleMoveset } from "./movesets/seeleMoveset";
import { CartethyiaMoveset } from "./movesets/cartethyiaMoveset";
import { KeqingMoveset } from "./movesets/keqingMoveset";
import { GutsMoveset } from "./movesets/gutsMoveset";
import { SeeleAnimation } from "./animations/seeleAnimation";
import { CartethyiaAnimation } from "./animations/cartethyiaAnimation";
import { KeqingAnimation } from "./animations/keqingAnimation";
import { GutsAnimation } from "./animations/gutsAnimation";
export class Character {
    // public fields region
    attribute;
    moveset;
    animationSet;
    frame;
    constructor(id, level) {
        this.attribute = new Attributes(id, level);
        this.frame = new HTMLImageElement();
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
            '4': new GutsAnimation(),
        };
        return animationMap[id];
    }
    #getMoveset(id) {
        const movesetMap = {
            '1': new SeeleMoveset(),
            '2': new KeqingMoveset(),
            '3': new CartethyiaMoveset(),
            '4': new GutsMoveset(),
        };
        return movesetMap[id];
    }
}
