"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BattlePokemon_1 = require("../classes/BattlePokemon");
const UrpgClientBuilder_1 = require("./UrpgClientBuilder");
class PokemonBuilder {
    constructor(name) {
        this.server = UrpgClientBuilder_1.UrpgClientBuilder.getInstance();
        this.pokemon = new BattlePokemon_1.BattlePokemon();
        this.server.pokemon.get(name).then((data) => {
            this.pokemon.initialize(data);
        });
    }
    withAbility(ability) {
        return this;
    }
    withGender(gender) {
        return this;
    }
    withItem(item) {
        return this;
    }
    build() {
        return this.pokemon;
    }
}
exports.PokemonBuilder = PokemonBuilder;
PokemonBuilder.nextIndex = 0;
//# sourceMappingURL=PokemonBuilder.js.map