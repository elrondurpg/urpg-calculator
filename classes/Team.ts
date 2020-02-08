import { Trainer } from './Trainer';

export class Team {
    private trainers:Array<Trainer> = new Array();

    public constructor() {
    }

    /* 
        team['trainers'].forEach(trainer => {
            this.trainers.push(new Trainer(trainer));
        });*/
    initTrainers(numTrainers:number, pokemonPerTrainer:number) {
        this.trainers = new Array();
        for (let i = 0; i < numTrainers; i++) {
            let trainer = new Trainer();
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