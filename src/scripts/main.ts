import { Player } from "../scripts/players/player.js";
import { Character } from "../scripts/characters/models/character.js";

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

console.log(player1.characters[0].hp);
console.log(player1.characters[0].atk);
console.log(player1.characters[0].def);
player1.characters[0].atk *= 1.5;
player1.characters[0].hp *= 1.22;
player1.characters[0].def *= 1.23;
console.log("ENHANCED HP!: " + player1.characters[0].hp)
console.log("ENHANCED ATK!: " + player1.characters[0].atk)
console.log("ENHANCED DEF!: " + player1.characters[0].def)


function main(){

    requestAnimationFrame(main);
}

main();