const energyBar1 = document.getElementById('energyBar1');
const energyBar2 = document.getElementById('energyBar2');
// const energyBarBackground: HTMLElement = document.getElementById('energyBarBackground')!;
export class SpBarManager {
    static setEnergyBar(percentage) {
        energyBar1.style.width = percentage;
        energyBar2.style.width = percentage;
    }
    static trackEnergyBar(character) {
        let percentage = ((character.attribute.energy / character.attribute.energyMax) * 100) + "%";
        SpBarManager.setEnergyBar(percentage);
    }
}
