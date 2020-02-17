import { BattleRules } from './BattleRules';

export interface BattleRulesBuilder {
    build():BattleRules;
}