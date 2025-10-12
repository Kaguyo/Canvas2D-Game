import { Player } from "../scripts/players/player.js";
import { Character } from "./characters/character";

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
canvas.width = 1920;
canvas.height = 1080;
const ctx = canvas.getContext('2d');

const canvasBackground = document.getElementById('canvasBackground') as HTMLCanvasElement;
canvasBackground.width = canvas.width;
canvasBackground.height = canvas.height;
const ctx2 = canvasBackground.getContext('2d');

const characters : Character[] = [];

characters.push(new Character(1, 35));

const player1 = new Player(1, "Kaguyo", characters);

function main(){
    player1.handleInput();
    requestAnimationFrame(main);
}

export { ctx };
export { ctx2 };

main();