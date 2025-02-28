const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1080;

const canvasBackground = document.getElementById('canvasBackground');
const ctxBackground = canvasBackground.getContext('2d');
const CANVAS_WIDTH_2 = canvasBackground.width = canvas.width;
const CANVAS_HEIGHT_2 = canvasBackground.height = canvas.height;

function animate(){
    ctxBackground.clearRect(0, 0, CANVAS_WIDTH_2, CANVAS_HEIGHT_2);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    allLayers.forEach((layer) => {
        layer.draw();
        layer.update();      
    });

    Generic1.draw(Generic1.toLeft);
    Generic1.update();

    // Dash    =================================
    if (keys.l && Character2D.AxisY == 630 && !lockMobility){
        Character2D.Dash(true);
    } else if (!keys.l) {
        Character2D.Dash(false);
    }

    // Jump    =================================
    if (keys.w && !lockMobility){
        Character2D.Jump();
    
    // Character's Gravity    ==================.
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
    Characters.UpdateExp();
    // console.log("Personagem X:",Character2D.AxisX, "\nEnemy X:", Mob1.AxisX - Character2D.UnlockedAreaX);
    requestAnimationFrame(animate);
}
const Seele = new Characters(1, "Seele", 23, "1.67 m", "63 kg", "Female", {}, [8], 40, 40, 7);
const Mob1 = new Mobs(1, "Generic1", 192, "1.00m", "30 kg", "", {}, [], 0, 40, 2);

let EnemiesOnField = [
    [
        Generic1,
        Mob1
    ]
    
];

console.log("Seele HP: ", Seele.Hp, "/", Seele.HpMax);
console.log("HP de Inimigo 1 em campo:", Mob1.Hp);

animate();