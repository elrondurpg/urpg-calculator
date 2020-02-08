import { Battle } from './Battle';
import { Team } from './Team';
 
export class BattleFrame {
    private battle:Battle;
    private teams:Array<Team>;

    constructor(battle) {
        this.battle = battle;
        this.deepCopyTeams();
    }

    deepCopyTeams() {
        this.teams = new Array();
        this.battle.getTeams().forEach(team => {
            this.teams.push(team.clone());
        })
    }

}