"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urpg_js_1 = require("urpg.js");
class UrpgClientBuilder {
    static getInstance() {
        if (!UrpgClientBuilder.instance) {
            UrpgClientBuilder.instance = new urpg_js_1.UrpgClient();
        }
        return UrpgClientBuilder.instance;
    }
}
exports.UrpgClientBuilder = UrpgClientBuilder;
//# sourceMappingURL=UrpgClientBuilder.js.map