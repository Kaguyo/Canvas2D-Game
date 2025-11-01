export class GutsAnimation {
    setAnimation(arg0) {
        throw new Error("Method not implemented.");
    }
    constructor() {
    }
    // private fields region
    animationMap = {};
    animationNumber = 1; // 1: idle, 2: running, 3: jumping, 4: crouch, 5: dash, 6: ultimate
    // public methods region
    getFrame(player) {
        let frame = new Image();
        frame = this.animationMap[this.animationNumber].call(player.activeCharacter.animationSet, player);
        return frame;
    }
    // public fields region
    ultimateAnimation = {};
}
