class Hud {
    static selectedCharacterContainer = 0;
    static selectedEnemyContainer = 0;

    static update(indexCharacterContainer = 0, indexEnemyContainer = 0){
        Hud.selectedCharacterContainer = indexCharacterContainer;
        Hud.selectedEnemyContainer = indexEnemyContainer;
    }

    static draw(){
        ctx.drawImage(arrayCharacterContainers[Hud.selectedCharacterContainer], 0, 0);
        
    }

}

const characterContainer1 = new Image();
characterContainer1.src = '../assets/hud/characterContainer/CardIcon.png';

const arrayCharacterContainers = [ characterContainer1 ];