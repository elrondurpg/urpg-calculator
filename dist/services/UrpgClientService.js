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
        this.server = UrpgClientBuilder_1.UrpgClientBuilder.getInstance();
        this.pokemon = new Map();
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
            if (!this.pokemon.has(name)) {
                let result = yield this.server.pokemon.get(name);
                this.pokemon.set(name, result);
            }
            return this.pokemon.get(name);
        });
    }
}
exports.UrpgClientService = UrpgClientService;
//# sourceMappingURL=UrpgClientService.js.map