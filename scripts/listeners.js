class Listeners {
    static Load(){
        document.addEventListener('keydown', (event) => {
            const key = event.key.toLowerCase();
            if (key in Game.inputKeys && key != 'e') {
                Game.inputKeys[key] = true; // Ativa a tecla pressionada

                if (key == 'a') {
                    Game.inputKeys.d = false;
                } else if (key == 'd') {
                    Game.inputKeys.a = false;
                }
            }
            if (key == 'e' && Game.allowE){
                Game.inputKeys[key] = true;
                Game.allowE = false;
            }
        });

        document.addEventListener('keyup', (event) => {
            const key = event.key.toLowerCase();
            if (key === 'e')
                Game.allowE = true;
            
            if (key in Game.inputKeys) {
                Game.inputKeys[key] = false; // Desativa a tecla solta
            }
        });

    }
}