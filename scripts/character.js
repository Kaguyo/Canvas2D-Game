class Character {
    constructor(Id, Name, Level = 1) {
        this.Id = Id;
        this.Name = Name;
        this.Level = Level;
        this.Hp = this.HpBase;
        this.Atk = this.AtkBase;
        this.Def = this.DefBase;
        this.Exp =  0;
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

    get Frame(){
        if (this.Id == 1)
            return Seele.generateSeeleFrame();
        
    }
}

const justifyStats = [
    10, 20, 30, 40, 50,
    60, 70, 80, 90, 100,
    110, 120, 130, 140, 150,
    160, 170, 180, 190, 200
];