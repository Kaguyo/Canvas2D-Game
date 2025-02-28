class Mobs2D {

    constructor(image, imageReversed, speed, gameFrame, id, AxisX, AxisY, toLeft){
        this.image = image;
        this.imageReversed = imageReversed;
        this.speed = speed;
        this.gameFrame = gameFrame;
        this.id = id;
        this.AxisX = AxisX;
        this.AxisY = AxisY;
        this.toLeft = toLeft;
    }  

    update(){
        if (this.toLeft){
            this.AxisX -= this.speed;
            if (this.AxisX < 40){
                this.toLeft = false;
            }
        } else {
            this.AxisX += this.speed;
            if (this.AxisX > 600){
                this.toLeft = true;
            }
        }
    }

    draw(toLeft){
        if (!toLeft)
            ctx.drawImage(this.image, this.AxisX - Character2D.UnlockedAreaX, this.AxisY);
        else
            ctx.drawImage(this.imageReversed, this.AxisX - Character2D.UnlockedAreaX, this.AxisY);
    }

}

const Generic1Idle = new Image();
Generic1Idle.src = "../assets/models/enemies/Basic/Generic1/GenericIdle1.png";

const Generic1IdleReversed = new Image();
Generic1IdleReversed.src = "../assets/models/enemies/Basic/Generic1/GenericIdle1Reversed.png";

const Generic1 = new Mobs2D(Generic1Idle, Generic1IdleReversed, 10, 1, 1, 600, 630, true);