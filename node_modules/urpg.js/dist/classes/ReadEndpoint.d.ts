import { UrpgClient } from "..";
declare class ReadEndpoint {
    /**
     * Name of the resource, and URL parameter for the endpoint
     * @name ReadEndpoint#resource
     * @type {string}
     * @protected
     */
    protected resource: string;
    /**
     * Cached values from the last call to this endpoint
     * @name ReadEndpoint#resource
     * @type {string[]}
     * @protected
     */
    cache: string[];
    /**
     * The client that instantiated this endpoint
     * @name ReadEndpoint#client
     * @type {UrpgClient}
     * @public
     */
    client: UrpgClient;
    constructor(resource: string, client: UrpgClient);
    /**
     * Sends a GET request to this endpoint
     * Read-only endpoints return a list of all names
     * @returns {string[]}
     */
    get(): Promise<string[]>;
}
export { ReadEndpoint };
