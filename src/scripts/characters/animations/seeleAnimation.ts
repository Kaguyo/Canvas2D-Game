import { GameProperties } from "../../options/gameProperties.js";
import { Player } from "../../players/player.js";
import { Character } from "../character.js";

// Seele Images
const seeleIdleImg1: HTMLImageElement = new Image();
seeleIdleImg1.src = "../../assets/models/characters/Seele/SeeleIdle1.png";
const seeleIdleImg2: HTMLImageElement = new Image();
seeleIdleImg2.src = "../../assets/models/characters/Seele/SeeleIdle2.png";
const seeleIdleImg3: HTMLImageElement = new Image();
seeleIdleImg3.src = "../../assets/models/characters/Seele/SeeleIdle3.png";
const seeleIdleImg4: HTMLImageElement = new Image();
seeleIdleImg4.src = "../../assets/models/characters/Seele/SeeleIdle4.png";

const seeleIdleImg1Reversed: HTMLImageElement = new Image();
seeleIdleImg1Reversed.src = "../../assets/models/characters/Seele/SeeleIdle1Reversed.png";
const seeleIdleImg2Reversed: HTMLImageElement = new Image();
seeleIdleImg2Reversed.src = "../../assets/models/characters/Seele/SeeleIdle2Reversed.png";
const seeleIdleImg3Reversed: HTMLImageElement = new Image();
seeleIdleImg3Reversed.src = "../../assets/models/characters/Seele/SeeleIdle3Reversed.png";
const seeleIdleImg4Reversed: HTMLImageElement = new Image();
seeleIdleImg4Reversed.src = "../../assets/models/characters/Seele/SeeleIdle4Reversed.png";

const seeleRunImg1: HTMLImageElement = new Image();
seeleRunImg1.src = "../../assets/models/characters/Seele/SeeleRun1.png";
const seeleRunImg2: HTMLImageElement = new Image();
seeleRunImg2.src = "../../assets/models/characters/Seele/SeeleRun2.png";
const seeleRunImg3: HTMLImageElement = new Image();
seeleRunImg3.src = "../../assets/models/characters/Seele/SeeleRun3.png";
const seeleRunImg4: HTMLImageElement = new Image();
seeleRunImg4.src = "../../assets/models/characters/Seele/SeeleRun4.png";

const seeleRunImg1Reversed: HTMLImageElement = new Image();
seeleRunImg1Reversed.src = "../../assets/models/characters/Seele/SeeleRun1Reversed.png";
const seeleRunImg2Reversed: HTMLImageElement = new Image();
seeleRunImg2Reversed.src = "../../assets/models/characters/Seele/SeeleRun2Reversed.png";
const seeleRunImg3Reversed: HTMLImageElement = new Image();
seeleRunImg3Reversed.src = "../../assets/models/characters/Seele/SeeleRun3Reversed.png";
const seeleRunImg4Reversed: HTMLImageElement = new Image();
seeleRunImg4Reversed.src = "../../assets/models/characters/Seele/SeeleRun4Reversed.png";

const seeleIdleArmedImg1: HTMLImageElement = new Image();
seeleIdleArmedImg1.src = "../../assets/models/characters/Seele/SeeleIdleArmed1.png";
const seeleIdleArmedImg1Reversed: HTMLImageElement = new Image();
seeleIdleArmedImg1Reversed.src = "../../assets/models/characters/Seele/SeeleIdleArmed1Reversed.png";

const seeleActivatingUltDash1: HTMLImageElement = new Image();
seeleActivatingUltDash1.src = "../../assets/models/characters/Seele/ActivatingUltDash1.png";
const seeleActivatingUltDash2: HTMLImageElement = new Image();
seeleActivatingUltDash2.src = "../../assets/models/characters/Seele/ActivatingUltDash2.png";

const seeleActivatingUltDash1Reversed: HTMLImageElement = new Image();
seeleActivatingUltDash1Reversed.src = "../../assets/models/characters/Seele/ActivatingUltDash1Reversed.png";
const seeleActivatingUltDash2Reversed: HTMLImageElement = new Image();
seeleActivatingUltDash2Reversed.src = "../../assets/models/characters/Seele/ActivatingUltDash2Reversed.png";

const seeleUltEffect1: HTMLImageElement = new Image();
seeleUltEffect1.src = "../../assets/models/characters/Seele/UltEffect1.png";
const seeleUltEffect2: HTMLImageElement = new Image();
seeleUltEffect2.src = "../../assets/models/characters/Seele/UltEffect2.png";

const seeleUltEffect1Reversed: HTMLImageElement = new Image();
seeleUltEffect1Reversed.src = "../../assets/models/characters/Seele/UltEffect1Reversed.png";
const seeleUltEffect2Reversed: HTMLImageElement = new Image();
seeleUltEffect2Reversed.src = "../../assets/models/characters/Seele/UltEffect2Reversed.png";

const seeleUltWing1: HTMLImageElement = new Image();
seeleUltWing1.src = "../../assets/models/characters/Seele/UltWing1.png";
const seeleUltWing2: HTMLImageElement = new Image();
seeleUltWing2.src = "../../assets/models/characters/Seele/UltWing2.png";
const seeleUltWing3: HTMLImageElement = new Image();
seeleUltWing3.src = "../../assets/models/characters/Seele/UltWing3.png";
const seeleUltWing4: HTMLImageElement = new Image();
seeleUltWing4.src = "../../assets/models/characters/Seele/UltWing4.png";
const seeleUltWing5: HTMLImageElement = new Image();
seeleUltWing5.src = "../../assets/models/characters/Seele/UltWing5.png";
const seeleUltWing6: HTMLImageElement = new Image();
seeleUltWing6.src = "../../assets/models/characters/Seele/UltWing6.png";
const seeleUltWing7: HTMLImageElement = new Image();
seeleUltWing7.src = "../../assets/models/characters/Seele/UltWing7.png";
const seeleUltWing8: HTMLImageElement = new Image();
seeleUltWing8.src = "../../assets/models/characters/Seele/UltWing8.png";
const seeleUltWing9: HTMLImageElement = new Image();
seeleUltWing9.src = "../../assets/models/characters/Seele/UltWing9.png";
const seeleUltWing10: HTMLImageElement = new Image();
seeleUltWing10.src = "../../assets/models/characters/Seele/UltWing10.png";
const seeleUltWing11: HTMLImageElement = new Image();
seeleUltWing11.src = "../../assets/models/characters/Seele/UltWing11.png";
const seeleUltWing12: HTMLImageElement = new Image();
seeleUltWing12.src = "../../assets/models/characters/Seele/UltWing12.png";

const seeleUltWing1Reversed: HTMLImageElement = new Image();
seeleUltWing1Reversed.src = "../../assets/models/characters/Seele/UltWing1Reversed.png";
const seeleUltWing2Reversed: HTMLImageElement = new Image();
seeleUltWing2Reversed.src = "../../assets/models/characters/Seele/UltWing2Reversed.png";
const seeleUltWing3Reversed: HTMLImageElement = new Image();
seeleUltWing3Reversed.src = "../../assets/models/characters/Seele/UltWing3Reversed.png";
const seeleUltWing4Reversed: HTMLImageElement = new Image();
seeleUltWing4Reversed.src = "../../assets/models/characters/Seele/UltWing4Reversed.png";
const seeleUltWing5Reversed: HTMLImageElement = new Image();
seeleUltWing5Reversed.src = "../../assets/models/characters/Seele/UltWing5Reversed.png";
const seeleUltWing6Reversed: HTMLImageElement = new Image();
seeleUltWing6Reversed.src = "../../assets/models/characters/Seele/UltWing6Reversed.png";
const seeleUltWing7Reversed: HTMLImageElement = new Image();
seeleUltWing7Reversed.src = "../../assets/models/characters/Seele/UltWing7Reversed.png";
const seeleUltWing8Reversed: HTMLImageElement = new Image();
seeleUltWing8Reversed.src = "../../assets/models/characters/Seele/UltWing8Reversed.png";
const seeleUltWing9Reversed: HTMLImageElement = new Image();
seeleUltWing9Reversed.src = "../../assets/models/characters/Seele/UltWing9Reversed.png";
const seeleUltWing10Reversed: HTMLImageElement = new Image();
seeleUltWing10Reversed.src = "../../assets/models/characters/Seele/UltWing10Reversed.png";
const seeleUltWing11Reversed: HTMLImageElement = new Image();
seeleUltWing11Reversed.src = "../../assets/models/characters/Seele/UltWing11Reversed.png";
const seeleUltWing12Reversed: HTMLImageElement = new Image();
seeleUltWing12Reversed.src = "../../assets/models/characters/Seele/UltWing12Reversed.png";

export class SeeleAnimation {
    // private fields region
    private frame: HTMLImageElement = new Image();
    private animationNumber: number = 1; // 1: idle, 2: running, 3: jumping, 4: crouch, 5: dash, 6: ultimate
    
    // public fields region    
    

    idleAnimation = {
        reverseIndex : 0,
        breatheIn : true,
        breatheOut : false,
        index : 1,
        countIndexRepeated : 0
    };

    idleArmedAnimation = {
        reverseIndex : 0,
        breatheIn : true,
        breatheOut : false,
        index : 1,
        countIndexRepeated : 0
    }

    runningAnimation = {
        index : 1,
        countIndexRepeated : 0
    };
    
    runningArmedAnimation = {
        index : 1,
        countIndexRepeated : 0
    };

    ultimateAnimation = {
        index : 1,
        countIndexRepeated : 0,
        vfxSparkle : {
            image : new Image(),
            index : 1,
            countIndexRepeated : 0
        },
        vfxWing : {
            image : new Image(),
            index : 1,
            countIndexRepeated : 0
        },

        updateVFXSparkles : function(){
            let frame = new Image();

            if (this.vfxSparkle.index == 1) {
                this.vfxSparkle.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxSparkle.countIndexRepeated >= 15){
                    this.vfxSparkle.countIndexRepeated = 0;
                    this.vfxSparkle.index = 2;
                }
                frame = directionRight ? seeleUltEffect1 : seeleUltEffect1Reversed;
            } else if (this.vfxSparkle.index == 2) {
                this.vfxSparkle.countIndexRepeated += 1 * GameProperties.gameSpeed;
                if (this.vfxSparkle.countIndexRepeated >= 15){
                    this.vfxSparkle.countIndexRepeated = 0;
                    this.vfxSparkle.index = 1;
                }
                frame = Player.directionRight ? seeleUltEffect2 : seeleUltEffect2Reversed;
            }

            return frame;
        },
        updateVFXWings : function(){
            let frame = new Image();
        
        }
    }

    // public methods region
    getFrame(player: Player): HTMLImageElement {
        let frame = new Image();
        if (player.activeCharacter.attribute.equipedWeapon){
            if (this.animationNumber == 1){ // idle armed
                if (this.idleArmedAnimation.breatheIn){
                    this.idleArmedAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
                }
            } else if (this.animationNumber == 2){ // running armed
                this.runningArmedAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
            }
        } else {
            if (this.animationNumber == 1){ // idle
                if (this.idleAnimation.breatheIn){
                    this.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
                    if (this.idleAnimation.countIndexRepeated >= 15){
                        this.idleAnimation.countIndexRepeated = 0;
                        this.idleAnimation.index += 1;
                    }
                }

                
            }
        }

        return frame;
    }

    setAnimation(number : number): void {
        this.animationNumber = number;
    }
}