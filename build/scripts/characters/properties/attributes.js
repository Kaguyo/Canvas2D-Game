const justifyStats = [
    10, 20, 30, 40, 50,
    60, 70, 80, 90, 100,
    110, 120, 130, 140, 150,
    160, 170, 180, 190, 200
];
export class Attributes {
    constructor(id, level = 1) {
        this.id = id;
        this.level = level;
        this.hpBase = 0;
        this.atkBase = 0;
        this.defBase = 0;
        this.hpBuild = 0;
        this.atkBuild = 0;
        this.defBuild = 0;
        this.hp = this.hpBuild;
        this.atk = this.atkBuild;
        this.def = this.defBuild;
        this.speed = this.speed;
    }
    artifacts = [[{ hp: 322 }, { atkPercentage: 40 }], [{ hp: 322 }], [{ hp: 322 }, { hp: 322 }, { hp: 322 }, { hp: 322 }]];
    // private fields region
    _hp = 0;
    _atk = 0;
    _def = 0;
    _hpBase = 0;
    _atkBase = 0;
    _defBase = 0;
    _hpBuild = 0;
    _atkBuild = 0;
    _defBuild = 0;
    _expMax = 0;
    _energyMax = 0;
    _speed = 0;
    // public fields region
    id;
    level;
    energy = 22000;
    energyRecharge = 0;
    exp = 0;
    vfx;
    hasWeapon = false;
    equipedWeapon = false;
    switchingWeapon = false;
    // private setters
    set speed(value) {
        this._speed = value;
    }
    set hpBase(value) {
        this._hpBase = value;
    }
    set atkBase(value) {
        this._atkBase = value;
    }
    set defBase(value) {
        this._defBase = value;
    }
    set hpBuild(value) {
        this._hpBuild = value;
    }
    set atkBuild(value) {
        this._atkBuild = value;
    }
    set defBuild(value) {
        this._defBuild = value;
    }
    set expMax(value) {
        this._expMax = value;
    }
    set energyMax(value) {
        this._energyMax = value;
    }
    // public getters
    get speed() {
        if (this.id == 1)
            this.speed = 20;
        else if (this.id == 2)
            this.speed = 30;
        else if (this.id == 3)
            this.speed = 20;
        else if (this.id == 4)
            this.speed = 18;
        return Number.parseInt(this._speed.toString(), 10);
    }
    set atk(value) { this._atk = value; }
    get atk() { return Number.parseInt(this._atk.toString(), 10); }
    set hp(value) { this._hp = value; }
    get hp() { return Number.parseInt(this._hp.toString(), 10); }
    set def(value) { this._def = value; }
    get def() { return Number.parseInt(this._def.toString(), 10); }
    get hpBase() {
        let countDecimal = 0;
        this._hpBase = 0;
        let i = 0;
        if (this.id == 1) {
            for (i; i < this.level; i++) {
                this._hpBase += (30 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i))
                    countDecimal++;
            }
        }
        else if (this.id == 2) {
            for (i; i < this.level; i++) {
                this._hpBase += (32 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i))
                    countDecimal++;
            }
        }
        else if (this.id == 3) {
            for (i; i < this.level; i++) {
                this._hpBase += (38 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i))
                    countDecimal++;
            }
        }
        return Number.parseInt(this._hpBase.toString(), 10);
    }
    get atkBase() {
        let countDecimal = 0;
        this._atkBase = 0;
        if (this.id == 1) {
            for (let i = 0; i < this.level; i++) {
                this._atkBase += (9.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i))
                    countDecimal++;
            }
        }
        else if (this.id == 2) {
            for (let i = 0; i < this.level; i++) {
                this._atkBase += (8.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i))
                    countDecimal++;
            }
        }
        else if (this.id == 3) {
            for (let i = 0; i < this.level; i++) {
                this._atkBase += (12.6 * (1 + (countDecimal / 1.15)));
                if (justifyStats.includes(i))
                    countDecimal++;
            }
        }
        return Number.parseInt(this._atkBase.toString(), 10);
    }
    get defBase() {
        let countDecimal = 0;
        this._defBase = 0;
        if (this.id == 1) {
            for (let i = 0; i < this.level; i++) {
                this._defBase += (13.2 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i))
                    countDecimal++;
            }
        }
        else if (this.id == 2) {
            for (let i = 0; i < this.level; i++) {
                this._defBase += (12.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i))
                    countDecimal++;
            }
        }
        else if (this.id == 3) {
            for (let i = 0; i < this.level; i++) {
                this._defBase += (13.6 * (1 + (countDecimal / 1.25)));
                if (justifyStats.includes(i))
                    countDecimal++;
            }
        }
        return Number.parseInt(this._defBase.toString(), 10);
    }
    get hpBuild() {
        let buildHpStats = 0;
        for (let i = 0; i < this.artifacts.length; i++) {
            const artifact = this.artifacts[i];
            if (!artifact) {
                continue;
            }
            for (let j = 0; j < artifact.length; j++) {
                if (artifact[j]?.hp != undefined) {
                    buildHpStats += artifact[j].hp;
                }
                else if (artifact[j]?.hpPercentage != undefined) {
                    buildHpStats += this.hpBase * artifact[j]?.hpPercentage;
                }
                this._hpBuild = (buildHpStats + this.hpBase);
            }
        }
        return Number.parseInt(this._hpBuild.toString(), 10);
    }
    get atkBuild() {
        let buildAtkStats = 0;
        for (let i = 0; i < this.artifacts.length; i++) {
            const artifact = this.artifacts[i];
            if (!artifact) {
                continue;
            }
            for (let j = 0; j < artifact.length; j++) {
                if (artifact[j]?.atk != null) {
                    buildAtkStats += artifact[j]?.atk;
                }
                else if (artifact[j]?.atkPercentage != null) {
                    buildAtkStats += this.atkBase * artifact[j]?.atkPercentage / 100;
                }
                this._atkBuild = buildAtkStats + this.atkBase;
            }
        }
        return Number.parseInt(this._atkBuild.toString(), 10);
    }
    get defBuild() {
        let buildDefStats = 0;
        for (let i = 0; i < this.artifacts.length; i++) {
            const artifact = this.artifacts[i];
            if (!artifact) {
                continue;
            }
            for (let j = 0; j < artifact.length; j++) {
                if (artifact[j]?.def != undefined) {
                    buildDefStats += artifact[j]?.def;
                }
                else if (artifact[j]?.defPercentage != undefined) {
                    buildDefStats += this.defBase * artifact[j]?.defPercentage;
                }
                this._defBuild = buildDefStats + this.defBase;
            }
        }
        return Number.parseInt(this._defBuild.toString(), 10);
    }
    get expMax() {
        let countDecimal = 0;
        this._expMax = 0;
        for (let i = 0; i < this.level; i++) {
            this._expMax += (100 * (1 + (countDecimal / 1.25)));
            if (justifyStats.includes(i))
                countDecimal++;
        }
        return Number.parseInt(this._expMax.toString(), 10);
    }
    get energyMax() {
        if (this.id == 1)
            this.energyMax = 80;
        else if (this.id == 2)
            this.energyMax = 40;
        return Number.parseInt(this._energyMax.toString(), 10);
    }
}
