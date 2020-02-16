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
    
    private server:UrpgClient = UrpgClientBuilder.getInstance();
    private pokemon:Map<string, Pokemon> = new Map();

    private constructor() {    }

    public async getPokemon(name:string) {
        name = name.toLowerCase();

        if (!this.pokemon.has(name)) {
            let result = await this.server.pokemon.get(name);
            this.pokemon.set(name, result);
        }
        
        return this.pokemon.get(name);
    }
    
}