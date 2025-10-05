class Listeners {
    static Load(){
        document.addEventListener('keydown', (event) => {
            const key = event.key.toLowerCase();
            if (key in GameProperties.inputKeys && key != 'e') {
                GameProperties.inputKeys[key] = true; // Ativa a tecla pressionada

                if (key == 'a') {
                    GameProperties.inputKeys.d = false;
                } else if (key == 'd') {
                    GameProperties.inputKeys.a = false;
                }
            }
            if (key == 'e' && GameProperties.allowE){
                GameProperties.inputKeys[key] = true;
                GameProperties.allowE = false;
                Player.switchingWeapon = true;  
            }
        });

        document.addEventListener('keyup', (event) => {
            const key = event.key.toLowerCase();
            if (key === 'e')
                GameProperties.allowE = true;
            
            if (key in GameProperties.inputKeys) {
                GameProperties.inputKeys[key] = false; // Desativa a tecla solta
            }
        });

    }
}