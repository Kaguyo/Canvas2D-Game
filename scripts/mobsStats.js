class Mobs {
    constructor(Id, Name, Age, Height, Weight, Gender, Weapon, MoveSet, Energy, EnergyMax, Level = 1) {
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
        this.Hp = this.HpMax;
        this.Atk = this.AtkMax;
        this.Def = this.DefMax;
    } 
    // ! Auto Define stats based on level !

    get HpMax(){
        let countDecimal = 0;
        this._HpMax = 0;
        let i = 0;
        if (this.Id == 1 && this.Name == "Generic1"){
            for (i; i < this.Level; i++){
                this._HpMax += (30 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2 && this.Name == "Elite1"){
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
        if (this.Id == 1 && this.Name == "Generic1"){
            for (i = 0; i < this.Level; i++){
                this._AtkMax += (9.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2 && this.Name == "Elite1"){
            for (i = 0; i < this.Level; i++){
                this._AtkMax += (8.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }

        return parseInt(this._AtkMax);
    }
    get DefMax() {
        let countDecimal = 0;
        this._DefMax = 0;
        let i = 0;
        if (this.Id == 1 && this.Name == "Generic1"){
            for (i = 0; i < this.Level; i++){
                this._DefMax += (13.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;  
            }
        } else if (this.Id == 2 && this.Name == "Elite1"){
            for (i = 0; i < this.Level; i++){
                this._DefMax += (12.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i)) countDecimal++;
            }
        }

        return parseInt(this._DefMax);
    }

    takeDamage(UserAtk, UserMultiplier, UserName){
        UserAtk -= this.Def;
        UserAtk *= UserMultiplier;
        if (UserAtk <= 0)
            UserAtk = 1;
        console.log(`${UserName} causou ${UserAtk} de dano em ${this.Name}`);
        this.Hp -= UserAtk;
        if (this.Hp < 0){
            this.Hp = 0;
            Generic1.speed = 0;
            Seele.Exp += this.HpMax * 10;
        }
        console.log(`Vida de ${this.Name} restante: ${this.Hp}/${this.HpMax}`);
    }
}