import { Battle } from './classes/Battle'
import { UrpgClient } from 'urpg.js'

export class UrpgCalculator {
    private server:UrpgClient;
    private battle:Battle;
    private pokemonNames:Array<String>;

    public constructor() {
        this.server = new UrpgClient();
    }

    initialize() {
        this.loadPokemonNames();
    }

    loadPokemonNames() {
        this.server.pokemon.get().then((data) => {
          this.pokemonNames = data;
    
          /*if (this.constants.debug) {
            this.battle['teams'][0]['trainers'][0]['pokemon'][0]['name'] = "Ampharos";
            this.battle['teams'][1]['trainers'][0]['pokemon'][0]['name'] = "Typhlosion";
          }*/
        });
      }

    print() {
        this.battle.print();
    }
}

module.exports.UrpgCalculator = UrpgCalculator;