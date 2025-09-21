class Character {
    constructor(Id, Level = 1, Name) {
        this.Id = Id;
        this.Level = Level;
        this.Hp = this.HpBase;
        this.Atk = this.AtkBase;
        this.Def = this.DefBase;
        this.Energy = 2000;
        this.MaxEnergy = this.MaxEnergy;
        this.Name = Name;
        this.Exp =  0;
        this.Speed = 25;
        this.Weapon = { id: 0, name: "Weapon1", atk: 0, level: 0 };
        this.characterFrame = new Image();
        this.vfxFrames = new Image();
        this.hasWeapon = false;
        this.switchingWeapon = false;
    }

    set MaxEnergy(value){
        this._MaxEnergy = value;
    }
    get MaxEnergy(){
        if (this.Name == "Seele")
            return 80;
    }

    get HpBase(){
        let countDecimal = 0;
        let _HpBase = 0;
        let i = 0;
        if (this.Id == 1){
            for (i; i < this.Level; i++){
                _HpBase += (30 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;  
            }
        } else if (this.Id == 2){
            for (i; i < this.Level; i++){
                _HpBase += (32 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        } else if (this.Id == 3){
            for (i; i < this.Level; i++){
                _HpBase += (38 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }
        
        return parseInt(_HpBase);
    }

    get AtkBase() {
        let countDecimal = 0;
        let _AtkBase = 0;
        if (this.Id == 1){
            for (let i = 0; i < this.Level; i++){
                _AtkBase += (9.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;  
            }
        } else if (this.Id == 2){
            for (let i = 0; i < this.Level; i++){
                _AtkBase += (8.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }
        else if (this.Id == 3){
            for (let i = 0; i < this.Level; i++){
                _AtkBase += (12.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }

        return parseInt(_AtkBase);
    }
    
    get DefBase() {
        let countDecimal = 0;
        let _DefBase = 0;
        if (this.Id == 1){
            for (let i = 0; i < this.Level; i++){
                _DefBase += (13.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;  
            }
        } else if (this.Id == 2){
            for (let i = 0; i < this.Level; i++){
                _DefBase += (12.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }  else if (this.Id == 3){
            for (let i = 0; i < this.Level; i++){
                _DefBase += (13.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) 
                    countDecimal++;
            }
        }

        return parseInt(_DefBase);
    }

    get ExpMax() {
        let _ExpMax = 0;
        for (let i = 0; i < this.Level; i++){
            _ExpMax += (100 * (1 + (countDecimal / 1.25)));
            if (justifyStats.includes(i)) 
                countDecimal++;

        }
    }

    get FrameImg(){
        if (this.Id == 1)
            return Seele.getSeeleFrame();
        
    }

    action(inputKeys, player) {
        this.#specificAction(inputKeys, player);
    }

    #equipWeapon(character){
        character.hasWeapon = !character.hasWeapon;
    }
    
    #specificAction(inputKeys, player) {
        const { w, a, s, d, l, j, k, i, e, q } = inputKeys;

        if ((w || a || s || d || l) && GameProperties.allowMovement) {
            Player.move(inputKeys, player);
        } if ((j || k || i || q ) && !GameProperties.usingUltimate && player.characters[0].Energy >= player.characters[0].MaxEnergy) {
            player.characters[0].#attack(inputKeys, player);
            GameProperties.usingUltimate = true;

        } if (Player.switchingWeapon) {
            player.characters[0].#equipWeapon(player.characters[0]);
        }
    }   
    
    #attack(inputKeys, player){
        if (inputKeys.q && player.characters[0].Energy >= player.characters[0].MaxEnergy){ 
            console.log("Special Attack");
            player.characters[0].Energy = 0;
            GameProperties.allowMovement = false;
        }
    }
}

const justifyStats = [
    10, 20, 30, 40, 50,
    60, 70, 80, 90, 100,
    110, 120, 130, 140, 150,
    160, 170, 180, 190, 200
];