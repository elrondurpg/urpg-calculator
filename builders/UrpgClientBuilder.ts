import { UrpgClient } from 'urpg.js';

export class UrpgClientBuilder {
    private static instance:UrpgClient;

    static getInstance() {
        if (!UrpgClientBuilder.instance) {
            UrpgClientBuilder.instance = new UrpgClient();
        }
        return UrpgClientBuilder.instance;
    }
}