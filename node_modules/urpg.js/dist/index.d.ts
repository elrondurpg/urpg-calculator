import { ReadEndpoint } from "./classes/ReadEndpoint";
import { ReadWriteEndpoint } from "./classes/ReadWriteEndpoint";
import { Ability, Attack, Pokemon } from "./models/models";
export declare type UrpgApiEnvrionment = "staging" | undefined;
export interface UrpgApiOptions {
    environment?: UrpgApiEnvrionment;
    castToNull?: boolean;
}
/**
 * The main hub for interacting with the URPG API
 */
export declare class UrpgClient {
    private environment?;
    castToNull?: boolean;
    baseUrl: string;
    ability: ReadWriteEndpoint<Ability>;
    artRank: ReadEndpoint;
    attackCategory: ReadEndpoint;
    attack: ReadWriteEndpoint<Attack>;
    attackTargetType: ReadEndpoint;
    dppContestMoveType: ReadEndpoint;
    item: ReadEndpoint;
    orasContestMoveType: ReadEndpoint;
    parkLocation: ReadEndpoint;
    parkRank: ReadEndpoint;
    rseContestMoveType: ReadEndpoint;
    pokemon: ReadWriteEndpoint<Pokemon>;
    storyRank: ReadEndpoint;
    type: ReadEndpoint;
    /**
     * @param {Object} [options] Options
     * @param {string} [options.environment] The non-prod API environment to connect to
     * @param {number} [options.cacheTime=60000] The time, in ms, to cache data for
     */
    constructor(options?: UrpgApiOptions);
}
export * from "./models/models";
