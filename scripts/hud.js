class Hud {
    static selectedCharacterContainer = 0;
    static selectedEnemyContainer = 0;

    static update(indexCharacterContainer = 0, indexEnemyContainer = 0){
        Hud.selectedCharacterContainer = indexCharacterContainer;
        Hud.selectedEnemyContainer = indexEnemyContainer;
    }

    static draw(){
        ctx.drawImage(backgroundForCharacter1, 0, 0);
        ctx.drawImage(arrayCharacterContainers[Hud.selectedCharacterContainer], 0, 0);
        if (Seele.Level < 10){
            for (let i = 0; i < 10; i++){
                if (i.toString() == Seele.Level.toString()[0]){
                    ctx.drawImage(arrayStandardLevels[i], 0, -1);
                }
            }
        } else if (Seele.Level < 100){
            for (let i = 0; i < 10; i++){
                if (i.toString() == Seele.Level.toString()[0]){
                    ctx.drawImage(arrayStandardLevels[i], 0, -1);
                }
            }
            for (let i = 0; i < 10; i++){
                if (i.toString() == Seele.Level.toString()[1]){
                    ctx.drawImage(arrayStandardLevels[i], 25, -1);
                }
            }
        }  else if (Seele.Level < 1000) {
            for (let i = 0; i < 10; i++){
                if (i.toString() == Seele.Level.toString()[0]){
                    ctx.drawImage(arrayStandardLevels[i], 0, -1);
                }
            }
            for (let i = 0; i < 10; i++){
                if (i.toString() == Seele.Level.toString()[1]){
                    ctx.drawImage(arrayStandardLevels[i], 25, -1);
                }
            }
            for (let i = 0; i < 10; i++){
                if (i.toString() == Seele.Level.toString()[2]){
                    ctx.drawImage(arrayStandardLevels[i], 50, -1);
                }
            }
        }

        ctx.drawImage(seeleIcon1, 0, 0);
         
    }

}

// TOP OF -> Several images declaration and arrays of these images
const standard_lvl_1 = new Image();
standard_lvl_1.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_1.png';

const standard_lvl_2 = new Image();
standard_lvl_2.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_2.png';

const standard_lvl_3 = new Image();
standard_lvl_3.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_3.png';

const standard_lvl_4 = new Image();
standard_lvl_4.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_4.png';

const standard_lvl_5 = new Image();
standard_lvl_5.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_5.png';

const standard_lvl_6 = new Image();
standard_lvl_6.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_6.png';

const standard_lvl_7 = new Image();
standard_lvl_7.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_7.png';

const standard_lvl_8 = new Image();
standard_lvl_8.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_8.png';

const standard_lvl_9 = new Image();
standard_lvl_9.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_9.png';

const standard_lvl_0 = new Image();
standard_lvl_0.src = '../assets/hud/characterContainer/levelStyle/standard_lvl_0.png';

const arrayStandardLevels = [
    standard_lvl_0, standard_lvl_1, 
    standard_lvl_2, standard_lvl_3,
    standard_lvl_4, standard_lvl_5,
    standard_lvl_6, standard_lvl_7,
    standard_lvl_8, standard_lvl_9
];

const characterContainer1 = new Image();
characterContainer1.src = '../assets/hud/characterContainer/CardIcon.png';

const arrayCharacterContainers = [ characterContainer1 ];

const seeleIcon1 = new Image();
seeleIcon1.src = '../assets/hud/characterContainer/characterIcons/SeeleIcon1.png';

const arrayCharacterIcons = [
    seeleIcon1
];

const backgroundForCharacter1 = new Image();
backgroundForCharacter1.src = '../assets/hud/characterContainer/backgrounds/BackGroundDarkBlue.png';
// BOTTOM OF -> Several images declaration and arrays of these images