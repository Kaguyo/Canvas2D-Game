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

class CharacterModel {
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

    static Speed = 20;
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
    static update(){
        if (keys.q){
            if (CharacterModel.ultimateAtkFrame < 2){
                seeleObjectUltWing1.draw();
                seeleObjectUltDash1.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing1.speed;
            } else if (CharacterModel.ultimateAtkFrame < 3){
                seeleObjectUltWing2.draw();
                seeleObjectUltDash1.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing2.speed;
            } else if (CharacterModel.ultimateAtkFrame < 4){
                seeleObjectUltWing3.draw();
                seeleObjectUltDash1.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing3.speed;
            } else if (CharacterModel.ultimateAtkFrame < 5){
                seeleObjectUltWing4.draw();
                seeleObjectUltDash1.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing4.speed;
            } else if (CharacterModel.ultimateAtkFrame < 6){
                seeleObjectUltWing5.draw();
                seeleObjectUltDash1.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing5.speed;
            } else if (CharacterModel.ultimateAtkFrame < 7){
                seeleObjectUltWing6.draw();
                seeleObjectUltDash1.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing6.speed;
            } else if (CharacterModel.ultimateAtkFrame < 8){
                seeleObjectUltWing7.draw();
                seeleObjectUltDash2.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing7.speed;
            } else if (CharacterModel.ultimateAtkFrame < 9){
                seeleObjectUltWing8.draw();
                seeleObjectUltDash2.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing8.speed;
            } else if (CharacterModel.ultimateAtkFrame < 8){
                seeleObjectUltWing9.draw();
                seeleObjectUltDash2.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing9.speed;
            } else if (CharacterModel.ultimateAtkFrame < 9){
                seeleObjectUltWing10.draw();
                seeleObjectUltDash2.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing10.speed;
            } else if (CharacterModel.ultimateAtkFrame < 10){
                seeleObjectUltWing11.draw();
                seeleObjectUltDash2.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing11.speed;
            } else if (CharacterModel.ultimateAtkFrame < 11){
                seeleObjectUltWing12.draw();
                seeleObjectUltDash2.draw();
                CharacterModel.ultimateAtkFrame += seeleObjectUltWing12.speed;
            } else {
                CharacterModel.ultimateAtkFrame = 1;
                lockMobility = false;
                keys.q = false;
            }
        }
    } 
    update(){
        if (readRun && !lockMobility){
            if (keys.a){
                CharacterModel.AxisX -= CharacterModel.Speed * CharacterModel.SpeedModifier;
                if (CharacterModel.AxisX < 60) { CharacterModel.AxisX = 60 }
                if (this.id == 1) {
                    this.gameFrame += 0.1 * CharacterModel.SpeedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        CharacterModel.allowRun5 = false;
                        CharacterModel.allowRun6 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * CharacterModel.SpeedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        CharacterModel.allowRun6 = false;
                        CharacterModel.allowRun7 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * CharacterModel.SpeedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        CharacterModel.allowRun7 = false;
                        CharacterModel.allowRun8 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * CharacterModel.SpeedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        CharacterModel.allowRun5 = true;
                        CharacterModel.allowRun8 = false;
                    }
                }  
            } else if (keys.d){
                CharacterModel.AxisX += CharacterModel.Speed * CharacterModel.SpeedModifier;
                if (CharacterModel.AxisX > 1100) {
                    CharacterModel.adjustMap = CharacterModel.AxisX - 1100;
                    CharacterModel.AxisX = 1100;
                }
                if (this.id == 1) {
                    this.gameFrame += 0.1 * CharacterModel.SpeedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 2){
                        this.gameFrame = 1;
                        CharacterModel.allowRun1 = false;
                        CharacterModel.allowRun2 = true;
                    }
                } else if (this.id == 2) {
                    this.gameFrame += 0.07 * CharacterModel.SpeedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 3){
                        this.gameFrame = 2;
                        CharacterModel.allowRun2 = false;
                        CharacterModel.allowRun3 = true;
                    }
                } else if (this.id == 3) {
                    this.gameFrame += 0.07 * CharacterModel.SpeedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 4){
                        this.gameFrame = 3;
                        CharacterModel.allowRun3 = false;
                        CharacterModel.allowRun4 = true;
                    }
                } else if (this.id == 4) {
                    this.gameFrame += 0.07 * CharacterModel.SpeedModifier * (CharacterModel.Speed / 20);
                    if (this.gameFrame >= 5){
                        this.gameFrame = 4;
                        CharacterModel.allowRun1 = true;
                        CharacterModel.allowRun4 = false;
                    }
                }
            }
        } else if (characterIdle == "inhale") {
            this.gameFrame += this.speed;
            if (this.id == 1 && this.gameFrame >= 2) {
                this.gameFrame = 1;
                CharacterModel.characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame >= 3) {
                this.gameFrame = 2;
                CharacterModel.characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame >= 4) {
                this.gameFrame = 3;
                CharacterModel.characterFrame = 4;
            } else if (this.id == 4 && this.gameFrame >= 5) {
                this.gameFrame = 4;
                characterIdle = "exhale";
            }
        } else if (characterIdle == "exhale") {
            this.gameFrame -= this.speed;
            if (this.id == 4 && this.gameFrame <= 3){
                this.gameFrame = 4;
                CharacterModel.characterFrame = 3;
            } else if (this.id == 3 && this.gameFrame <= 2) {
                this.gameFrame = 3;
                CharacterModel.characterFrame = 2;
            } else if (this.id == 2 && this.gameFrame <= 1) {
                this.gameFrame = 2;
                CharacterModel.characterFrame = 1;
            } else if (this.id == 1 && this.gameFrame <= 0) {
                this.gameFrame = 1;
                characterIdle = "inhale";
            }
        } 
    }
    draw(){
        ctx.drawImage(this.image, CharacterModel.AxisX, CharacterModel.AxisY);
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


const seeleObjectUltDash1 = new CharacterModel (UltDash1, 0.04, 1, 1);
const seeleObjectUltDash2 = new CharacterModel (UltDash2, 0.04, 2, 2);

const seeleObjectUltWing1 = new CharacterModel (UltWing1, 0.2, 1, 1);
const seeleObjectUltWing2 = new CharacterModel (UltWing2, 0.2, 2, 2);
const seeleObjectUltWing3 = new CharacterModel (UltWing3, 0.2, 3, 3);
const seeleObjectUltWing4 = new CharacterModel (UltWing4, 0.2, 4, 4);
const seeleObjectUltWing5 = new CharacterModel (UltWing5, 0.2, 5, 5);
const seeleObjectUltWing6 = new CharacterModel (UltWing6, 0.15, 6, 6);
const seeleObjectUltWing7 = new CharacterModel (UltWing7, 0.15, 7, 7);
const seeleObjectUltWing8 = new CharacterModel (UltWing8, 0.15, 8, 8);
const seeleObjectUltWing9 = new CharacterModel (UltWing9, 0.15, 9, 9);
const seeleObjectUltWing10 = new CharacterModel (UltWing10, 0.1, 10, 10);
const seeleObjectUltWing11 = new CharacterModel (UltWing11, 0.1, 11, 11);
const seeleObjectUltWing12 = new CharacterModel (UltWing12, 0.1, 12, 12);


const seeleObject1 = new CharacterModel (seeleIdleAnimation1, 0.04, 1, 1);
const seeleObject2 = new CharacterModel (seeleIdleAnimation2, 0.20, 2, 2);
const seeleObject3 = new CharacterModel (seeleIdleAnimation3, 0.18, 3, 3);
const seeleObject4 = new CharacterModel (seeleIdleAnimation4, 0.03, 4, 4);
const seeleObject13 = new CharacterModel (seeleIdleAnimation5, 0.04, 1, 1);
const seeleObject14 = new CharacterModel (seeleIdleAnimation6, 0.20, 2, 2);
const seeleObject15 = new CharacterModel (seeleIdleAnimation7, 0.18, 3, 3);
const seeleObject16 = new CharacterModel (seeleIdleAnimation8, 0.03, 4, 4);

const seeleObject5 = new CharacterModel (seeleRunAnimation1, 10, 1, 1);
const seeleObject6 = new CharacterModel (seeleRunAnimation2, 10, 2, 2);
const seeleObject7 = new CharacterModel (seeleRunAnimation3, 10, 3, 3);
const seeleObject8 = new CharacterModel (seeleRunAnimation4, 10, 4, 4);

const seeleObject9 = new CharacterModel (seeleRunAnimation5, 10, 1, 1);
const seeleObject10 = new CharacterModel (seeleRunAnimation6, 10, 2, 2);
const seeleObject11 = new CharacterModel (seeleRunAnimation7, 10, 3, 3);
const seeleObject12 = new CharacterModel (seeleRunAnimation8, 10, 4, 4);

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
        CharacterModel.adjustMap = 0;
        keys.q = true;
    }
})
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
        CharacterModel.adjustMap = 0;
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
        CharacterModel.adjustMap2 = 0;
    }
    //  Jump
    if (e.key === "w" && !CharacterModel.DisableMacroJump){
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
    } else if (e.key === "a") {
        keys.a = false;
        toLeft = true;
        CharacterModel.adjustMap2 = 0;
    }
    if (e.key === "d" && reminder){
        keys.d = false;
        keys.a = true;
        reminder = false;
    } else if (e.key === "d") {
        keys.d = false;
        toLeft = false;
        if (!keys.l)
        CharacterModel.adjustMap = 0;
    }
    if (e.key === "w"){
        keys.w = false;
        CharacterModel.isGrounded = false;
        CharacterModel.terminouPulo = true;
        if (CharacterModel.AxisY > 580) CharacterModel.DisableMacroJump = false;
    }
    if (e.key === "l"){
        keys.l = false;
        characterIdle = "inhale";
    }
    if (!keys.d && !keys.a) readRun = false;
});