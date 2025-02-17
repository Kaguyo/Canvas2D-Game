let characterIdle = "inhale";
let readRun = false;
let fall = false;
let keys = {
    q: false,
    a: false,
    d: false,
    w: false,
    l: false
};

let lockMobility = false;
let DisableMacroJump = false;
let terminouPulo = true;
let reminder = false;
let toLeft = false;

class Character2D {
    static ultimateAtkFrame = 1;
    static characterFrame = 1;
    static allowRun1 = true;
    static allowRun2 = false;
    static allowRun3 = false;
    static allowRun4 = false;
    static allowRun5 = true;
    static allowRun6 = false;
    static allowRun7 = false;
    static allowRun8 = false;

    static tempSpeed = 0;
    static Speed = 20;
    static DashSpeed = 50;
    static tempSpeed = Character2D.Speed;
    static AxisY = 630;
    static AxisX = 200;
    static SpeedModifier = 1;

    static adjustMap = 0;
    static adjustMap2 = 0;
    static isGrounded = true;

    constructor(image, speed, gameFrame, id){
        this.image = image;
        this.speed = speed;
        this.gameFrame = gameFrame;
        this.id = id;
    }       
    static RunningAxisX(){
        if (keys.d){
            seeleArrayObjectRun.forEach((object) => {
                if (object.id == 1 && object.gameFrame < 2 && Character2D.allowRun1){
                    object.update();
                    object.draw();
                } else if (object.id == 2 
                && object.gameFrame < 3 
                && object.gameFrame >= 2
                && Character2D.allowRun2){
                    object.update();
                    object.draw();
                } else if (object.id == 3
                && object.gameFrame < 4
                && object.gameFrame >= 3
                && Character2D.allowRun3){
                    object.update();
                    object.draw();
                } else if (object.id == 4
                && object.gameFrame < 5
                && object.gameFrame >= 4
                && Character2D.allowRun4){
                    object.update();
                    object.draw();
                }
            });
        } else if (keys.a){
            seeleArrayObjectRunReversed.forEach((object) => {
                if (object.id == 1 && object.gameFrame < 2 && Character2D.allowRun5){
                    object.update();
                    object.draw();
                } else if (object.id == 2 
                && object.gameFrame < 3 
                && object.gameFrame >= 2
                && Character2D.allowRun6){
                    object.update();
                    object.draw();
                } else if (object.id == 3 
                && object.gameFrame < 4
                && object.gameFrame >= 3
                && Character2D.allowRun7){
                    object.update();
                    object.draw();
                } else if (object.id == 4 
                && object.gameFrame < 5
                && object.gameFrame >= 4
                && Character2D.allowRun8){
                    object.update();
                    object.draw();
                }
            });
        }
    }
    static Jump(){
        if (Character2D.isGrounded || !Character2D.terminouPulo){
            Character2D.AxisY -= 27;
            Character2D.isGrounded = false;
            Character2D.terminouPulo = false;
        }
        if (Character2D.AxisY <= 250){
            Character2D.AxisY = 250;
            keys.w = false;
            Character2D.terminouPulo = true;
            Character2D.DisableMacroJump = true;
        }
    } 
    static Fall(){
        Character2D.AxisY += 22;
        if (Character2D.AxisY > 630){
            Character2D.AxisY = 630;
            Character2D.isGrounded = true;
        } 
    }
    static Dash(boolean){
        if (boolean){
            characterIdle = "";
            if (Character2D.tempSpeed == 0){
                Character2D.tempSpeed = Character2D.Speed;
            }
            Character2D.Speed = Character2D.DashSpeed;
            if (toLeft){
                Character2D.AxisX -= Character2D.Speed;
                if (Character2D.AxisX < -40){
                    Character2D.AxisX = -40;
                }
            } else if (!toLeft){
                Character2D.AxisX += Character2D.Speed;
                if (Character2D.AxisX > 1250){
                    Character2D.adjustMap = Character2D.AxisX - 1250;
                    Character2D.AxisX = 1250;
                }
            }
        } else if (Character2D.tempSpeed != 0){
            Character2D.Speed = Character2D.tempSpeed;
            Character2D.tempSpeed = 0;
        } 
    }
    static IdleInhale(){
        Character2D.allowRun1 = true;
        Character2D.allowRun2 = false;
        Character2D.allowRun3 = false;
        Character2D.allowRun4 = false;
        Character2D.allowRun5 = true;
        Character2D.allowRun6 = false;
        Character2D.allowRun7 = false;
        Character2D.allowRun8 = false;
        if (!keys.l) Character2D.adjustMap = 0;
        if (Character2D.characterFrame == 1) {
            if (!toLeft) {
                seeleObject1.draw();
                seeleObject1.update();
                seeleObject13.update();
            } else {
                seeleObject13.draw();
                seeleObject13.update();
                seeleObject1.update();
            }
        } else if (Character2D.characterFrame == 2) {
            if (!toLeft) {
                seeleObject2.draw();
                seeleObject2.update();
                seeleObject14.update();
            } else {
                seeleObject14.draw();
                seeleObject14.update();
                seeleObject2.update();
            }
        } else if (Character2D.characterFrame == 3) {
            if (!toLeft) {
                seeleObject3.draw();
                seeleObject3.update();
                seeleObject15.update();
            } else {
                seeleObject15.draw();
                seeleObject15.update();
                seeleObject3.update();
            }
        } else if (Character2D.characterFrame == 4) {
            if (!toLeft) {
                seeleObject4.draw();
                seeleObject4.update();
                seeleObject16.update();
            } else {
                seeleObject16.draw();
                seeleObject16.update();
                seeleObject4.update();
            }
        }
    }
    static IdleExhale(){
        Character2D.allowRun1 = true;
        Character2D.allowRun2 = false;
        Character2D.allowRun3 = false;
        Character2D.allowRun4 = false;
        Character2D.allowRun5 = true;
        Character2D.allowRun6 = false;
        Character2D.allowRun7 = false;
        Character2D.allowRun8 = false;
        if (!keys.l)
        Character2D.adjustMap = 0;
        if(Character2D.characterFrame == 4){
            if (!toLeft) {
                seeleObject4.draw();
                seeleObject4.update();
                seeleObject16.update();
            } else {
                seeleObject16.draw();
                seeleObject16.update();
                seeleObject4.update();
            }
        } else if (Character2D.characterFrame == 3) {
            if (!toLeft) {
                seeleObject3.draw();
                seeleObject3.update();
                seeleObject15.update();
            } else {
                seeleObject15.draw();
                seeleObject15.update();
                seeleObject3.update();
            }
        } else if (Character2D.characterFrame == 2) {
            if (!toLeft) {
                seeleObject2.draw();
                seeleObject2.update();
                seeleObject14.update();
            } else {
                seeleObject14.draw();
                seeleObject14.update();
                seeleObject2.update();
            }
        } else if (Character2D.characterFrame == 1) {
            if (!toLeft) {
                seeleObject1.draw();
                seeleObject1.update();
                seeleObject13.update();
            } else {
                seeleObject13.draw();
                seeleObject13.update();
                seeleObject1.update();
            }
        }
    }
    static Ultimate(){
        if (keys.q){
            document.getElementById("energyBar1").style.width = 0 + "%";
            document.getElementById("energyBar2").style.width = 0 + "%";
            if (Character2D.ultimateAtkFrame < 2){
                seeleObjectUltWing1.draw();
                seeleObjectUltDash1.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing1.speed;
            } else if (Character2D.ultimateAtkFrame < 3){
                seeleObjectUltWing2.draw();
                seeleObjectUltDash1.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing2.speed;
            } else if (Character2D.ultimateAtkFrame < 4){
                seeleObjectUltWing3.draw();
                seeleObjectUltDash1.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing3.speed;
            } else if (Character2D.ultimateAtkFrame < 5){
                seeleObjectUltWing4.draw();
                seeleObjectUltDash1.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing4.speed;
            } else if (Character2D.ultimateAtkFrame < 6){
                seeleObjectUltWing5.draw();
                seeleObjectUltDash1.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing5.speed;
            } else if (Character2D.ultimateAtkFrame < 7){
                seeleObjectUltWing6.draw();
                seeleObjectUltDash1.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing6.speed;
            } else if (Character2D.ultimateAtkFrame < 8){
                seeleObjectUltWing7.draw();
                seeleObjectUltDash2.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing7.speed;
            } else if (Character2D.ultimateAtkFrame < 9){
                seeleObjectUltWing8.draw();
                seeleObjectUltDash2.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing8.speed;
            } else if (Character2D.ultimateAtkFrame < 8){
                seeleObjectUltWing9.draw();
                seeleObjectUltDash2.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing9.speed;
            } else if (Character2D.ultimateAtkFrame < 9){
                seeleObjectUltWing10.draw();
                seeleObjectUltDash2.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing10.speed;
            } else if (Character2D.ultimateAtkFrame < 10){
                seeleObjectUltWing11.draw();
                seeleObjectUltDash2.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing11.speed;
            } else if (Character2D.ultimateAtkFrame < 11){
                seeleObjectUltWing12.draw();
                seeleObjectUltDash2.draw();
                Character2D.ultimateAtkFrame += seeleObjectUltWing12.speed;
            } else {
                Character2D.ultimateAtkFrame = 1;
                lockMobility = false;
                keys.q = false;
                Characters.TakeDamage(Seele, 490);
            }
        }
    } 
    update(){
        if (readRun && !lockMobility){
            if (keys.a){
                Character2D.AxisX -= Character2D.Speed * Character2D.SpeedModifier;
                if (Character2D.AxisX < -40) { 
                    Character2D.AxisX = -40 
                }
                if (this.id == 1) {
                    this.gameFrame += 0.1 * Character2D.SpeedModifier * (Character2D.Speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        Character2D.allowRun5 = false;
                        Character2D.allowRun6 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * Character2D.SpeedModifier * (Character2D.Speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        Character2D.allowRun6 = false;
                        Character2D.allowRun7 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * Character2D.SpeedModifier * (Character2D.Speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        Character2D.allowRun7 = false;
                        Character2D.allowRun8 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * Character2D.SpeedModifier * (Character2D.Speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        Character2D.allowRun5 = true;
                        Character2D.allowRun8 = false;
                    }
                }  
            } else if (keys.d){
                Character2D.AxisX += Character2D.Speed * Character2D.SpeedModifier;
                if (Character2D.AxisX > 1250) {
                    Character2D.adjustMap = Character2D.AxisX - 1250;
                    Character2D.AxisX = 1250;
                }
                if (this.id == 1) {
                    this.gameFrame += 0.1 * Character2D.SpeedModifier * (Character2D.Speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        Character2D.allowRun1 = false;
                        Character2D.allowRun2 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * Character2D.SpeedModifier * (Character2D.Speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        Character2D.allowRun2 = false;
                        Character2D.allowRun3 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * Character2D.SpeedModifier * (Character2D.Speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        Character2D.allowRun3 = false;
                        Character2D.allowRun4 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * Character2D.SpeedModifier * (Character2D.Speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        Character2D.allowRun1 = true;
                        Character2D.allowRun4 = false;
                    }
                }
            }
        } else if (characterIdle == "inhale") {
            this.gameFrame += this.speed;
            if (this.id == 1 && this.gameFrame >= 2) {
                this.gameFrame = 1;
                Character2D.characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame >= 3) {
                this.gameFrame = 2;
                Character2D.characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame >= 4) {
                this.gameFrame = 3;
                Character2D.characterFrame = 4;
            } else if (this.id == 4 && this.gameFrame >= 5) {
                this.gameFrame = 4;
                characterIdle = "exhale";
            }
        } else if (characterIdle == "exhale") {
            this.gameFrame -= this.speed;
            if (this.id == 4 && this.gameFrame <= 3){
                this.gameFrame = 4;
                Character2D.characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame <= 2) {
                this.gameFrame = 3;
                Character2D.characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame <= 1) {
                this.gameFrame = 2;
                Character2D.characterFrame = 1;
            } else if (this.id == 1 && this.gameFrame <= 0) {
                this.gameFrame = 1;
                characterIdle = "inhale";
            }
        } 
    }
    draw(){
        ctx.drawImage(this.image, Character2D.AxisX, Character2D.AxisY);
    }
}

const seeleIdleAnimation1 = new Image();
seeleIdleAnimation1.src = "../assets/models/characters/Seele/SeeleIdle.png";
const seeleIdleAnimation2 = new Image();
seeleIdleAnimation2.src = "../assets/models/characters/Seele/SeeleIdle2.png";
const seeleIdleAnimation3 = new Image();
seeleIdleAnimation3.src = "../assets/models/characters/Seele/SeeleIdle3.png";
const seeleIdleAnimation4 = new Image();
seeleIdleAnimation4.src = "../assets/models/characters/Seele/SeeleIdle4.png";

const seeleIdleAnimation5 = new Image();
seeleIdleAnimation5.src = "../assets/models/characters/Seele/SeeleIdleReversed.png";
const seeleIdleAnimation6 = new Image();
seeleIdleAnimation6.src = "../assets/models/characters/Seele/SeeleIdle2Reversed.png";
const seeleIdleAnimation7 = new Image();
seeleIdleAnimation7.src = "../assets/models/characters/Seele/SeeleIdle3Reversed.png";
const seeleIdleAnimation8 = new Image();
seeleIdleAnimation8.src = "../assets/models/characters/Seele/SeeleIdle4Reversed.png";

// Imagens animacao corrida
const seeleRunAnimation1 = new Image();
seeleRunAnimation1.src = "../assets/models/characters/Seele/SeeleRun.png";
const seeleRunAnimation2 = new Image();
seeleRunAnimation2.src = "../assets/models/characters/Seele/SeeleRun2.png";
const seeleRunAnimation3 = new Image();
seeleRunAnimation3.src = "../assets/models/characters/Seele/SeeleRun3.png";
const seeleRunAnimation4 = new Image();
seeleRunAnimation4.src = "../assets/models/characters/Seele/SeeleRun4.png";

// Imagens animacao corrida reversed
const seeleRunAnimation5 = new Image();
seeleRunAnimation5.src = "../assets/models/characters/Seele/SeeleRunReversed.png";
const seeleRunAnimation6 = new Image();
seeleRunAnimation6.src = "../assets/models/characters/Seele/SeeleRun2Reversed.png";
const seeleRunAnimation7 = new Image();
seeleRunAnimation7.src = "../assets/models/characters/Seele/SeeleRun3Reversed.png";
const seeleRunAnimation8 = new Image();
seeleRunAnimation8.src = "../assets/models/characters/Seele/SeeleRun4Reversed.png";

const UltDash1 = new Image();
UltDash1.src = "../assets/models/characters/Seele/ActivatingUltDash1.png";
const UltDash2 = new Image();
UltDash2.src = "../assets/models/characters/Seele/ActivatingUltDash2.png";

const UltWing1 = new Image();
UltWing1.src = "../assets/models/characters/Seele/UltWing1.png";
const UltWing2 = new Image();
UltWing2.src = "../assets/models/characters/Seele/UltWing2.png";
const UltWing3 = new Image();
UltWing3.src = "../assets/models/characters/Seele/UltWing3.png";
const UltWing4 = new Image();
UltWing4.src = "../assets/models/characters/Seele/UltWing4.png";
const UltWing5 = new Image();
UltWing5.src = "../assets/models/characters/Seele/UltWing5.png";
const UltWing6 = new Image();
UltWing6.src = "../assets/models/characters/Seele/UltWing6.png";
const UltWing7 = new Image();
UltWing7.src = "../assets/models/characters/Seele/UltWing7.png";
const UltWing8 = new Image();
UltWing8.src = "../assets/models/characters/Seele/UltWing8.png";
const UltWing9 = new Image();
UltWing9.src = "../assets/models/characters/Seele/UltWing9.png";
const UltWing10 = new Image();
UltWing10.src = "../assets/models/characters/Seele/UltWing10.png";
const UltWing11 = new Image();
UltWing11.src = "../assets/models/characters/Seele/UltWing11.png";
const UltWing12 = new Image();
UltWing12.src = "../assets/models/characters/Seele/UltWing12.png";


const seeleObjectUltDash1 = new Character2D (UltDash1, 0.04, 1, 1);
const seeleObjectUltDash2 = new Character2D (UltDash2, 0.04, 2, 2);

const seeleObjectUltWing1 = new Character2D (UltWing1, 0.2, 1, 1);
const seeleObjectUltWing2 = new Character2D (UltWing2, 0.2, 2, 2);
const seeleObjectUltWing3 = new Character2D (UltWing3, 0.2, 3, 3);
const seeleObjectUltWing4 = new Character2D (UltWing4, 0.2, 4, 4);
const seeleObjectUltWing5 = new Character2D (UltWing5, 0.2, 5, 5);
const seeleObjectUltWing6 = new Character2D (UltWing6, 0.2, 6, 6);
const seeleObjectUltWing7 = new Character2D (UltWing7, 0.2, 7, 7);
const seeleObjectUltWing8 = new Character2D (UltWing8, 0.1, 8, 8);
const seeleObjectUltWing9 = new Character2D (UltWing9, 0.1, 9, 9);
const seeleObjectUltWing10 = new Character2D (UltWing10, 0.15, 10, 10);
const seeleObjectUltWing11 = new Character2D (UltWing11, 0.15, 11, 11);
const seeleObjectUltWing12 = new Character2D (UltWing12, 0.15, 12, 12);


const seeleObject1 = new Character2D (seeleIdleAnimation1, 0.04, 1, 1);
const seeleObject2 = new Character2D (seeleIdleAnimation2, 0.20, 2, 2);
const seeleObject3 = new Character2D (seeleIdleAnimation3, 0.18, 3, 3);
const seeleObject4 = new Character2D (seeleIdleAnimation4, 0.03, 4, 4);
const seeleObject13 = new Character2D (seeleIdleAnimation5, 0.04, 1, 1);
const seeleObject14 = new Character2D (seeleIdleAnimation6, 0.20, 2, 2);
const seeleObject15 = new Character2D (seeleIdleAnimation7, 0.18, 3, 3);
const seeleObject16 = new Character2D (seeleIdleAnimation8, 0.03, 4, 4);

const seeleObject5 = new Character2D (seeleRunAnimation1, 10, 1, 1);
const seeleObject6 = new Character2D (seeleRunAnimation2, 10, 2, 2);
const seeleObject7 = new Character2D (seeleRunAnimation3, 10, 3, 3);
const seeleObject8 = new Character2D (seeleRunAnimation4, 10, 4, 4);

const seeleObject9 = new Character2D (seeleRunAnimation5, 10, 1, 1);
const seeleObject10 = new Character2D (seeleRunAnimation6, 10, 2, 2);
const seeleObject11 = new Character2D (seeleRunAnimation7, 10, 3, 3);
const seeleObject12 = new Character2D (seeleRunAnimation8, 10, 4, 4);

const seeleArrayObjectIdle = [
    seeleObject1, 
    seeleObject2, 
    seeleObject3,
    seeleObject4,
    seeleObject13,
    seeleObject14,
    seeleObject15,
    seeleObject16, 
];

const seeleArrayObjectRun = [seeleObject5, seeleObject6, seeleObject7, seeleObject8];
const seeleArrayObjectRunReversed = [seeleObject9, seeleObject10, seeleObject11, seeleObject12];

document.addEventListener("keypress", (e) => {
    if (e.key === "q") {
        lockMobility = true;
        Character2D.adjustMap = 0;
        keys.q = true;
    }
});
document.addEventListener("keydown", (e) => {
    //  Run Left
    if (e.key === "a") {
        readRun = true;
        keys.a = true;
        toLeft = true;
        if (keys.d) { 
            keys.d = false;
            reminder = true;
        }
        Character2D.adjustMap = 0;
    }
    //  Run Right
    if (e.key === "d") {
        readRun = true;
        keys.d = true;
        toLeft = false;
        if (keys.a) { 
            keys.a = false;
            reminder = true;
        }
        Character2D.adjustMap2 = 0;
    }
    //  Jump
    if (e.key === "w" && !Character2D.DisableMacroJump){
        keys.w = true;
    }
    if (e.key === "l"){
        keys.l = true;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "a" && reminder){
        keys.a = false;
        keys.d = true;
        reminder = false;
        Character2D.adjustMap2 = 0;
    } else if (e.key === "a") {
        keys.a = false;
        toLeft = true;
        Character2D.adjustMap2 = 0;
    }
    if (e.key === "d" && reminder){
        keys.d = false;
        keys.a = true;
        reminder = false;
        Character2D.adjustMap = 0;
    } else if (e.key === "d") {
        keys.d = false;
        toLeft = false;
        if (!keys.l)
        Character2D.adjustMap = 0;
    }
    if (e.key === "w"){
        keys.w = false;
        Character2D.isGrounded = false;
        Character2D.terminouPulo = true;
        Character2D.DisableMacroJump = false;
    }
    if (e.key === "l"){
        keys.l = false;
        characterIdle = "inhale";
    }
    if (!keys.d && !keys.a) readRun = false;
});