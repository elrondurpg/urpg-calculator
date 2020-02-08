import { Matched, UrpgClient } from "..";
import { ReadEndpoint } from "./ReadEndpoint";
declare class ReadWriteEndpoint<T> extends ReadEndpoint {
    private targetStrings;
    constructor(resource: string, client: UrpgClient);
    get(): Promise<string[]>;
    get(name?: string): Promise<T>;
    getClosest(name: string): Promise<Matched<T>>;
    static post(): void;
    static put(): void;
}
export { ReadWriteEndpoint };
