"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BattleFrame_1 = require("./BattleFrame");
const Team_1 = require("./Team");
const UrpgClientBuilder_1 = require("../builders/UrpgClientBuilder");
class Battle {
    constructor() {
        this.battleType = "Singles";
        this.teamType = "Open";
        this.pokemonPerTrainer = 1;
        this.server = UrpgClientBuilder_1.UrpgClientBuilder.getInstance();
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
            this.teams.push(new Team_1.Team(this.trainersPerTeam, this.pokemonPerTrainer));
        }
    }
    addFfaTrainer() {
        this.teams.push(new Team_1.Team(this.trainersPerTeam, this.pokemonPerTrainer));
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentFrame = new BattleFrame_1.BattleFrame(this);
            yield this.loadPokemon();
            this.currentFrame.initialize();
        });
    }
    loadPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO implement logic that changes active Pokemon based on rules/leads
            for (let i = 0; i < this.teams.length; i++) {
                yield this.teams[i].loadTrainers();
            }
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