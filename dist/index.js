"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UrpgClientBuilder_1 = require("./builders/UrpgClientBuilder");
const PokemonBuilder_1 = require("./builders/PokemonBuilder");
class UrpgCalculator {
    constructor() {
        this.server = UrpgClientBuilder_1.UrpgClientBuilder.getInstance();
    }
    initialize() {
        this.loadPokemonNames();
        this.loadAttackNames();
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
    loadAttackNames() {
        this.server.attack.get().then((data) => {
            this.attackNames = data;
        });
    }
}
exports.UrpgCalculator = UrpgCalculator;
module.exports.UrpgCalculator = UrpgCalculator;
test();
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        let pokemon = yield new PokemonBuilder_1.PokemonBuilder("Orbeetle").build();
        console.log("Orbeetle: ");
        console.log(pokemon);
    });
}
//# sourceMappingURL=index.js.map