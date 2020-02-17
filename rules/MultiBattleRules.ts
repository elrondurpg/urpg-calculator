import { BattleRules } from "./BattleRules";

export class MultiBattleRules implements BattleRules {
    battleType: string = "Multi";    
    teamType: string = "Full";
    maxNumberOfTeams: number = 2;
    minNumberOfTeams: number = 2;
    numberOfTeams: number = 2;
    maxTrainersPerTeam: number = 2;
    minTrainersPerTeam: number = 2;
    trainersPerTeam: number = 2;
    maxPokemonPerTrainer: number = 3;
    minPokemonPerTrainer: number = 1;
    pokemonPerTrainer: number = 3;


}