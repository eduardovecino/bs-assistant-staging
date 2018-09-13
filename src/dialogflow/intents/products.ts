import { Request, Response } from "express";
import { ProductService } from "../../services/products.service";
import { Permission } from "../../../node_modules/actions-on-google";

export class ProductIntents {

    private productsService: ProductService;

    constructor() {
        this.productsService = new ProductService();
    }

    public intents(app): void {
        console.log('Registering Prodcust Intents');
        
        app.intent('Default Welcome Intent', conv => {
            conv.ask('Hola');
        });

        app.intent('Saldo cuenta', (conv, { tipo_cuenta }) => {
            const data = this.productsService.getProducts();
            conv.ask('El saldo  de la cuenta es de ' + data.num);
        });
    }
}