"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urpg_js_1 = require("urpg.js");
class UrpgCalculator {
    constructor() {
        this.server = new urpg_js_1.UrpgClient();
    }
    initialize() {
        this.loadPokemonNames();
    }
    loadPokemonNames() {
        this.server.pokemon.get().then((data) => {
            this.pokemonNames = data;
            /*if (this.constants.debug) {
              this.battle['teams'][0]['trainers'][0]['pokemon'][0]['name'] = "Ampharos";
              this.battle['teams'][1]['trainers'][0]['pokemon'][0]['name'] = "Typhlosion";
            }*/
        });
    }
    print() {
        this.battle.print();
    }
}
exports.UrpgCalculator = UrpgCalculator;
module.exports.UrpgCalculator = UrpgCalculator;
//# sourceMappingURL=index.js.map