import { BattleRulesBuilder } from "./BattleRulesBuilder";
import { TriplesBattleRules } from "./TriplesBattleRules";
import { BattleRules } from "./BattleRules";

export class TriplesBattleRulesBuilder implements BattleRulesBuilder {
    private _rules:BattleRules;

    constructor() {
        this._rules = new TriplesBattleRules();
    }

    build(): BattleRules {
        return this._rules;
    }
    
}