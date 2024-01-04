import { Anything, AnythingApi } from "../API/httpbinApi/anythingApi";


class AnythingFactory {
    private anythingApi;

    constructor() {
        this.anythingApi = new AnythingApi("https://httpbin.org", "/anything")
    }

    createAnythingData() {
        return { name: "Tomer"}
    }

    getAllAnything() {
        this.anythingApi.getAll()
    }

    createAnything(anything: Anything) {
        let body;
        
        if (anything) {
            body = anything            
        } else {
            body = this.createAnythingData()
        }

        return this.anythingApi.post(anything)
    }
}

export const anythingFactory = new AnythingFactory()