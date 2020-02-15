import { UrpgClientService } from '../services/UrpgClientService';
import { BattlePokemon } from '../classes/BattlePokemon';

export class PokemonBuilder {
    private server:UrpgClientService;
    private pokemon:BattlePokemon;
    private basePokemonName:string;

    public constructor (basePokemonName:string) {
        this.server = UrpgClientService.getInstance();
        this.pokemon = new BattlePokemon();
        this.basePokemonName = basePokemonName;
    }

    async build() {
        let basePokemon = await this.server.getPokemon(this.basePokemonName);
        this.pokemon.initialize(basePokemon);
        return this.pokemon;
    }

    withAbility(ability:string) {
        return this;
    }

    withGender(gender:string) {
        return this;
    }

    withItem(item:string) {
        return this;
    }

}