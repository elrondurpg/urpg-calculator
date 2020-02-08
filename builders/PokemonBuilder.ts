import { BattlePokemon, Gender } from '../classes/BattlePokemon';
import { Item } from '../classes/Item';
import { UrpgClient } from 'urpg.js';
import { UrpgClientBuilder } from './UrpgClientBuilder';

export class PokemonBuilder {
    private static nextIndex:number = 0;
    private server:UrpgClient;
    private pokemon:BattlePokemon;

    public constructor (name) {
        this.server = UrpgClientBuilder.getInstance();
        this.pokemon = new BattlePokemon();
        this.server.pokemon.get(name).then((data) => {
            this.pokemon.initialize(data);
        });
    }

    withAbility(ability:string) {
        return this;
    }

    withGender(gender:Gender) {
        return this;
    }

    withItem(item:string) {
        return this;
    }

    build() {
        return this.pokemon;
    }

}