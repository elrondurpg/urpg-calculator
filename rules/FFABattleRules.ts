import { BattleRules } from "./BattleRules";

export class FFABattleRules implements BattleRules {
    battleType: string = "FFA";    
    teamType: string = "Full";
    maxNumberOfTeams: number;
    minNumberOfTeams: number = 6;
    numberOfTeams: number = 6;
    maxTrainersPerTeam: number;
    minTrainersPerTeam: number = 1;
    trainersPerTeam: number = 1;
    maxPokemonPerTrainer: number;
    minPokemonPerTrainer: number = 1;
    pokemonPerTrainer: number = 1;


}