class Character {
    constructor(Id, Level = 1) {
        this.Id = Id;
        this.Level = Level;
        this.Hp = this.HpBase;
        this.Atk = this.AtkBase;
        this.Def = this.DefBase;
        this.Exp = 0;
        this.Energy = 0;
    }
    CurrentFrameImg = new Image();

    get CharacterAnimationsObj() {
        if (this.Id == 1) this._CharacterAnimationObj = Seele.GetSeeleSpritesObj();
        else if (this.Id == 2) this._CharacterAnimationObj = Keqing.GetKeqingSpritesObj();
        else if (this.Id == 3) this._CharacterAnimationObj = Gohan.GetGohanSpritesObj();
        return this._CharacterAnimationObj;
    }  

    get Speed() {
        if (this.Id == 1) this._Speed = 20;
        else if (this.Id == 2) this._Speed = 20;
        else if (this.Id == 3) this._Speed = 40;
        return this._Speed;
    }

    get EnergyMax() {
        if (this.Id == 1) this._EnergyMax = 60;
        else if (this.Id == 2) this._EnergyMax = 40;
        else if (this.Id == 3) this._EnergyMax = 80;
        return this._EnergyMax;
    }

    get Name() {
        if (this.Id == 1) this._Name = "Seele";
        else if (this.Id == 2) this._Name = "Keqing";
        else if (this.Id == 3) this._Name = "Gohan";
        return this._Name;
    }

    get ExpMax() {
        let count5levels = 1;
        let justifyExp = 1;
        let hardLevels = 0;
        this._ExpMax = 10;
        for (let i = 1; i < this.Level; i++){
            if (i < 21) this._ExpMax = this._ExpMax * 1.15 + 10; 
            else if (i < 41) this._ExpMax = this._ExpMax * 1.10; 
            else if (i < 71) this._ExpMax = this._ExpMax * 1.05;  
            else if (i < 91) this._ExpMax = this._ExpMax * 1.02; 
            else this._ExpMax *= 1.01;

            if (i % 5 == 0 && i < 56){
                count5levels++;
                this._ExpMax *= 1 + (count5levels / 25);
            }
            if (increaseExpNeeded_array.includes(i)){
                justifyExp += 0.1;
                this._ExpMax *= justifyExp;
            }
            if (hardLevelsArray.includes(i)){
                hardLevels += 0.01;
                this._ExpMax *= hardLevels + 1;
            }
        }
        
        return parseInt(this._ExpMax);
    }
    get HpBase(){
        let countDecimal = 0;
        this._HpBase = 0;
        let i = 0;
        if (this.Id == 1){
            for (i; i < this.Level; i++){
                this._HpBase += (30 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2){
            for (i; i < this.Level; i++){
                this._HpBase += (32 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        } else if (this.Id == 3){
            for (i; i < this.Level; i++){
                this._HpBase += (38 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }
        
        return parseInt(this._HpBase);
    }

    get AtkBase() {
        let countDecimal = 0;
        this._AtkBase = 0;
        let i = 0;
        if (this.Id == 1){
            for (i = 0; i < this.Level; i++){
                this._AtkBase += (9.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2){
            for (i = 0; i < this.Level; i++){
                this._AtkBase += (8.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }
        else if (this.Id == 3){
            for (i = 0; i < this.Level; i++){
                this._AtkBase += (12.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }

        return parseInt(this._AtkBase);
    }
    
    get DefBase() {
        let countDecimal = 0;
        this._DefBase = 0;
        let i = 0;
        if (this.Id == 1){
            for (i = 0; i < this.Level; i++){
                this._DefBase += (13.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2){
            for (i = 0; i < this.Level; i++){
                this._DefBase += (12.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }  else if (this.Id == 3){
            for (i = 0; i < this.Level; i++){
                this._DefBase += (13.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }

        return parseInt(this._DefBase);
    }

    static TakeDamage(damagedCharacter, damage){
        damagedCharacter.Hp -= damage;
        if (damagedCharacter.Hp < 0) 
            damagedCharacter.Hp = 0;
        document.getElementById("healthBar1").style.width = ((damagedCharacter.Hp / damagedCharacter.HpBase) * 100) + "%";
        document.getElementById("healthBar2").style.width = ((damagedCharacter.Hp / damagedCharacter.HpBase) * 100) + "%";
        document.getElementById("healthBar3").style.width = ((damagedCharacter.Hp / damagedCharacter.HpBase) * 100) + "%";
        if (((damagedCharacter.Hp / damagedCharacter.HpBase) * 100) <= 15.0){
            document.getElementById("healthBar1").classList.remove("yellow");
            document.getElementById("healthBar2").classList.remove("yellow");
            document.getElementById("healthBar3").classList.remove("yellow");
            document.getElementById("healthBarBackground").classList.remove("yellow");
            document.getElementById("healthBar1").classList.add("red");
            document.getElementById("healthBar2").classList.add("red");
            document.getElementById("healthBar3").classList.add("red");
            document.getElementById("healthBarBackground").classList.add("red");
        } else if (((damagedCharacter.Hp / damagedCharacter.HpBase) * 100) <= 40.0){
            document.getElementById("healthBar1").classList.add("yellow");
            document.getElementById("healthBar2").classList.add("yellow");
            document.getElementById("healthBar3").classList.add("yellow");
            document.getElementById("healthBarBackground").classList.add("yellow");
            document.getElementById("healthBar1").classList.remove("red");
            document.getElementById("healthBar2").classList.remove("red");
            document.getElementById("healthBar3").classList.remove("red");
            document.getElementById("healthBarBackground").classList.remove("red");
        }
        setInterval(() => {
            document.getElementById("healthBloodBar").style.width = ((damagedCharacter.Hp / damagedCharacter.HpBase) * 100) + "%";
        }, 300);
    }

    static UpdateExp(expGained = 0) {

        document.getElementById('expBar1').style.width = ((Seele.Exp / Seele.ExpMax) * 100) + "%";
    }
}

let hardLevelsArray = [110, 115, 120, 130, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500];
let increaseExpNeeded_array = [3, 10, 18, 28, 36, 46, 54, 64, 82, 92, 100];

let justifyStats = [10,20,30,40,50,60,60,70,75,80,85,90,95,100,101,102,103,104,105,110,115,120,130,140,
    150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300
];
