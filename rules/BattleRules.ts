export interface BattleRules {
    battleType:string;
    teamType:string;
    
    maxNumberOfTeams:number;
    minNumberOfTeams:number;
    numberOfTeams:number;

    maxTrainersPerTeam:number;
    minTrainersPerTeam:number;
    trainersPerTeam:number;

    maxPokemonPerTrainer:number;
    minPokemonPerTrainer:number;
    pokemonPerTrainer:number;
}