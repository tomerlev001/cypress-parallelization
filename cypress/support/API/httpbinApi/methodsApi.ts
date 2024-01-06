import { StatusCodes } from "http-status-codes";
export type PosthttpBinRequest = {
  name: string;
};

class HttpbinApi {
  baseUrl = "https://httpbin.org";

  getHttpBin() {
    const endpoint = "/get";

    return cy.request("GET", this.baseUrl + endpoint).then((response) => {
      expect(response.status).to.eq(StatusCodes.OK);
    });
  }

  postHttpBin(body: PosthttpBinRequest) {
    const endpoint = "/post";

    return cy
      .request({
        method: "POST",
        url: this.baseUrl + endpoint,
        body: body,
      })
      .then((response) => {
        expect(response.status).to.eq(StatusCodes.OK);
        console.log(response.body.data);
      });
  }
}

export const httpbinAPi = new HttpbinApi();
