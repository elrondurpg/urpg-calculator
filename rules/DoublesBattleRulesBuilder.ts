import { BattleRules } from "./BattleRules";
import { BattleRulesBuilder } from "./BattleRulesBuilder";
import { DoublesBattleRules } from "./DoublesBattleRules";

export class DoublesBattleRulesBuilder implements BattleRulesBuilder {
    private _rules:BattleRules;

    constructor() {
        this._rules = new DoublesBattleRules();
    }

    build(): BattleRules {
        return this._rules;
    }
}