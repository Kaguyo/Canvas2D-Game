import { Player } from "../scripts/players/player.js";
import { Character } from "./characters/character";
import { GameProperties } from "./options/gameProperties.js";
import { Stage1 } from "./scenery/stage1.js";
const canvas = document.getElementById('canvas1');
canvas.width = 1920;
canvas.height = 1080;
const ctx = canvas.getContext('2d');
const canvasBackground = document.getElementById('canvasBackground');
canvasBackground.width = canvas.width;
canvasBackground.height = canvas.height;
const ctx2 = canvasBackground.getContext('2d');
GameProperties.ctx1 = ctx;
GameProperties.ctx2 = ctx2;
const characters = [];
characters.push(new Character(1, 35));
const player1 = new Player(1, "Kaguyo", characters);
function main() {
    player1.handleInput();
    Stage1.generateStage1(player1);
    player1.drawPlayer(ctx);
    player1.updateCharacterFrame();
    requestAnimationFrame(main);
}
export { ctx };
export { ctx2 };
main();
