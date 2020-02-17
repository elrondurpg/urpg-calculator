import { BattleRules } from "./BattleRules";

export class TriplesBattleRules implements BattleRules {
    battleType: string  = "Triples";    
    teamType: string  = "Full";
    maxNumberOfTeams: number = 2;
    minNumberOfTeams: number = 2;
    numberOfTeams: number = 2;
    maxTrainersPerTeam: number = 1;
    minTrainersPerTeam: number = 1;
    trainersPerTeam: number = 1;
    maxPokemonPerTrainer: number = 6;
    minPokemonPerTrainer: number = 1;
    pokemonPerTrainer: number = 6;

    
}