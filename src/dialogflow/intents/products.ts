import { Request, Response } from "express";
import { ProductService } from "../../services/products.service";
import { Permission } from "../../../node_modules/actions-on-google";

export class ProductIntents {

    private productsService: ProductService;

    constructor() {
        this.productsService = new ProductService();
    }

    public intents(app): void {
        console.log('Registering Products Intents');

        // app.intent('Default Welcome Intent', conv => {
        //     console.log('INTENT: Default Welcome Intent');
        //     conv.ask('Hola');
        // });

        app.intent('Default Welcome Intent', conv => {
            conv.ask(new Permission({
                context: 'Para dirigirme a usted por su nombre y conocer su ubicación,',
                permissions: ['NAME', 'DEVICE_PRECISE_LOCATION', 'DEVICE_COARSE_LOCATION'],
            }));
        });

        app.intent('Saldo cuenta', (conv, { tipo_cuenta }) => {
            console.log('INTENT: Saldo cuenta');
            const data = this.productsService.getProducts();
            conv.ask('El saldo  de la cuenta es de ' + data.num);
        });
    }
}