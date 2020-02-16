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
const Trainer_1 = require("./Trainer");
class Team {
    constructor(numberOfTrainers, pokemonPerTrainer) {
        this.trainers = new Array();
        for (let i = 0; i < numberOfTrainers; i++) {
            this.trainers.push(new Trainer_1.Trainer(pokemonPerTrainer));
        }
    }
    loadTrainers() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.trainers.length; i++) {
                yield this.trainers[i].loadPokemon();
            }
        });
    }
    clone() {
        let team = new Team();
        this.trainers.forEach(trainer => {
            team.trainers.push(trainer.clone());
        });
        return team;
    }
}
exports.Team = Team;
//# sourceMappingURL=Team.js.map