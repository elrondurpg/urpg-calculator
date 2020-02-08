import { CreativeRank, Evolution, PokemonMega, EvolvesFrom, MegaEvolvesFrom, 
    Pokemon, PokemonAbility, PokemonAttack, PokemonType,
    Location, TypeMatchup } from '../node_modules/urpg.js';
import { Item } from './Item';
import { PokemonBuilder } from '../builders/PokemonBuilder.js';
import { BattleAttack } from './BattleAttack';
import { Battle } from './Battle.js';
import { Status } from './Status';

export type Gender = "M" | "F" | "G";

export class BattlePokemon implements Pokemon {
    static nextId:number = 0;
    private id:number;
    type1: PokemonType;
    private currentType1:PokemonType;
    type2: PokemonType;
    private currentType2:PokemonType;
    private currentType3:PokemonType;
    attacks: Array<BattleAttack> = new Array();
    abilities: PokemonAbility[];
    private currentAbility:PokemonAbility;
    alteredForms: any;
    uniqueMoves: any;
    evolutionFamily: Evolution[][];
    megaEvolutions: PokemonMega[];
    evolvesFrom: EvolvesFrom;
    megaEvolvesFrom: MegaEvolvesFrom;
    dbid: number;
    dexno: number;
    name: string;
    private currentName:string;
    classification: string;
    hp: number;
    private currentHp:number;
    attack: number;
    private currentAttack:number;
    private currentAttackBoost:number = 0;
    defense: number;
    private currentDefense:number;
    private currentDefenseBoost:number = 0;
    specialAttack: number;
    private currentSpecialAttack:number;
    private currentSpecialAttackBoost:number = 0;
    specialDefense: number;
    private currentSpecialDefense:number;
    private currentSpecialDefenseBoost:number = 0;
    speed: number;
    private currentSpeed:number;
    private currentSpeedBoost:number = 0;
    height: number;
    weight: number;
    maleAllowed: boolean;
    femaleAllowed: boolean;
    private gender:Gender;
    pokemart: number;
    storyRank: CreativeRank;
    artRank: CreativeRank;
    parkRank: CreativeRank;
    parkLocation: Location;
    contestCredits: number;
    displayName: string;
    formName: string;
    typeMatchups: TypeMatchup[];
    private currentItem:Item;
    private statuses:Array<Status> = new Array();

    constructor() {
        this.id = BattlePokemon.nextId++;
    }

    initialize(pokemon:Pokemon) {

        // TODO switch this if Zoroark
        this.name = this.currentName = pokemon.name;

        this.type1 = this.currentType1 = pokemon.type1;
        this.type2 = this.currentType2 = pokemon.type2;

        pokemon.attacks.forEach(attack => {
            let newAttack = new BattleAttack();
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