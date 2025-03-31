const canvas = document.getElementById('canvas1');
canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext('2d');

const canvasBackground = document.getElementById('canvasBackground');
canvasBackground.width = canvas.width;
canvasBackground.height = canvas.height;

const ctx2 = canvasBackground.getContext('2d');


function animate(){
    Background.generateBackground();
    
    requestAnimationFrame(animate);
}

createPlayer(new Character(1, 100));
animate();