import { ctx2 } from "../main";
import { GameProperties } from "../options/gameProperties";
// Stage1 Images Stage 1
const stageImage1 = new Image();
stageImage1.src = "../assets/layers/11lay2.png";
const stageImage2 = new Image();
stageImage2.src = "../assets/layers/22lay2.png";
const stageImage3 = new Image();
stageImage3.src = "../assets/layers/33lay2.png";
const stageImage4 = new Image();
stageImage4.src = "../assets/layers/44lay2.png";
// Stage1 Images Stage 1 Reversed Horizontally
const stageImage5 = new Image();
stageImage5.src = "../assets/layers/11layReversed2.png";
const stageImage6 = new Image();
stageImage6.src = "../assets/layers/22layReversed2.png";
const stageImage7 = new Image();
stageImage7.src = "../assets/layers/33layReversed2.png";
const stageImage8 = new Image();
stageImage8.src = "../assets/layers/44layReversed2.png";
export class Stage1 {
    // public fields region
    id;
    x;
    width;
    speedModifier;
    image;
    reversed;
    // static public fields region
    static Stage1InstancesArray = [];
    constructor(image, speedModifier, reversed, x) {
        this.id = Stage1.Stage1InstancesArray.length + 1;
        this.x = x;
        this.width = 1920;
        this.speedModifier = speedModifier;
        this.image = image;
        this.reversed = reversed;
        Stage1.Stage1InstancesArray.push(this);
    }
    // private methods region
    #draw() {
        ctx2.drawImage(this.image, this.x, 0);
    }
    #update(player) {
        if (this.x < -1920) {
            let difference = this.x + 1920;
            this.x = 1920 + difference;
        }
        Stage1.Stage1InstancesArray.forEach((instancedObject) => {
            if (player.extendMap > 0 && GameProperties.allowExtendMapRight) {
                instancedObject.x -= (player.extendMap * instancedObject.speedModifier);
            }
        });
        player.extendMap = 0;
    }
    // public methods region
    static generateStage1(player) {
        Stage1.Stage1InstancesArray.forEach((instancedObject) => {
            instancedObject.#update(player);
            instancedObject.#draw();
        });
    }
}
// instances pushed in static array from constructor
const stage1ImageObject1 = new Stage1(stageImage1, 0.2, false, 0);
const stage1ImageObject1Reversed = new Stage1(stageImage5, 0.2, true, 1920);
const stage1ImageObject2 = new Stage1(stageImage2, 0.4, false, 0);
const stage1ImageObject2Reversed = new Stage1(stageImage6, 0.4, true, 1920);
const stage1ImageObject3 = new Stage1(stageImage3, 0.6, false, 0);
const stage1ImageObject3Reversed = new Stage1(stageImage7, 0.6, true, 1920);
const stage1ImageObject4 = new Stage1(stageImage4, 0.8, false, 0);
const stage1ImageObject4Reversed = new Stage1(stageImage8, 0.8, true, 1920);
