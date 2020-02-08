"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BattleAttack_1 = require("./BattleAttack");
class BattlePokemon {
    constructor() {
        this.attacks = new Array();
        this.currentAttackBoost = 0;
        this.currentDefenseBoost = 0;
        this.currentSpecialAttackBoost = 0;
        this.currentSpecialDefenseBoost = 0;
        this.currentSpeedBoost = 0;
        this.statuses = new Array();
        this.id = BattlePokemon.nextId++;
    }
    initialize(pokemon) {
        // TODO switch this if Zoroark
        this.name = this.currentName = pokemon.name;
        this.type1 = this.currentType1 = pokemon.type1;
        this.type2 = this.currentType2 = pokemon.type2;
        pokemon.attacks.forEach(attack => {
            let newAttack = new BattleAttack_1.BattleAttack();
            newAttack.initialize(attack);
            this.attacks.push(newAttack);
        });
        this.abilities = pokemon.abilities;
        this.currentAbility = this.abilities[0];
        this.alteredForms = pokemon.alteredForms;
        this.megaEvolutions = pokemon.megaEvolutions;
        this.hp = this.currentHp = pokemon.hp;
        this.attack = this.currentAttack = pokemon.attack;
        this.defense = this.currentDefense = pokemon.defense;
        this.specialAttack = this.currentSpecialAttack = pokemon.specialAttack;
        this.specialDefense = this.currentSpecialDefense = pokemon.specialDefense;
        this.speed = this.currentSpeed = pokemon.speed;
        this.weight = pokemon.weight;
    }
    getId() { return this.id; }
    clone() {
        let pokemon = new BattlePokemon();
        pokemon.id = this.id;
        pokemon.name = this.name;
        pokemon.currentName = this.currentName;
        pokemon.type1 = this.type1;
        pokemon.currentType1 = this.currentType1;
        pokemon.type2 = this.type2;
        pokemon.currentType2 = this.currentType2;
        pokemon.currentType3 = this.currentType3;
        this.attacks.forEach(attack => {
            pokemon.attacks.push(attack.clone());
        });
        pokemon.abilities = this.abilities;
        pokemon.currentAbility = this.currentAbility;
        pokemon.alteredForms = this.alteredForms;
        pokemon.megaEvolutions = this.megaEvolutions;
        pokemon.hp = this.hp;
        pokemon.currentHp = this.currentHp;
        pokemon.attack = this.attack;
        pokemon.currentAttack = this.attack;
        pokemon.currentAttackBoost = this.currentAttackBoost;
        pokemon.defense = this.defense;
        pokemon.currentDefense = this.currentDefense;
        pokemon.currentDefenseBoost = this.currentDefenseBoost;
        pokemon.specialAttack = this.specialAttack;
        pokemon.currentSpecialAttack = this.currentSpecialAttack;
        pokemon.currentSpecialAttackBoost = this.currentSpecialAttackBoost;
        pokemon.specialDefense = this.specialDefense;
        pokemon.currentSpecialDefense = this.currentSpecialDefense;
        pokemon.currentSpecialDefenseBoost = this.currentSpecialDefenseBoost;
        pokemon.speed = this.speed;
        pokemon.currentSpeed = this.currentSpeed;
        pokemon.currentSpeedBoost = this.currentSpeedBoost;
        pokemon.weight = this.weight;
        pokemon.gender = this.gender;
        pokemon.currentItem = this.currentItem.clone();
        this.statuses.forEach(status => {
            pokemon.statuses.push(status.clone());
        });
        return pokemon;
    }
}
exports.BattlePokemon = BattlePokemon;
BattlePokemon.nextId = 0;
//# sourceMappingURL=BattlePokemon.js.map