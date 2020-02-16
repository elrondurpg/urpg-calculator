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
const BattlePokemon_1 = require("./BattlePokemon");
const PokemonBuilder_1 = require("../builders/PokemonBuilder");
class Trainer {
    constructor(numPokemon) {
        this.name = "Test";
        this.pokemon = new Array();
        this.activePokemon = new Array();
        // TODO active Pokemon depends on leads
        for (let i = 0; i < numPokemon; i++) {
            this.pokemon.push(new BattlePokemon_1.BattlePokemon());
        }
    }
    loadPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.pokemon.length; i++) {
                this.pokemon[i] = yield new PokemonBuilder_1.PokemonBuilder(this.pokemon[i].name).build();
            }
        });
    }
    clone() {
        let trainer = new Trainer();
        trainer.name = this.name;
        this.pokemon.forEach(pokemon => {
            trainer.pokemon.push(pokemon.clone());
        });
        trainer.activePokemon = new Array();
        this.activePokemon.forEach(id => {
            trainer.activePokemon.push(id);
        });
        return trainer;
    }
}
exports.Trainer = Trainer;
//# sourceMappingURL=Trainer.js.map