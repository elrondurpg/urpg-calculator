import { BattleRules } from "./BattleRules";
import { BattleRulesBuilder } from "./BattleRulesBuilder";
import { RotationBattleRules } from "./RotationBattleRules";

export class RotationBattleRulesBuilder implements BattleRulesBuilder {
    private _rules:BattleRules;

    constructor() {
        this._rules = new RotationBattleRules();
    }

    build(): BattleRules {
        return this._rules;
    }
}