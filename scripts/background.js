// Background Images Stage 1
const backgroundImage1 = new Image();
backgroundImage1.src = "../assets/layers/11lay2.png";
const backgroundImage2 = new Image();
backgroundImage2.src = "../assets/layers/22lay2.png";
const backgroundImage3 = new Image();
backgroundImage3.src = "../assets/layers/33lay2.png";
const backgroundImage4 = new Image();
backgroundImage4.src = "../assets/layers/44lay2.png";

// Background Images Stage 1 Reversed Horizontally
const backgroundImage5 = new Image();
backgroundImage5.src = "../assets/layers/11layReversed2.png";
const backgroundImage6 = new Image();
backgroundImage6.src = "../assets/layers/22layReversed2.png";
const backgroundImage7 = new Image();
backgroundImage7.src = "../assets/layers/33layReversed2.png";
const backgroundImage8 = new Image();
backgroundImage8.src = "../assets/layers/44layReversed2.png";

class Background {
    constructor(image, speedModifier, reversed, x) {
        this.x = x;
        this.width = 1920;
        this.speedModifier = speedModifier;
        this.image = image;
        this.reversed = reversed;

        Background.BACKGROUND_INSTANCES_ARRAY.push(this);
    }
    #draw() {
        ctx2.drawImage(this.image, this.x, 0);
    }
    #update() {
        if (this.x < -1920)
            this.x += 3840;
        this.x -= this.speedModifier;
    }

    static generateBackground() {
        ctx2.clearRect(0, 0, canvasBackground.width, canvasBackground.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Background.BACKGROUND_INSTANCES_ARRAY.forEach((instancedObject) => {
            instancedObject.#draw();
            //instancedObject.#update();
        });
    }

    static BACKGROUND_INSTANCES_ARRAY = [];
}

const backgroundImageObject1 = new Background(
    backgroundImage1, 2, false, 0
);

const backgroundImageObject1Reversed = new Background(
    backgroundImage5, 2, true, 1920
);

const backgroundImageObject2 = new Background(
    backgroundImage2, 4, false, 0
);

const backgroundImageObject2Reversed = new Background(
    backgroundImage6, 4, true, 1920
);

const backgroundImageObject3 = new Background(
    backgroundImage3, 6, false, 0
);

const backgroundImageObject3Reversed = new Background(
    backgroundImage7, 6, true, 1920
);

const backgroundImageObject4 = new Background(
    backgroundImage4, 8, false, 0
);

const backgroundImageObject4Reversed = new Background(
    backgroundImage8, 8, true, 1920
);