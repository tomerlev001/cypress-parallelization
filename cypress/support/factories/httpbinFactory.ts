import { PosthttpBinRequest, httpbinAPi } from "../API/httpbinApi/methodsApi";

class HttpbinFactory {
  private httpbinApi;

  constructor() {
    this.httpbinApi = httpbinAPi;
  }

  createHttpbin(body: PosthttpBinRequest) {
    return this.httpbinApi.postHttpBin(body);
  }
}

export const httpbinFactory = new HttpbinFactory();
