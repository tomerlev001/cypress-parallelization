interface APIClient {
    baseUrl: string,
    endpoint: string,
    getAll?(): object,
    getItem?(id: string): object,
    postItem?(id: string): object,
}