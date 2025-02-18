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
    // Dash    =================================
    if (keys.l && Character2D.AxisY == 630 && !lockMobility){
        Character2D.Dash(true);
    } else if (!keys.l) {
        Character2D.Dash(false);
    }

    // Jump    =================================
    if (keys.w && !lockMobility){
        Character2D.Jump();
    
    // Character's Gravity    ==================
    } if (!Character2D.isGrounded && Character2D.terminouPulo && !lockMobility){
        Character2D.Fall();
    }
   
    // Ultimate Attack    ======================
    if (keys.q && (Seele.Energy >= 10 || Character2D.skillActivationCounter.Ultimate != 0)) { 
        Character2D.Ultimate();
    
    // Mobility Axis X   =======================
    } else if (readRun && !keys.l) {
       Character2D.RunningAxisX();
    
    // Standing Still Idle Animations    =======
    } else if (characterIdle == "inhale") {
        Character2D.IdleInhale();

    } else if (characterIdle == "exhale") {
        Character2D.IdleExhale();
        
    }

    Hud.draw();
    
    requestAnimationFrame(animate);
}
animate();