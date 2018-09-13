"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = require("../../services/products.service");
const actions_on_google_1 = require("../../../node_modules/actions-on-google");
class ProductIntents {
    constructor() {
        this.productsService = new products_service_1.ProductService();
    }
    intents(app) {
        app.intent('Default Welcome Intent', conv => {
            conv.ask(new actions_on_google_1.Permission({
                context: 'Para dirigirme a usted por su nombre y conocer su ubicación,',
                permissions: [],
            }));
        });
        app.intent('Saldo cuenta', (conv, { tipo_cuenta }) => {
            const data = this.productsService.getProducts();
            conv.ask('El saldo  de la cuenta es de ' + data.num);
        });
    }
}
exports.ProductIntents = ProductIntents;
//# sourceMappingURL=products.js.map