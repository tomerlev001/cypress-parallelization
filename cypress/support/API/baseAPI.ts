import { AnythingApi } from "./httpbinApi/anythingApi";

class BaseAPI {
  public httpbinAnythingApi;

  constructor() {
    this.httpbinAnythingApi = new AnythingApi();
  }
}

export const baseAPI = new BaseAPI();
