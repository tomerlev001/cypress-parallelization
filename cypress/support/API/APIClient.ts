import { StatusCodes } from "http-status-codes";

interface BaseResponse<T> {
    headers: object
    data: T
}

export class APIClient<T> {
    private baseUrl;
    private endpoint;

    constructor(endpoint: string) {
        this.baseUrl = "https://httpbin.org"    
        this.endpoint = endpoint;
    }

    getAll() {
        return cy.request({
            method: "GET",
            url: this.baseUrl + this.endpoint
        }).then(response => {
            expect(response.status).to.eq(StatusCodes.OK)
        })
    }

    post(body: T) {
        return cy.request({
            method: "POST",
            url: this.baseUrl + this.endpoint,
            body: {body}
        }).then(response => {
            expect(response.status).to.eq(StatusCodes.OK)
            return response.body
        })
    }
}

// export default APIClient;