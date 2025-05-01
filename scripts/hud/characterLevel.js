const standardLevel0 = new Image();
standardLevel0.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_0.png";
const standardLevel1 = new Image();
standardLevel1.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_1.png";
const standardLevel2 = new Image();
standardLevel2.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_2.png";
const standardLevel3 = new Image();
standardLevel3.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_3.png";
const standardLevel4 = new Image();
standardLevel4.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_4.png";
const standardLevel5 = new Image();
standardLevel5.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_5.png";
const standardLevel6 = new Image();
standardLevel6.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_6.png";
const standardLevel7 = new Image();
standardLevel7.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_7.png";
const standardLevel8 = new Image();
standardLevel8.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_8.png";
const standardLevel9 = new Image();
standardLevel9.src = "../../assets/hud/characterContainer/customText/characterLevels/standard_lvl_9.png";

const standardLevelSymbols = [
    standardLevel0, standardLevel1, standardLevel2,
    standardLevel3, standardLevel4, standardLevel5,
    standardLevel6, standardLevel7, standardLevel8,
    standardLevel9
];

class CharacterLevel {
    static drawLevel(ctx, dx, dy, characterLevel){
        ctx.drawImage(standardLevelSymbols[0], dx, dy);
    }
}