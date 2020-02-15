export class BattleRules {
    static battleTypes:object = [ "Singles", "Doubles", "Triples", "Rotation", 
                                    "Multi", "Battle Royale", "FFA" ];
    private battleType:string = "Singles";

    static teamTypes:object = [ "Open", "Full", "Preview" ];
    private teamType:string = "Open";

    static validNumPokemonPerTrainer:object = [ 1, 2, 3, 4, 5, 6 ];
    private pokemonPerTrainer:number = 1;
    
    private numberOfTeams:number;
    private trainersPerTeam:number;
}