import { BattleFrame } from './BattleFrame'
import { Team } from './Team';
import { PokemonBuilder } from '../builders/PokemonBuilder';
import { BattleAttack } from './BattleAttack';
import { UrpgClientBuilder } from '../builders/UrpgClientBuilder';
import { UrpgClient } from 'urpg.js';
import * as request from "request-promise-native";
import { BattleRules } from './BattleRules';

export class Battle { 
    rules:BattleRules;
    teams:Array<Team>;
    currentFrame:BattleFrame;
    frames:Array<BattleFrame>;

    server:UrpgClient;
    attacks:Map<string, BattleAttack>;

    public constructor() {
        this.server = UrpgClientBuilder.getInstance();
        this.chooseBattleType();
        this.loadAttacks();
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

    start() {
        this.currentFrame = new BattleFrame(this);
        this.setActivePokemon();    
        this.currentFrame.initialize();
    }

    setActivePokemon() {
        // TODO implement logic that changes active Pokemon based on rules/leads

        this.teams.forEach(team => {
            team.trainers.forEach(trainer => {
                
            })
        })
    }

    loadAttacks() {
        request.get({
            uri: "https://pokemonurpg.com:8443/attacks"
        }).then((data) => {
            console.log("Loaded attack data");
            console.log(data);
        })
    }

    getTeams() { return this.teams; }

    execute() {
        this.currentFrame.execute();
    }
}