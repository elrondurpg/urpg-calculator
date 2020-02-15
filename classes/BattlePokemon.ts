import { Pokemon, PokemonType, PokemonAbility } from 'urpg.js';

export class BattlePokemon {
    basePokemon:Pokemon;
    type1:PokemonType;
    type2:PokemonType;
    type3:PokemonType;
    pp:Map<string,number> = new Map();
    ability:PokemonAbility;
    name:string;
    hp:number;
    attack:number;
    defense:number;
    specialAttack:number;
    specialDefense:number;
    speed:number;
    weight:number;
    gender:string;
    statuses:Map<string,string> = new Map();

    constructor() {

    }

    initialize(pokemon:Pokemon) {
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

        this.pp.forEach((value: number, key: string) => {
            pokemon.pp.set(key, value);
        });

        this.statuses.forEach((value: string, key: string) => {
            pokemon.statuses.set(key, value);
        });

        return pokemon;
    }
}