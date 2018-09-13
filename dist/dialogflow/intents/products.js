"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = require("../../services/products.service");
class ProductIntents {
    constructor() {
        this.productsService = new products_service_1.ProductService();
    }
    intents(app) {
        app.intent('Saldo cuenta', (conv, { tipo_cuenta }) => {
            const data = this.productsService.getProducts();
            conv.ask('El saldo  de la cuenta es de ' + data.num);
        });
    }
}
exports.ProductIntents = ProductIntents;
//# sourceMappingURL=products.js.map