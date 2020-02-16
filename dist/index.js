"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UrpgClientBuilder_1 = require("./builders/UrpgClientBuilder");
class UrpgBattleService {
    constructor() {
        this.server = UrpgClientBuilder_1.UrpgClientBuilder.getInstance();
        this.loadPokemonNames();
        this.loadAttackNames();
    }
    loadPokemonNames() {
        this.server.pokemon.get().then((data) => {
            this.pokemonNames = data;
        });
    }
    loadAttackNames() {
        this.server.attack.get().then((data) => {
            this.attackNames = data;
        });
    }
}
exports.UrpgBattleService = UrpgBattleService;
module.exports.UrpgBattleService = UrpgBattleService;
//# sourceMappingURL=index.js.map