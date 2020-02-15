"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BattlePokemon {
    constructor() {
        this.pp = new Map();
        this.statuses = new Map();
    }
    initialize(pokemon) {
        this.basePokemon = pokemon;
        this.name = pokemon.name;
        this.type1 = pokemon.type1;
        this.type2 = pokemon.type2;
        this.hp = pokemon.hp;
        this.attack = pokemon.attack;
        this.defense = pokemon.defense;
        this.specialAttack = pokemon.specialAttack;
        this.specialDefense = pokemon.specialDefense;
        this.speed = pokemon.speed;
        this.weight = pokemon.weight;
    }
    getHpPercent() {
        return this.hp / this.basePokemon.hp * 100;
    }
    clone() {
        let pokemon = new BattlePokemon();
        pokemon.basePokemon = this.basePokemon;
        pokemon.name = this.name;
        pokemon.gender = this.gender;
        pokemon.ability = this.ability;
        pokemon.type1 = this.type1;
        pokemon.type2 = this.type2;
        pokemon.type3 = this.type3;
        pokemon.weight = this.weight;
        pokemon.hp = this.hp;
        pokemon.attack = this.attack;
        pokemon.defense = this.defense;
        pokemon.specialAttack = this.specialAttack;
        pokemon.specialDefense = this.specialDefense;
        pokemon.speed = this.speed;
        this.pp.forEach((value, key) => {
            pokemon.pp.set(key, value);
        });
        this.statuses.forEach((value, key) => {
            pokemon.statuses.set(key, value);
        });
        return pokemon;
    }
}
exports.BattlePokemon = BattlePokemon;
//# sourceMappingURL=BattlePokemon.js.map