import { Battle } from './Battle';
import { Team } from './Team';
 
export class BattleFrame {
    private battle:Battle;
    private teams:Array<Team>;

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
        })
    }

}