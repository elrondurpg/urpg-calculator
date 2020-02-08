"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Trainer_1 = require("./Trainer");
class Team {
    constructor() {
        this.trainers = new Array();
    }
    /*
        team['trainers'].forEach(trainer => {
            this.trainers.push(new Trainer(trainer));
        });*/
    initTrainers(numTrainers, pokemonPerTrainer) {
        this.trainers = new Array();
        for (let i = 0; i < numTrainers; i++) {
            let trainer = new Trainer_1.Trainer();
            trainer.initPokemon(pokemonPerTrainer);
            this.trainers.push(trainer);
        }
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