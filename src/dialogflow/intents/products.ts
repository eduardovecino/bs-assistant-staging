import { Request, Response } from "express";
import { ProductService } from "../../services/products.service";
import { Permission } from "../../../node_modules/actions-on-google";

export class ProductIntents {

    private productsService: ProductService;

    constructor() {
        this.productsService = new ProductService();
    }

    public intents(app): void {
        app.intent('Default Welcome Intent', conv => {
            conv.ask(new Permission({
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