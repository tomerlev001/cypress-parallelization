import { getAll, post } from "../APIFunctions";
import { ApiInterface } from "../APIInterface";

export interface AnythingResponse {
  args: object;
  data: object;
  files: object;
  form: object;
  headers: object;
  json: object;
  method: string;
  origin: string;
  url: string;
}

export interface AnythingRequest {
  name: string;
}

export class AnythingApi implements ApiInterface<AnythingResponse> {
  public endpoint = "/anything";
  public get: () => Cypress.Chainable<Cypress.Response<AnythingResponse>>;

  constructor() {
    this.get = () => getAll({ endpoint: this.endpoint });
  }

  getAll(): Cypress.Chainable<Cypress.Response<AnythingResponse>> {
    return getAll({ endpoint: this.endpoint });
  }

  post(
    id: string,
    body: AnythingRequest
  ): Cypress.Chainable<Cypress.Response<AnythingResponse>> {
    const endpoint = `${this.endpoint}/${id}`
    
    return post({ endpoint: endpoint, body });
  }

  hello() {
    console.log("Implementation");
  }
}
