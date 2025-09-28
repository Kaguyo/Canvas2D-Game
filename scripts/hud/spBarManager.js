const energyBar1 = document.getElementById('energyBar1');
const energyBar2 = document.getElementById('energyBar2');
const energyBarBackground = document.getElementById('energyBarBackground');

class SpBarManager {

    static SetEnergyBar(percentage){
        energyBar1.style.width = percentage;
        energyBar2.style.width = percentage;
    }

}