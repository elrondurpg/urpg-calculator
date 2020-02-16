import { Battle } from './classes/Battle'
import { UrpgClient } from 'urpg.js'
import { UrpgClientBuilder } from './builders/UrpgClientBuilder';

export class UrpgBattleService {
  private server:UrpgClient;
  private battle:Battle;
  private pokemonNames:Array<String>;
  private attackNames:Array<String>;
  
  constructor() {
      this.server = UrpgClientBuilder.getInstance();
      this.loadPokemonNames();
      this.loadAttackNames();
  }

  loadPokemonNames() {
    this.server.pokemon.get().then((data) => {
      this.pokemonNames = data;
    });
  }

  loadAttackNames() {
    this.server.attack.get().then((data) => {
      this.attackNames = data;
    });
  }
}

module.exports.UrpgBattleService = UrpgBattleService;