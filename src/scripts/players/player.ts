import { Character } from "../characters/models/character";

export class Player {
    id : number;
    name : string;

    characters : Character[];
    activeCharacterIndex = 0;

    dx : number;
    dy : number;
    extendMap : number;

    directionLeft = false;
    directionRight = true;

    switchingWeapon = false;
    weaponActive = false;

    constructor(id : number, name : string, characters : Character[]) {
        this.id = id;
        this.name = name;
        this.dx = 0;
        this.dy = 0;
        this.characters = characters;
        this.extendMap = 0;
    }

    // drawPlayer(ctx : CanvasRenderingContext2D): void {
    //     ctx.drawImage(this.characters[this.activeCharacterIndex].characterFrameImg, this.dx, this.dy);
    // }

    // updateCharacterFrame(): void {
    //     this.characters[this.characters[this.activeCharacterIndex].updateFrame()];
    // }
    
}