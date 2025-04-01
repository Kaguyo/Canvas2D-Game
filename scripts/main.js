const canvas = document.getElementById('canvas1');
canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext('2d');

const canvasBackground = document.getElementById('canvasBackground');
canvasBackground.width = canvas.width;
canvasBackground.height = canvas.height;

const ctx2 = canvasBackground.getContext('2d');

const inputKeys = {
    w : false,
    a : false,
    s : false,
    d : false,
    q : false,
    e : false,
    l : false
}


const player1 = createPlayer(new Character(1, 100));
let selectedPlayer = player1;

function animate(){
    ctx2.clearRect(0, 0, canvasBackground.width, canvasBackground.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Background.generateBackground();
    Player.handleInput(inputKeys, selectedPlayer);
    Player.update(selectedPlayer);
    Player.draw(selectedPlayer);

    requestAnimationFrame(animate);
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key in inputKeys) {
        inputKeys[key] = true;
    }
});

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (key in inputKeys) {
        inputKeys[key] = false;
    }
});



animate();