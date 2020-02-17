import { BattleRules } from "./BattleRules";
import { BattleRulesBuilder } from "./BattleRulesBuilder";
import { SinglesBattleRules } from "./SinglesBattleRules";

export class SinglesBattleRulesBuilder implements BattleRulesBuilder {
    private _rules:BattleRules;

    constructor() {
        this._rules = new SinglesBattleRules();
    }

    build(): BattleRules {
        return this._rules;
    }
}