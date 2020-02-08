"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BattleAttack {
    constructor() {
    }
    initialize(attack) {
        this.name = attack.method;
        this.type = attack.type;
        this.description = attack.description;
        this.power = attack.power;
        this.accuracy = attack.accuracy;
        this.currentPp = this.pp = attack.pp;
        this.category = attack.category;
        this.target = attack.target;
        this.contact = attack.contact;
        this.snatch = attack.snatch;
        this.substitute = attack.substitute;
        this.sheerForce = attack.sheerForce;
        this.magicCoat = attack.magicCoat;
    }
    clone() {
        let attack = new BattleAttack();
        attack.method = this.name;
        attack.type = this.type;
        attack.description = this.description;
        attack.power = this.power;
        attack.accuracy = this.accuracy;
        attack.pp = this.pp;
        attack.currentPp = this.currentPp;
        attack.category = this.category;
        attack.target = this.target;
        attack.contact = this.contact;
        attack.snatch = this.snatch;
        attack.substitute = this.substitute;
        attack.sheerForce = this.sheerForce;
        attack.magicCoat = this.magicCoat;
        return attack;
    }
}
exports.BattleAttack = BattleAttack;
//# sourceMappingURL=BattleAttack.js.map