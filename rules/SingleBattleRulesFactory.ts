import { BattleRules } from "../classes/BattleRules";
import { BattleRulesFactory } from "./BattleRulesFactory";
import { BattleRulesBuilder } from "./BattleRulesBuilder";

export class SingleBattleRulesFactory implements BattleRulesFactory {
    create(): BattleRules {
        let rules = new BattleRulesBuilder()
                            .withNumTeams(2)
                            .withNumTrainersPerTeam(1)
                            .build();

        return rules;
    }
}