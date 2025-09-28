class SeeleMoveset {
    static HandleInput(){
        let inputKeys = GameProperties.inputKeys;
        if (inputKeys.q){
            SeeleMoveset.#Ultimate();
            
        } else if (inputKeys.l) {
            SeeleMoveset.#Dash();

        } else if (inputKeys.j) {
            SeeleMoveset.#BasicAttack();
        }
    }
    
    static #Ultimate(){
        GameProperties.usingUltimate = true;
        GameProperties.allowE = false
        GameProperties.allowMovement = false;
        SeeleAnimation.animation = 6;
    }

    static #Dash(){

    }

    static #BasicAttack(){


    }
}