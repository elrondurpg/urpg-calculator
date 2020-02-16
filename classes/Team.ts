import { Trainer } from './Trainer';

export class Team {
    trainers:Array<Trainer>;

    public constructor(numberOfTrainers?:number, pokemonPerTrainer?:number) { 
        this.trainers = new Array<Trainer>();   
        for (let i = 0; i < numberOfTrainers; i++) {
            this.trainers.push(new Trainer(pokemonPerTrainer));
        }
    }

    async loadTrainers() {
        for (let i = 0; i < this.trainers.length; i++) {
            await this.trainers[i].loadPokemon();
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