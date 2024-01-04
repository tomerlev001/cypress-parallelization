import { StatusCodes } from "http-status-codes";

export interface Anything {
  name: string;
}

export class AnythingApi {
  // public apiClient;

  constructor(public baseUrl: string, public endpoint: string) {
    // super("/anything")
    // this.endpoint = "/anything"
    // this.apiClient = new APIClient("/anything");
  }

  getAll() {
    return cy
      .request({
        method: "GET",
        url: this.baseUrl + this.endpoint,
      })
      .then((response) => {
        expect(response.status).to.eq(StatusCodes.OK);
      });
  }

  post(body: Anything) {
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
