import { BattlePokemon } from './BattlePokemon';
import { PokemonBuilder } from '../builders/PokemonBuilder';

export class Trainer {
    private name:string = "Test";
    pokemon:Array<BattlePokemon> = new Array();
    activePokemon:Array<number> = new Array();

    public constructor(numPokemon?:number) {
        // TODO active Pokemon depends on leads
        for (let i = 0; i < numPokemon; i++) {
            this.pokemon.push(new BattlePokemon());
        }
    }

    async loadPokemon() {
        for (let i = 0; i < this.pokemon.length; i++) {
            this.pokemon[i] = await new PokemonBuilder(this.pokemon[i].name).build();
        }
    }

    clone() {
        let trainer = new Trainer();

        trainer.name = this.name;
        this.pokemon.forEach(pokemon => {
            trainer.pokemon.push(pokemon.clone());
        });

        trainer.activePokemon = new Array<number>();
        this.activePokemon.forEach(id => {
            trainer.activePokemon.push(id);
        })

        return trainer;
    }
}