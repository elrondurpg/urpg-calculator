import { AttackTarget, ContestMoveType, PokemonAttack, PokemonType } from "urpg.js";

export class BattleAttack implements PokemonAttack {
    method: string;    generation: number;
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
    private currentPp: number;

    constructor() {
    }

    initialize(attack) {
        this.name = attack.method;
        this.type = attack.type;
        this.description = attack.description;
        this.power = attack.power;
        this.accuracy = attack.accuracy;
        this.currentPp = this.pp = attack.pp;
        this.category = attack.category;
        this.target = attack.target;
        this.contact = attack.contact;
        this.snatch = attack.snatch;
        this.substitute = attack.substitute;
        this.sheerForce = attack.sheerForce;
        this.magicCoat = attack.magicCoat;
    }

    clone() {
        let attack = new BattleAttack();

        attack.method = this.name;
        attack.type = this.type;
        attack.description = this.description;
        attack.power = this.power;
        attack.accuracy = this.accuracy;
        attack.pp = this.pp;
        attack.currentPp = this.currentPp;
        attack.category = this.category;
        attack.target = this.target;
        attack.contact = this.contact;
        attack.snatch = this.snatch;
        attack.substitute = this.substitute;
        attack.sheerForce = this.sheerForce;
        attack.magicCoat = this.magicCoat;

        return attack;
    }

}