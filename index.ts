import { Battle } from './classes/Battle'
import { UrpgClient } from 'urpg.js'
import { UrpgClientBuilder } from './builders/UrpgClientBuilder';
import { BattleRules } from './classes/BattleRules';

export class UrpgBattleService {
  private server:UrpgClient;
  private battle:Battle;
  private pokemonNames:Array<String>;
  private attackNames:Array<String>;
  
  constructor() {
      this.server = UrpgClientBuilder.getInstance();
  }

  createBattle(rules:BattleRules) {
    if (rules) {

    }
    else {

    }
  }

  /*initialize() {
      this.loadPokemonNames();
      this.loadAttackNames();
  }

  loadPokemonNames() {
    this.server.pokemon.get().then((data) => {
      this.pokemonNames = data;

      if (this.constants.debug) {
        this.battle['teams'][0]['trainers'][0]['pokemon'][0]['name'] = "Ampharos";
        this.battle['teams'][1]['trainers'][0]['pokemon'][0]['name'] = "Typhlosion";
      }
    });
  }

  loadAttackNames() {
    this.server.attack.get().then((data) => {
      this.attackNames = data;
    });
  }*/
}

module.exports.UrpgBattleService = UrpgBattleService;