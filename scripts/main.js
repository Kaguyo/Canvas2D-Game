const canvas = document.getElementById('canvas1');
canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext('2d');

const canvasBackground = document.getElementById('canvasBackground');
canvasBackground.width = canvas.width;
canvasBackground.height = canvas.height;

const ctx2 = canvasBackground.getContext('2d');

function animate(){
    ctx2.clearRect(0, 0, canvasBackground.width, canvasBackground.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Background.generateBackground();
    CharacterIcons.drawCharacterIconBackground(ctx, 0, 0);
    CharacterCard.drawCard(ctx, 0, 0);
    CharacterIcons.generateCharacterIcon(ctx, 0, 0);
    CharacterLevel.drawLevel(ctx, 0, 0, Player1.character.Level);
    Player.generatePlayer(ctx, Player1.dx, Player1.dy, Player1);

    requestAnimationFrame(animate);
}
const Player1 = new Player(1, "Seele", 500, 630, new Character(1, "Seele", 888));

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key in Game.inputKeys) {
        Game.inputKeys[key] = true; // Ativa a tecla pressionada
        
        if (key == 'a')
            Game.inputKeys.d = false;
        else if (key == 'd')
            Game.inputKeys.a = false;
    }
});

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (key in Game.inputKeys) {
        Game.inputKeys[key] = false; // Desativa a tecla solta
    }
});

animate();