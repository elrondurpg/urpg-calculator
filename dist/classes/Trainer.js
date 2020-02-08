"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BattlePokemon_1 = require("./BattlePokemon");
class Trainer {
    constructor() {
        this.pokemon = new Array();
        this.activePokemon = new Array();
        // TODO active Pokemon depends on leads
    }
    initPokemon(numPokemon) {
        for (let i = 0; i < numPokemon; i++) {
            this.pokemon.push(new BattlePokemon_1.BattlePokemon());
        }
    }
    getPokemon(id) {
        console.log("searching for a Pokemon with id " + id);
        this.pokemon.forEach(pkmn => {
            console.log("checking Pokemon:");
            console.log(pkmn);
            if (pkmn.getId() == id) {
                return pkmn;
            }
        });
    }
    setPokemon() {
    }
    clone() {
        let trainer = new Trainer();
        trainer.name = this.name;
        this.pokemon.forEach(pokemon => {
            trainer.pokemon.push(pokemon.clone());
        });
        return trainer;
    }
}
exports.Trainer = Trainer;
//# sourceMappingURL=Trainer.js.map