"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BattleFrame {
    constructor(battle) {
        this.battle = battle;
    }
    initialize() {
        this.deepCopyTeams(this.battle.getTeams());
    }
    execute() {
        // Figure out the order things should happen in. 
        // Load all the attacks.
        // execute the attacks in order.
    }
    deepCopyTeams(teams) {
        this.teams = new Array();
        teams.forEach(team => {
            this.teams.push(team.clone());
        });
    }
}
exports.BattleFrame = BattleFrame;
//# sourceMappingURL=BattleFrame.js.map