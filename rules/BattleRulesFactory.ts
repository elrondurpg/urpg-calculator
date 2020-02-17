import { BattleRules } from "./BattleRules";
import { SinglesBattleRules } from "./SinglesBattleRules";
import { DoublesBattleRules } from "./DoublesBattleRules";
import { TriplesBattleRules } from "./TriplesBattleRules";
import { RotationBattleRules } from "./RotationBattleRules";
import { MultiBattleRules } from "./MultiBattleRules";
import { BattleRoyaleRules } from "./BattleRoyaleRules";
import { FFABattleRules } from "./FFABattleRules";

export class BattleRulesFactory {
    getBattleRules(battleType:string): BattleRules {
        battleType = battleType.toLowerCase();
        if (battleType == "singles") {
            return new SinglesBattleRules();
        }
        else if (battleType == "doubles") {
            return new DoublesBattleRules();
        }
        else if (battleType == "triples") {
            return new TriplesBattleRules();
        }
        else if (battleType == "rotation") {
            return new RotationBattleRules();
        }
        else if (battleType == "multi") {
            return new MultiBattleRules();
        }
        else if (battleType == "battle royale") {
            return new BattleRoyaleRules();
        }
        else if (battleType == "ffa") {
            return new FFABattleRules();
        }

        return null;
    }
}