class Characters {
    constructor(Id, Name, Age, Height, Weight, Gender, Weapon, MoveSet, Energy, EnergyMax, Level = 1,
    Exp = 0, ExpMax = 50){
        this.Id = Id;
        this.Name = Name;
        this.Age = Age;
        this.Height = Height;
        this.Weight = Weight;
        this.Gender = Gender;
        this.Weapon = Weapon;
        this.MoveSet = MoveSet;
        this.Energy = Energy;
        this.MaxEnergy = EnergyMax;
        this.Level = Level;
        this.Exp = Exp;
        this.ExpMax = ExpMax;
        this.Hp = this.HpMax;
        this.Atk = this.AtkMax;
        this.Def = this.DefMax;
    } 
    // ! Auto Define stats based on level !
    set ExpMax(value){
       this._ExpMax = value;
    }
    get ExpMax(){
        let count5levels = 1;
        let justifyExp = 1;
        let hardLevels = 0;
        this._ExpMax = 10;
        for (let i = 1; i < this.Level; i++){
            if (i < 21) this._ExpMax = this._ExpMax * 1.2 + 10; 
            else if (i < 41) this._ExpMax = this._ExpMax * 1.15; 
            else if (i < 71) this._ExpMax = this._ExpMax * 1.10;  
            else if (i < 91) this._ExpMax = this._ExpMax * 1.05; 
            else this._ExpMax *= 1.01;

            if (i % 5 == 0 && i < 56){
                count5levels++;
                this._ExpMax *= 1 + (count5levels / 15);
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
    get HpMax(){
        let countDecimal = 0;
        this._HpMax = 0;
        let i = 0;
        if (this.Id == 1 && this.Name == "Seele"){
            for (i; i < this.Level; i++){
                this._HpMax += (30 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2 && this.Name == "Keqing"){
            for (i; i < this.Level; i++){
                this._HpMax += (32 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }
        
        return parseInt(this._HpMax);
    }
    get AtkMax(){
        let countDecimal = 0;
        this._AtkMax = 0;
        let i = 0;
        if (this.Id == 1 && this.Name == "Seele"){
            for (i = 0; i < this.Level; i++){
                this._AtkMax += (9.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2 && this.Name == "Keqing"){
            for (i = 0; i < this.Level; i++){
                this._AtkMax += (8.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }

        return parseInt(this._AtkMax);
    }
    get DefMax(){
        let countDecimal = 0;
        this._DefMax = 0;
        let i = 0;
        if (this.Id == 1 && this.Name == "Seele"){
            for (i = 0; i < this.Level; i++){
                this._DefMax += (13.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2 && this.Name == "Keqing"){
            for (i = 0; i < this.Level; i++){
                this._DefMax += (12.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }

        return parseInt(this._DefMax);
    }
    // END ! Auto Define stats based on level !

    static TakeDamage(damagedCharacter, damage){
        damagedCharacter.Hp -= damage;
        if (damagedCharacter.Hp < 0) 
            damagedCharacter.Hp = 0;
        document.getElementById("healthBar1").style.width = ((damagedCharacter.Hp / damagedCharacter.HpMax) * 100) + "%";
        document.getElementById("healthBar2").style.width = ((damagedCharacter.Hp / damagedCharacter.HpMax) * 100) + "%";
        document.getElementById("healthBar3").style.width = ((damagedCharacter.Hp / damagedCharacter.HpMax) * 100) + "%";
        if (((damagedCharacter.Hp / damagedCharacter.HpMax) * 100) <= 15.0){
            document.getElementById("healthBar1").classList.remove("yellow");
            document.getElementById("healthBar2").classList.remove("yellow");
            document.getElementById("healthBar3").classList.remove("yellow");
            document.getElementById("healthBarBackground").classList.remove("yellow");
            document.getElementById("healthBar1").classList.add("red");
            document.getElementById("healthBar2").classList.add("red");
            document.getElementById("healthBar3").classList.add("red");
            document.getElementById("healthBarBackground").classList.add("red");
        } else if (((damagedCharacter.Hp / damagedCharacter.HpMax) * 100) <= 40.0){
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
            document.getElementById("healthBloodBar").style.width = ((damagedCharacter.Hp / damagedCharacter.HpMax) * 100) + "%";
        }, 300);
    }

    static UpdateExp(expGained = 0){
        Seele.Exp += expGained;
        if (Seele.Exp >= Seele.ExpMax){
            Seele.Exp -= Seele.ExpMax;
            document.getElementById('expBar1').style.width = ((Seele.Exp / Seele.ExpMax) * 100) + "%";
            Seele.Level ++;
            console.log("SEELE EXP: ", Seele.Exp, "/", Seele.ExpMax);
        }
        else
            document.getElementById('expBar1').style.width = ((Seele.Exp / Seele.ExpMax) * 100) + "%";
    }
}
let hardLevelsArray = [110, 115, 120, 130];
let increaseExpNeeded_array = [3, 10, 18, 28, 36, 46, 54, 64, 82, 92, 100];

let justifyStats = [10,20,30,40,50,60,64,70,75,80,85,90,95,100,101,102,103,104,105,110,115,120,130];

const Seele = new Characters(1, "Seele", 23, "1.67 m", "63 kg", "Female", {}, [], 40, 40, 30);
const Keqing = new Characters(2, "Keqing", 19, "1.64 m", "58 kg", "Female", {}, [], 0, 40, 100)

console.log(Keqing.Atk);
console.log(Seele.Hp);

console.log(`Keqing Lvl: ${Keqing.Level}`);
console.log(`Keqing Exp: ${Keqing.Exp}/${Keqing.ExpMax}`);

console.log(`\nSeele Lvl: ${Seele.Level}`);
console.log(`Seele Exp: ${Seele.Exp}/${Seele.ExpMax}`);
