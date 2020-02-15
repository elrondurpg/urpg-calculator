import { BattlePokemon } from './BattlePokemon';

export class Trainer {
    private name:string = "Test";
    pokemon:Array<BattlePokemon> = new Array();
    activePokemon:Array<number> = new Array();

    public constructor() {

        // TODO active Pokemon depends on leads
    }

    initPokemon(numPokemon:number) {
        for (let i = 0; i < numPokemon; i++) {
            this.pokemon.push(new BattlePokemon());
        }
    }

    setPokemon() {

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

    /*trainer['pokemon'].forEach(basePokemon => {
        let pokemonToAdd = new PokemonBuilder(basePokemon['name']).build();
        let id = pokemonToAdd.getId();
        this.activePokemon.push(id);
        this.pokemon.push(pokemonToAdd);
    });*/
}