const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1080;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    allLayers.forEach((layer) => {
        layer.draw();
        layer.update();        
    });
    // Dash     ================================
    if (keys.l && Character2D.AxisY == 630 && !lockMobility){
        Character2D.Speed = 40;
        if (toLeft){
            Character2D.AxisX -= Character2D.Speed;
            if (Character2D.AxisX < 60)
                Character2D.AxisX = 60;
        } else if (!toLeft){
            Character2D.AxisX += Character2D.Speed;
            if (Character2D.AxisX > 1100){
                Character2D.adjustMap = Character2D.AxisX - 1100;
                Character2D.AxisX = 1100;
            }
        }
        characterIdle = "none"
    } else if (!keys.l) {
        Character2D.Speed = 20;
    }
    // Jump     ================================
    if (keys.w && !lockMobility){
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
    } if (!Character2D.isGrounded && Character2D.terminouPulo && !lockMobility){
        Character2D.AxisY += 22;
        if (Character2D.AxisY > 630){
            Character2D.AxisY = 630;
            Character2D.isGrounded = true;
        } 
    }
    // End Jump  ===============================
    if (keys.q) {
        Character2D.Ultimate();
    } else if (readRun && !keys.l) {
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
    
    } else if (characterIdle == "inhale") {
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
    } else if (characterIdle == "exhale") {
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
    renderBlood(0);
    requestAnimationFrame(animate);
}
animate();