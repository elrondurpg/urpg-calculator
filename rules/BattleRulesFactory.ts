import { BattleRules } from "../classes/BattleRules";

export interface BattleRulesFactory {
    create(): BattleRules;
}