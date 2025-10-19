const energyBar1: HTMLElement = document.getElementById('energyBar1')!;
const energyBar2: HTMLElement = document.getElementById('energyBar2')!;
const energyBarBackground: HTMLElement = document.getElementById('energyBarBackground')!;

export class SpBarManager {

    static setEnergyBar(percentage: string): void {
        energyBar1.style.width = percentage;
        energyBar2.style.width = percentage;
    }

}