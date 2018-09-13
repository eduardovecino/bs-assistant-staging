import { Request, Response } from "express";
import { ProductService } from "../../services/products.service";

export class ProductIntents {

    private productsService: ProductService;

    constructor() {
        this.productsService = new ProductService();
    }

    public intents(app): void {
        app.intent('Saldo cuenta', (conv, { tipo_cuenta }) => {
            const data = this.productsService.getProducts();
            conv.ask('El saldo  de la cuenta es de ' + data.num);
        });
    }
}