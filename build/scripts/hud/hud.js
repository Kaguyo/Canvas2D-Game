import { CharacterCard } from "./characterCard.js";
import { CharacterIcons } from "./characterIcon.js";
import { CharacterLevel } from "./characterLevel.js";
import { SpBarManager } from "./spBarManager.js";
export class Hud {
    static generateHud(ctx, player) {
        SpBarManager.trackEnergyBar(player.activeCharacter);
        CharacterCard.drawCard(ctx, 0, 0);
        CharacterIcons.drawCharacterIconBackground(ctx, 0, 0);
        CharacterIcons.generateCharacterIcon(ctx, 0, 0);
        CharacterLevel.drawLevel(ctx, 0, 0, player.getCharacterLevel());
    }
}
