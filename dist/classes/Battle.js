"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Team_1 = require("./Team");
class Battle {
    constructor() {
        this.battleType = "Singles";
        this.teamType = "Open";
        this.pokemonPerTrainer = 3;
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
            let team = new Team_1.Team();
            team.initTrainers(this.trainersPerTeam, this.pokemonPerTrainer);
            this.teams.push(team);
        }
    }
    addFfaTrainer() {
        let team = new Team_1.Team();
        team.initTrainers(this.trainersPerTeam, this.pokemonPerTrainer);
        this.teams.push(team);
    }
    getTeams() { return this.teams; }
    print() {
        console.log(this.currentFrame);
    }
}
exports.Battle = Battle;
Battle.battleTypes = ["Singles", "Doubles", "Triples", "Rotation",
    "Multi", "Battle Royale", "FFA"];
Battle.teamTypes = ["Open", "Full", "Preview"];
Battle.validNumPokemonPerTrainer = [1, 2, 3, 4, 5, 6];
//# sourceMappingURL=Battle.js.map