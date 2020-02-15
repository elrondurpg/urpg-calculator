import { BattleRules } from "../classes/BattleRules";

export class BattleRulesBuilder {
    private rules:BattleRules;

    public constructor() {
        this.rules = new BattleRules();
    }

    public withNumTeams(num:number) {
        this.rules.numberOfTeams = num;
        return this;
    }

    public withNumTrainersPerTeam(num:number) {
        this.rules.trainersPerTeam = num;
        return this;
    }

    public build() {
        return this.rules;
    }
}