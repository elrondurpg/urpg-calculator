"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UrpgClientBuilder_1 = require("../builders/UrpgClientBuilder");
class UrpgClientService {
    constructor() {
        this.pokemon = new Map();
        this.server = UrpgClientBuilder_1.UrpgClientBuilder.getInstance();
        //this.pokemon.set("Bulbasaur", UrpgClientService.bulbasaur);
    }
    static getInstance() {
        if (!UrpgClientService.instance) {
            UrpgClientService.instance = new UrpgClientService();
        }
        return UrpgClientService.instance;
    }
    getPokemon(name) {
        return __awaiter(this, void 0, void 0, function* () {
            name = name.toLowerCase();
            if (this.pokemon.has(name)) {
                return this.pokemon.get(name);
            }
            else {
                let result = yield this.server.pokemon.get(name);
                this.pokemon.set(name, result);
                return result;
            }
        });
    }
}
exports.UrpgClientService = UrpgClientService;
UrpgClientService.bulbasaur = {
    "name": "Bulbasaur", "type1": "GRASS", "type2": "POISON", "hp": 294, "attack": 197, "defense": 197, "specialAttack": 229, "specialDefense": 229, "speed": 189, "weight": 6.9, "displayName": "Bulbasaur", "formName": "-1", "alteredForms": [], "uniqueMoves": [], "megaEvolutions": [], "dbid": 0, "dexno": 0, "classification": "", "height": 0, "maleAllowed": false, "femaleAllowed": false, "pokemart": 0, "storyRank": null, "artRank": null, "parkRank": null, "parkLocation": null, "contestCredits": 0, typeMatchups: null, attacks: null, abilities: null, evolutionFamily: null, evolvesFrom: null, megaEvolvesFrom: null
};
//# sourceMappingURL=UrpgClientService.js.map