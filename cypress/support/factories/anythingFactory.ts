import { AnythingApi, AnythingRequest } from "../API/httpbinApi/anythingApi";

class AnythingFactory {
  private anythingApi;
  private static _instance = new AnythingFactory();

  private constructor() {
    this.anythingApi = new AnythingApi();
  }

  static get Instance() {
    return this._instance;
  }

  createAnythingData() {
    return { name: "Tomer" };
  }

  getAllAnything() {
    this.anythingApi.getAll();
  }

  createRandomAnything() {
    const body: AnythingRequest = {
        name: "Tomer"
    }

    return this.anythingApi.post("23", body);
  }

  willGetBug(){
    this.anythingApi.hello()
  }
}

export const anythingFactory = AnythingFactory.Instance;
