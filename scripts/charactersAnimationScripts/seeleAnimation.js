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

const seeleIdleArmedImg1 = new Image();
seeleIdleArmedImg1.src = "../../assets/models/characters/Seele/SeeleIdleArmed1.png";
const seeleIdleArmedImg1Reversed = new Image();
seeleIdleArmedImg1Reversed.src = "../../assets/models/characters/Seele/SeeleIdleArmed1Reversed.png";

class SeeleAnimation {
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

    static idleArmedAnimation= {
        reverseIndex : 0,
        breatheIn : true,
        breatheOut : false,
        index : 1,
        countIndexRepeated : 0
    }

    static runningAnimation = {
        index : 1,
        countIndexRepeated : 0
    };

    static animation = 1; // 1: idle, 2: running, 3: jumping, 4: crouch, 5: dash

    static updateFrame(character){
        SeeleAnimation.#handleInput();
        SeeleAnimation.#setAnimation();
        
        if (SeeleAnimation.animation == 1) {
            SeeleAnimation.frame = character.hasWeapon ? 
            SeeleAnimation.#handleIdleArmedAnimation() : 
            SeeleAnimation.#handleIdleAnimation();
        } else if (SeeleAnimation.animation == 2) {
            SeeleAnimation.frame = SeeleAnimation.#handleRunningAnimation();
        }

        return SeeleAnimation.frame;
    }

    static #handleInput(){
        if (GameProperties.inputKeys.a) {
            SeeleAnimation.directionLeft = true;
            SeeleAnimation.directionRight = false;
        }
        else if (GameProperties.inputKeys.d) {
            SeeleAnimation.directionRight = true;
            SeeleAnimation.directionLeft = false;
        }
    }
    
    static #setAnimation() {
        if (GameProperties.inputKeys.a || GameProperties.inputKeys.d)
            SeeleAnimation.animation = 2;
        else if (GameProperties.inputKeys.w)
            SeeleAnimation.animation = 3;
        else if (GameProperties.inputKeys.s)
            SeeleAnimation.animation = 4;
        else if (GameProperties.inputKeys.l)
            SeeleAnimation.animation = 5;
        else
            SeeleAnimation.animation = 1;
    }

    static #handleIdleAnimation() {
        let frame = new Image();
        if (SeeleAnimation.idleAnimation.index == 1) {
            SeeleAnimation.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
            if (SeeleAnimation.idleAnimation.countIndexRepeated >= 10){
                if (SeeleAnimation.idleAnimation.breatheIn == true)
                    SeeleAnimation.idleAnimation.reverseIndex = 0;
                SeeleAnimation.idleAnimation.countIndexRepeated = 0;
                SeeleAnimation.idleAnimation.index = 2 + SeeleAnimation.idleAnimation.reverseIndex;
                SeeleAnimation.idleAnimation.breatheIn = true;
                SeeleAnimation.idleAnimation.breatheOut = false;
            }
            frame = SeeleAnimation.directionRight ? seeleIdleImg1 : seeleIdleImg1Reversed;

        } else if (SeeleAnimation.idleAnimation.index == 2) {
            SeeleAnimation.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
            if (SeeleAnimation.idleAnimation.countIndexRepeated >= 10){
                SeeleAnimation.idleAnimation.countIndexRepeated = 0;
                SeeleAnimation.idleAnimation.index = 3 + SeeleAnimation.idleAnimation.reverseIndex; 
                if (SeeleAnimation.idleAnimation.breatheIn == false)
                    SeeleAnimation.idleAnimation.reverseIndex = -1;
            }
            frame = SeeleAnimation.directionRight ? seeleIdleImg2 : seeleIdleImg2Reversed;

        } else if (SeeleAnimation.idleAnimation.index == 3) {
            SeeleAnimation.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
            if (SeeleAnimation.idleAnimation.countIndexRepeated >= 10){
                if (SeeleAnimation.idleAnimation.breatheIn == false)
                    SeeleAnimation.idleAnimation.reverseIndex = -2;
                SeeleAnimation.idleAnimation.countIndexRepeated = 0;
                SeeleAnimation.idleAnimation.index = 4 + SeeleAnimation.idleAnimation.reverseIndex; 
            }
            frame = SeeleAnimation.directionRight ? seeleIdleImg3 : seeleIdleImg3Reversed;

        } else if (SeeleAnimation.idleAnimation.index == 4) {
            SeeleAnimation.idleAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
            if (SeeleAnimation.idleAnimation.countIndexRepeated >= 12) {
                SeeleAnimation.idleAnimation.countIndexRepeated = 0;
                SeeleAnimation.idleAnimation.index = 4 + SeeleAnimation.idleAnimation.reverseIndex; 
                if (SeeleAnimation.idleAnimation.breatheIn == false)
                    SeeleAnimation.idleAnimation.reverseIndex = -1;
                SeeleAnimation.idleAnimation.breatheIn = false;
                SeeleAnimation.idleAnimation.breatheOut = true;
                
            }
            frame = SeeleAnimation.directionRight ? seeleIdleImg4 : seeleIdleImg4Reversed;

        }       

        return frame;
    }

    static #handleIdleArmedAnimation() {
        let frame = new Image();
        if (SeeleAnimation.idleArmedAnimation.index == 1) {
            frame = SeeleAnimation.directionRight ? seeleIdleArmedImg1 : seeleIdleArmedImg1Reversed;
        }       
        
        return frame;
    }

    static #handleRunningAnimation(){
        let frame = new Image();
        if (SeeleAnimation.runningAnimation.index == 1) {
            SeeleAnimation.runningAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
            if (SeeleAnimation.runningAnimation.countIndexRepeated >= 10){
                SeeleAnimation.runningAnimation.countIndexRepeated = 0;
                SeeleAnimation.runningAnimation.index = 2;
            }
            frame = SeeleAnimation.directionRight ? seeleRunImg2 : seeleRunImg2Reversed;

        } else if (SeeleAnimation.runningAnimation.index == 2) {
            SeeleAnimation.runningAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
            if (SeeleAnimation.runningAnimation.countIndexRepeated >= 10){
                SeeleAnimation.runningAnimation.countIndexRepeated = 0;
                SeeleAnimation.runningAnimation.index = 3;
            }
            frame = SeeleAnimation.directionRight ? seeleRunImg3 : seeleRunImg3Reversed;

        } else if (SeeleAnimation.runningAnimation.index == 3) {
            SeeleAnimation.runningAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
            if (SeeleAnimation.runningAnimation.countIndexRepeated >= 10){
                SeeleAnimation.runningAnimation.countIndexRepeated = 0;
                SeeleAnimation.runningAnimation.index = 4;
            }
            frame = SeeleAnimation.directionRight ? seeleRunImg4 : seeleRunImg4Reversed;

        } else if (SeeleAnimation.runningAnimation.index == 4) {
            SeeleAnimation.runningAnimation.countIndexRepeated += 1 * GameProperties.gameSpeed;
            if (SeeleAnimation.runningAnimation.countIndexRepeated >= 10){
                SeeleAnimation.runningAnimation.countIndexRepeated = 0;
                SeeleAnimation.runningAnimation.index = 1;
            }
            frame = SeeleAnimation.directionRight ? seeleRunImg1 : seeleRunImg1Reversed;

        }

        return frame;
    }
}   