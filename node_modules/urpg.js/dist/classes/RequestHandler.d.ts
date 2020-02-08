declare class RequestHandler {
    static handle(url: string, method?: string): Promise<string[]>;
    static handle<T>(url: string, method?: string): Promise<T>;
}
export { RequestHandler };
