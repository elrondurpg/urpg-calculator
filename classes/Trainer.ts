import { BattlePokemon } from './BattlePokemon';
import { PokemonBuilder } from '../builders/PokemonBuilder';

export class Trainer {
    private name:string;
    private pokemon:Array<BattlePokemon> = new Array();
    private activePokemon:Array<number> = new Array();

    public constructor() {

        // TODO active Pokemon depends on leads
    }

    initPokemon(numPokemon:number) {
        for (let i = 0; i < numPokemon; i++) {
            this.pokemon.push(new BattlePokemon());
        }
    }

    getPokemon(id:number) {
        console.log("searching for a Pokemon with id " + id);
        this.pokemon.forEach(pkmn => {
            console.log("checking Pokemon:");
            console.log(pkmn);
            if (pkmn.getId() == id) {
                return pkmn;
            } 
        });
    }

    setPokemon() {

    }

    clone() {
        let trainer = new Trainer();

        trainer.name = this.name;
        this.pokemon.forEach(pokemon => {
            trainer.pokemon.push(pokemon.clone());
        })

        return trainer;
    }

    /*trainer['pokemon'].forEach(basePokemon => {
        let pokemonToAdd = new PokemonBuilder(basePokemon['name']).build();
        let id = pokemonToAdd.getId();
        this.activePokemon.push(id);
        this.pokemon.push(pokemonToAdd);
    });*/
}