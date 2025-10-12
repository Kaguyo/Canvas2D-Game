import { Attributes } from "./properties/attributes";
import { Player } from "../players/player";

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
    attribute: Attributes;
    moveset: any;
    animationSet: any;
    frame: HTMLImageElement;

    constructor(id: number, level: number){
        this.attribute = new Attributes(id, level);
        this.frame = new HTMLImageElement();
        this.moveset = this.#getMoveset(id.toString());
        this.animationSet = this.#getAnimationSet(id.toString());
    }

    // public methods region
    updateFrame(player: Player): void {
        this.frame = this.animationSet.getFrame(player);
    }


    // private methods region
    #getAnimationSet(id : string){
        const animationMap : Record<string, any> = {
            '1' : new SeeleAnimation(),
            '2' : new KeqingAnimation(),
            '3' : new CartethyiaAnimation(),
            '4' : new GutsAnimation(),
        }
        return animationMap[id];
    }

    #getMoveset(id : string){
        const movesetMap : Record<string, any> = {
            '1' : new SeeleMoveset(),
            '2' : new KeqingMoveset(),
            '3' : new CartethyiaMoveset(),
            '4' : new GutsMoveset(),
        }

        return movesetMap[id];
    }
}