import { BattleRules } from "./BattleRules";
import { BattleRulesBuilder } from "./BattleRulesBuilder";
import { MultiBattleRules } from "./MultiBattleRules";

export class MultiBattleRulesBuilder implements BattleRulesBuilder {
    private _rules:BattleRules;

    constructor() {
        this._rules = new MultiBattleRules();
    }

    build(): BattleRules {
        return this._rules;
    }
}