"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BattleFrame {
    constructor(battle) {
        this.battle = battle;
        this.deepCopyTeams();
    }
    deepCopyTeams() {
        this.teams = new Array();
        this.battle.getTeams().forEach(team => {
            this.teams.push(team.clone());
        });
    }
}
exports.BattleFrame = BattleFrame;
//# sourceMappingURL=BattleFrame.js.map