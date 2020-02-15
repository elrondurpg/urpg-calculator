"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BattlePokemon_1 = require("./BattlePokemon");
class Trainer {
    constructor() {
        this.name = "Test";
        this.pokemon = new Array();
        this.activePokemon = new Array();
        // TODO active Pokemon depends on leads
    }
    initPokemon(numPokemon) {
        for (let i = 0; i < numPokemon; i++) {
            this.pokemon.push(new BattlePokemon_1.BattlePokemon());
        }
    }
    setPokemon() {
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