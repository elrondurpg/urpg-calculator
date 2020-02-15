"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const BattleFrame_1 = require("./BattleFrame");
const Team_1 = require("./Team");
const UrpgClientBuilder_1 = require("../builders/UrpgClientBuilder");
const request = __importStar(require("request-promise-native"));
class Battle {
    constructor() {
        this.battleType = "Singles";
        this.teamType = "Open";
        this.pokemonPerTrainer = 1;
        this.server = UrpgClientBuilder_1.UrpgClientBuilder.getInstance();
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
    start() {
        this.currentFrame = new BattleFrame_1.BattleFrame(this);
        this.setActivePokemon();
        this.currentFrame.initialize();
    }
    setActivePokemon() {
        // TODO implement logic that changes active Pokemon based on rules/leads
        this.teams.forEach(team => {
            team.trainers.forEach(trainer => {
            });
        });
    }
    loadAttacks() {
        request.get({
            uri: "https://pokemonurpg.com:8443/attacks"
        }).then((data) => {
            console.log("Loaded attack data");
            console.log(data);
        });
    }
    getTeams() { return this.teams; }
    execute() {
        this.currentFrame.execute();
    }
}
exports.Battle = Battle;
Battle.battleTypes = ["Singles", "Doubles", "Triples", "Rotation",
    "Multi", "Battle Royale", "FFA"];
Battle.teamTypes = ["Open", "Full", "Preview"];
Battle.validNumPokemonPerTrainer = [1, 2, 3, 4, 5, 6];
//# sourceMappingURL=Battle.js.map