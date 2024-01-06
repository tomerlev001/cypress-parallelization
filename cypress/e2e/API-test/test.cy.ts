import { Anything } from "cypress/support/API/httpbinApi/anythingApi";
import { httpbinAPi } from "cypress/support/API/httpbinApi/methodsApi";
import { anythingFactory } from "cypress/support/factories/anythingFactory";
import { httpbinFactory } from "cypress/support/factories/httpbinFactory";

describe("hello", () => {
  it.skip("Httpbin - GET", () => {
    httpbinAPi.getHttpBin();
  });

  it.skip("Httpbin - POST", () => {
    const body = { name: "TomerFactory" };
    httpbinFactory.createHttpbin(body);
  });

  it("Httpbin - Anything", () => {
    // const anyObj: Anything = { name: "Tomer" };

    anythingFactory.createRandomAnything().then((response) => {
      console.log(response)
      console.log(response.body.data);
    });

    anythingFactory.willGetBug()
  });
});
