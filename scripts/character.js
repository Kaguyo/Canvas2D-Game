class Character {
    constructor(Id, Name, Level = 1) {
        this.Id = Id;
        this.Name = Name;
        this.Level = Level;
        this.Hp = this.HpBase;
        this.Atk = this.AtkBase;
        this.Def = this.DefBase;
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
}

const justifyStats = [
    5, 7, 10, 13, 16, 21, 24, 27, 30, 35, 40, 47, 55, 64,
    72, 78, 84, 89, 96, 100
];