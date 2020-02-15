import { UrpgClient, Pokemon } from 'urpg.js';
import { UrpgClientBuilder } from '../builders/UrpgClientBuilder';

export class UrpgClientService {
    private static instance:UrpgClientService;

    public static getInstance() {
        if (!UrpgClientService.instance) {
            UrpgClientService.instance = new UrpgClientService();
        }
        return UrpgClientService.instance;
    }

    private constructor() {    }

    private server:UrpgClient = UrpgClientBuilder.getInstance();
    private pokemon:Map<string, Pokemon> = new Map();

    public async getPokemon(name:string) {
        name = name.toLowerCase();
        if (this.pokemon.has(name)) {
            return this.pokemon.get(name);
        }
        else {
            let result = await this.server.pokemon.get(name);
            this.pokemon.set(name, result);
            return result;
        }
    }
    
}