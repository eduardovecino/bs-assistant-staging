"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_manager_1 = require("../managers/rest.manager");
class ProductService extends rest_manager_1.RestManager {
    getProducts() {
        return this.get();
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=products.service.js.map