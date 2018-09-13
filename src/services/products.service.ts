import { RestManager } from "../managers/rest.manager";

export class ProductService extends RestManager {

    public getProducts(): any {
        return this.get();
    }
}