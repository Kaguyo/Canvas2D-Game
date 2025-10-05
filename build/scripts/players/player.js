export class Player {
    id;
    name;
    characters;
    activeCharacterIndex = 0;
    dx;
    dy;
    extendMap;
    directionLeft = false;
    directionRight = true;
    switchingWeapon = false;
    weaponActive = false;
    constructor(id, name, characters) {
        this.id = id;
        this.name = name;
        this.dx = 0;
        this.dy = 0;
        this.characters = characters;
        this.extendMap = 0;
    }
}
