import { BattleRules } from "./BattleRules";
import { BattleRulesBuilder } from "./BattleRulesBuilder";
import { BattleRoyaleRules } from "./BattleRoyaleRules";

export class BattleRoyaleRulesBuilder implements BattleRulesBuilder {
    private _rules:BattleRules;

    constructor() {
        this._rules = new BattleRoyaleRules();
    }

    build(): BattleRules {
        return this._rules;
    }
}