export declare type PokemonType = "NONE" | "NORMAL" | "GRASS" | "FIRE" | "WATER" | "BUG" | "POISON" | "FLYING" | "ELECTRIC" | "GROUND" | "FAIRY" | "FIGHTING" | "PSYCHIC" | "ROCK" | "STEEL" | "ICE" | "GHOST" | "DRAGON" | "DARK";
export interface Ability {
    dbid: number;
    name: string;
    description: string;
}
export interface Attack {
    dbid: number;
    name: string;
    type: PokemonType;
    description: string;
    power: number;
    accuracy: number;
    pp: number;
    category: string;
    target: AttackTarget;
    contact: boolean;
    snatch: boolean;
    substitute: boolean;
    sheerForce: boolean;
    magicCoat: boolean;
    rseContestAttribute: string;
    rseContestMoveType: ContestMoveType;
    dppContestAttribute: string;
    dppContestMoveType: ContestMoveType;
    orasContestAttribute: string;
    orasContestMoveType: ContestMoveType;
}
export interface AttackTarget {
    dbid: number;
    name: string;
    description: string;
}
export interface BasePokemon {
    dbid: number;
    dexno: number;
    name: string;
    type1: PokemonType;
    type2?: PokemonType;
    classification: string;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    height: number;
    weight: number;
    maleAllowed: boolean;
    femaleAllowed: boolean;
    pokemart: number;
    storyRank: CreativeRank;
    artRank: CreativeRank;
    parkRank: CreativeRank;
    parkLocation: Location;
    contestCredits: number;
    displayName: string;
    formName: string;
    typeMatchups: TypeMatchup[];
}
export interface ContestMoveType {
    dbid: number;
    name: string;
    description: string;
    score: number;
    jam: number;
}
export interface CreativeRank {
    dbid: number;
    name: string;
    requirement: string;
}
export interface Evolution {
    dbid: number;
    name: string;
    displayName: string;
    method: string;
    dexno: number;
}
export interface EvolvesFrom {
    name: string;
    method: string;
}
export interface Location {
    dbid: number;
    name: string;
}
export interface MegaEvolvesFrom {
    name: string;
    megastone: string;
}
export interface Pokemon extends BasePokemon {
    type1: PokemonType;
    type2: PokemonType;
    attacks: PokemonAttack[];
    abilities: PokemonAbility[];
    alteredForms: any;
    uniqueMoves: any;
    evolutionFamily: Evolution[][];
    megaEvolutions: PokemonMega[];
    evolvesFrom: EvolvesFrom;
    megaEvolvesFrom: MegaEvolvesFrom;
}
export interface PokemonAbility extends Ability {
    hidden: boolean;
}
export interface PokemonAttack extends Attack {
    method: string;
    generation: number;
}
export interface PokemonMega extends BasePokemon {
    type1: PokemonType;
    type2?: PokemonType;
    ability: PokemonAbility;
    megastone: string;
}
export interface TypeMatchup {
    name: string;
    multiplier: number;
}
export interface Matched<T> {
    value: T;
    rating: number;
}
