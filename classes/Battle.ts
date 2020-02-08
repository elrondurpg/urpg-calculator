import { BattleFrame } from './BattleFrame'
import { Team } from './Team';

export class Battle { 
    static battleTypes:object = [ "Singles", "Doubles", "Triples", "Rotation", 
                                    "Multi", "Battle Royale", "FFA" ];
    private battleType:string = "Singles";

    static teamTypes:object = [ "Open", "Full", "Preview" ];
    private teamType:string = "Open";

    static validNumPokemonPerTrainer:object = [ 1, 2, 3, 4, 5, 6 ];
    private pokemonPerTrainer:number = 3;
    private teams:Array<Team>;

    private numberOfTeams:number;
    private trainersPerTeam:number;
    
    private currentFrame:BattleFrame;
    private frames:Array<BattleFrame>;

    public constructor() {
        this.chooseBattleType();
    }

    chooseBattleType() {
        if (this.battleType != "Battle Royale" && this.battleType != "FFA") {
        this.numberOfTeams = 2;
        }
        else if (this.battleType == "Battle Royale") {
        this.numberOfTeams = 4;
        }
        else if (this.battleType == "FFA") {
        this.numberOfTeams = 6;
        }

        if (this.battleType != "Multi") {
        this.trainersPerTeam = 1;
        }
        else if (this.battleType == "Multi") {
        this.trainersPerTeam = 2;
        }

        this.teams = new Array();
        for (let i = 0; i < this.numberOfTeams; i++) {
            let team = new Team();
            team.initTrainers(this.trainersPerTeam, this.pokemonPerTrainer);
            this.teams.push(team);
        }
    }

    addFfaTrainer() {
        let team = new Team();
        team.initTrainers(this.trainersPerTeam, this.pokemonPerTrainer);
        this.teams.push(team);
    }

    getTeams() { return this.teams; }

    print() {
        console.log(this.currentFrame);
    }
}