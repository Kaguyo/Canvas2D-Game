const seeleIdleImg1 = new Image();
seeleIdleImg1.src = "../../assets/models/characters/Seele/SeeleIdle1.png";
const seeleIdleImg2 = new Image();
seeleIdleImg2.src = "../../assets/models/characters/Seele/SeeleIdle2.png";
const seeleIdleImg3 = new Image();
seeleIdleImg3.src = "../../assets/models/characters/Seele/SeeleIdle3.png";
const seeleIdleImg4 = new Image();
seeleIdleImg4.src = "../../assets/models/characters/Seele/SeeleIdle4.png";

const seeleIdleImg1Reversed = new Image();
seeleIdleImg1Reversed.src = "../../assets/models/characters/Seele/SeeleIdle1Reversed.png";
const seeleIdleImg2Reversed = new Image();
seeleIdleImg2Reversed.src = "../../assets/models/characters/Seele/SeeleIdle2Reversed.png";
const seeleIdleImg3Reversed = new Image();
seeleIdleImg3Reversed.src = "../../assets/models/characters/Seele/SeeleIdle3Reversed.png";
const seeleIdleImg4Reversed = new Image();
seeleIdleImg4Reversed.src = "../../assets/models/characters/Seele/SeeleIdle4Reversed.png";

const seeleRunImg1 = new Image();
seeleRunImg1.src = "../../assets/models/characters/Seele/SeeleRun1.png";
const seeleRunImg2 = new Image();
seeleRunImg2.src = "../../assets/models/characters/Seele/SeeleRun2.png";
const seeleRunImg3 = new Image();
seeleRunImg3.src = "../../assets/models/characters/Seele/SeeleRun3.png";
const seeleRunImg4 = new Image();
seeleRunImg4.src = "../../assets/models/characters/Seele/SeeleRun4.png";

const seeleRunImg1Reversed = new Image();
seeleRunImg1Reversed.src = "../../assets/models/characters/Seele/SeeleRun1Reversed.png";
const seeleRunImg2Reversed = new Image();
seeleRunImg2Reversed.src = "../../assets/models/characters/Seele/SeeleRun2Reversed.png";
const seeleRunImg3Reversed = new Image();
seeleRunImg3Reversed.src = "../../assets/models/characters/Seele/SeeleRun3Reversed.png";
const seeleRunImg4Reversed = new Image();
seeleRunImg4Reversed.src = "../../assets/models/characters/Seele/SeeleRun4Reversed.png";


class Seele {
    static frame = new Image();

    static directionLeft = false;
    static directionRight = true;

    static idleAnimation = {
        reverseIndex : 0,
        breatheIn : true,
        breatheOut : false,
        index : 1,
        countIndexRepeated : 0
    };

    static runningAnimation = {
        index : 1,
        countIndexRepeated : 0
    };

    static animation = 1; // 1: idle, 2: running, 3: jumping, 4: crouch, 5: dash
    
    static getFrame(){
        return Seele.frame;
    }

    static updateFrame(){
        Seele.#handleInput();
        if (Seele.animation == 1) {
            Seele.frame = Seele.#handleIdleAnimation();

        } else if (Seele.animation == 2) {
            Seele.frame = Seele.#handleRunningAnimation();
        }

    }

    static #handleInput(){
        if (Game.inputKeys.a) {
            Seele.directionLeft = true;
            Seele.directionRight = false;
        }
        else if (Game.inputKeys.d) {
            Seele.directionRight = true;
            Seele.directionLeft = false;
        }
        Seele.#setAnimation();
    }
    
    static #setAnimation() {
        if (Game.inputKeys.a || Game.inputKeys.d)
            Seele.animation = 2;
        else if (Game.inputKeys.w)
            Seele.animation = 3;
        else if (Game.inputKeys.s)
            Seele.animation = 4;
        else if (Game.inputKeys.l)
            Seele.animation = 5;
        else
            Seele.animation = 1;
    }

    static #handleIdleAnimation() {
        let frame = new Image();
        if (Seele.idleAnimation.index == 1) {
            Seele.idleAnimation.countIndexRepeated += 1 * Game.gameSpeed;
            if (Seele.idleAnimation.countIndexRepeated >= 10){
                if (Seele.idleAnimation.breatheIn == true)
                    Seele.idleAnimation.reverseIndex = 0;
                Seele.idleAnimation.countIndexRepeated = 0;
                Seele.idleAnimation.index = 2 + Seele.idleAnimation.reverseIndex;
                Seele.idleAnimation.breatheIn = true;
                Seele.idleAnimation.breatheOut = false;
            }
            frame = Seele.directionRight ? seeleIdleImg1 : seeleIdleImg1Reversed;

        } else if (Seele.idleAnimation.index == 2) {
            Seele.idleAnimation.countIndexRepeated += 1 * Game.gameSpeed;
            if (Seele.idleAnimation.countIndexRepeated >= 10){
                Seele.idleAnimation.countIndexRepeated = 0;
                Seele.idleAnimation.index = 3 + Seele.idleAnimation.reverseIndex; 
                if (Seele.idleAnimation.breatheIn == false)
                    Seele.idleAnimation.reverseIndex = -1;
            }
            frame = Seele.directionRight ? seeleIdleImg2 : seeleIdleImg2Reversed;

        } else if (Seele.idleAnimation.index == 3) {
            Seele.idleAnimation.countIndexRepeated += 1 * Game.gameSpeed;
            if (Seele.idleAnimation.countIndexRepeated >= 10){
                if (Seele.idleAnimation.breatheIn == false)
                    Seele.idleAnimation.reverseIndex = -2;
                Seele.idleAnimation.countIndexRepeated = 0;
                Seele.idleAnimation.index = 4 + Seele.idleAnimation.reverseIndex; 
            }
            frame = Seele.directionRight ? seeleIdleImg3 : seeleIdleImg3Reversed;

        } else if (Seele.idleAnimation.index == 4) {
            Seele.idleAnimation.countIndexRepeated += 1 * Game.gameSpeed;
            if (Seele.idleAnimation.countIndexRepeated >= 12) {
                Seele.idleAnimation.countIndexRepeated = 0;
                Seele.idleAnimation.index = 4 + Seele.idleAnimation.reverseIndex; 
                if (Seele.idleAnimation.breatheIn == false)
                    Seele.idleAnimation.reverseIndex = -1;
                Seele.idleAnimation.breatheIn = false;
                Seele.idleAnimation.breatheOut = true;
                
            }
            frame = Seele.directionRight ? seeleIdleImg4 : seeleIdleImg4Reversed;

        }       

        return frame;
    }

    static #handleRunningAnimation(){
        let frame = new Image();
        if (Seele.runningAnimation.index == 1) {
            Seele.runningAnimation.countIndexRepeated += 1 * Game.gameSpeed;
            if (Seele.runningAnimation.countIndexRepeated >= 10){
                Seele.runningAnimation.countIndexRepeated = 0;
                Seele.runningAnimation.index = 2;
            }
            frame = Seele.directionRight ? seeleRunImg2 : seeleRunImg2Reversed;

        } else if (Seele.runningAnimation.index == 2) {
            Seele.runningAnimation.countIndexRepeated += 1 * Game.gameSpeed;
            if (Seele.runningAnimation.countIndexRepeated >= 10){
                Seele.runningAnimation.countIndexRepeated = 0;
                Seele.runningAnimation.index = 3;
            }
            frame = Seele.directionRight ? seeleRunImg3 : seeleRunImg3Reversed;

        } else if (Seele.runningAnimation.index == 3) {
            Seele.runningAnimation.countIndexRepeated += 1 * Game.gameSpeed;
            if (Seele.runningAnimation.countIndexRepeated >= 10){
                Seele.runningAnimation.countIndexRepeated = 0;
                Seele.runningAnimation.index = 4;
            }
            frame = Seele.directionRight ? seeleRunImg4 : seeleRunImg4Reversed;

        } else if (Seele.runningAnimation.index == 4) {
            Seele.runningAnimation.countIndexRepeated += 1 * Game.gameSpeed;
            if (Seele.runningAnimation.countIndexRepeated >= 10){
                Seele.runningAnimation.countIndexRepeated = 0;
                Seele.runningAnimation.index = 1;
            }
            frame = Seele.directionRight ? seeleRunImg1 : seeleRunImg1Reversed;

        }

        return frame;
    }
}   