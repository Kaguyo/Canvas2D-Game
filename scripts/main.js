const canvas = document.getElementById('canvas1');
canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext('2d');

const canvasBackground = document.getElementById('canvasBackground');
canvasBackground.width = canvas.width;
canvasBackground.height = canvas.height;

const ctx2 = canvasBackground.getContext('2d');

const Player1 = new Player(1, "Kaguyo", 500, 630, [new Character(1, 88, "Seele")]);

function animate(){
    ctx2.clearRect(0, 0, canvasBackground.width, canvasBackground.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Background.generateBackground();
    CharacterIcons.drawCharacterIconBackground(ctx, 0, 0);
    CharacterCard.drawCard(ctx, 0, 0);
    CharacterIcons.generateCharacterIcon(ctx, 0, 0);
    CharacterLevel.drawLevel(ctx, 0, 0, Player1.characters[0].Level);
    
    Player.drawPlayer(ctx, Player1.dx, Player1.dy, Player1.characters);
    Player.updateCharacterFrame(Player1.characters);

    Player1.handleInput(Game.inputKeys);
    
    requestAnimationFrame(animate);
}

Listeners.Load();

animate();