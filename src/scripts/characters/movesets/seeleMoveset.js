class SeeleMoveset {
    static ultAccesed = false;
    static HandleInput(seele){
        let inputKeys = GameProperties.inputKeys;
        if (inputKeys.q){
            SeeleMoveset.#Ultimate(seele);
            
        } else if (inputKeys.l) {
            SeeleMoveset.#Dash();

        } else if (inputKeys.j) {
            SeeleMoveset.#BasicAttack();
        }
    }
    
    static #Ultimate(seele){
        if (seele.Energy >= 80 && GameProperties.allowUltimate){
            seele.Energy -= 80;
            seele.Energy = GameProperties.TreatNegativeValue(seele.Energy);
            GameProperties.usingUltimate = true;
            GameProperties.allowE = false
            GameProperties.allowMovement = false;
            SeeleAnimation.animation = 6;

            let percentage;
            if (seele.Energy <= seele.MaxEnergy){
                percentage = (100 / (seele.MaxEnergy / seele.Energy)).toFixed(0).toString() + "%";
            } else
                percentage = '100%';
            
            SpBarManager.SetEnergyBar(percentage);
            console.log(`Seele's Energy: ${seele.Energy}\n Seele's Max Energy: ${seele.MaxEnergy}\nPercentage: ${percentage}`)
        }
        
        GameProperties.allowUltimate = false;
    }

    static #Dash(){

    }

    static #BasicAttack(){


    }
}