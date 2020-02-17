import { BattleRules } from "./BattleRules";
import { BattleRulesBuilder } from "./BattleRulesBuilder";
import { FFABattleRules } from "./FFABattleRules";

export class FFABattleRulesBuilder implements BattleRulesBuilder {
    private _rules:BattleRules;

    constructor() {
        this._rules = new FFABattleRules();
    }

    build(): BattleRules {
        return this._rules;
    }
}