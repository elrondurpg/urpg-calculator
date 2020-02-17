import { BattleRules } from "./BattleRules";

export class BattleRoyaleRules implements BattleRules {
    battleType: string = "Battle Royale";    
    teamType: string = "Full";
    maxNumberOfTeams: number = 4;
    minNumberOfTeams: number = 4;
    numberOfTeams: number = 4;
    maxTrainersPerTeam: number = 1;
    minTrainersPerTeam: number = 1;
    trainersPerTeam: number = 1;
    maxPokemonPerTrainer: number = 3;
    minPokemonPerTrainer: number = 3;
    pokemonPerTrainer: number = 3;


}