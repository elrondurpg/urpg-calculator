import { BattleFrame } from './BattleFrame'
import { Team } from './Team';
import { BattleAttack } from './BattleAttack';
import { UrpgClientBuilder } from '../builders/UrpgClientBuilder';
import { UrpgClient } from 'urpg.js';

export class Battle { 
    static battleTypes:object = [ "Singles", "Doubles", "Triples", "Rotation", 
                                    "Multi", "Battle Royale", "FFA" ];
    battleType:string = "Singles";

    static teamTypes:object = [ "Open", "Full", "Preview" ];
    private teamType:string = "Open";

    static validNumPokemonPerTrainer:object = [ 1, 2, 3, 4, 5, 6 ];
    private pokemonPerTrainer:number = 1;
    
    trainersPerTeam:number;
    teams:Array<Team>;
    currentFrame:BattleFrame;
    frames:Array<BattleFrame>;

    server:UrpgClient;
    attacks:Map<string, BattleAttack>;

    public constructor() {
        this.server = UrpgClientBuilder.getInstance();
        this.chooseBattleType();
    }

    chooseBattleType() {
        let numberOfTeams = 2;

        if (this.battleType == "Battle Royale") {
            numberOfTeams = 4;
        }
        else if (this.battleType == "FFA") {
            numberOfTeams = 6;
        }

        this.trainersPerTeam = 1;
        if (this.battleType == "Multi") {
            this.trainersPerTeam = 2;
        }

        this.teams = new Array();
        for (let i = 0; i < numberOfTeams; i++) {
            this.teams.push(new Team(this.trainersPerTeam, this.pokemonPerTrainer));
        }
    }

    addFfaTrainer() {
        this.teams.push(new Team(this.trainersPerTeam, this.pokemonPerTrainer));
    }

    async start() {
        this.currentFrame = new BattleFrame(this);
        await this.loadPokemon();
        this.currentFrame.initialize();
    }

    async loadPokemon() {
        // TODO implement logic that changes active Pokemon based on rules/leads
        for (let i = 0; i < this.teams.length; i++) {
            await this.teams[i].loadTrainers();
        }
    }

    getTeams() { return this.teams; }

    execute() {
        this.currentFrame.execute();
    }
}