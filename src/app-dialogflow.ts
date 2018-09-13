import * as express from "express";
import * as bodyParser from "body-parser";
import { ProductIntents } from "./dialogflow/intents/products";
import { dialogflow, Dialogflow } from "../node_modules/actions-on-google";

export default class AppDialogFlow {

    public expressApp: express.Application;
    public app: Dialogflow;
    public productIntents: ProductIntents = new ProductIntents();

    constructor() {
        console.log('AppDialogFlow constructor');
        this.app = dialogflow({ debug: true });
        this.config();

        this.expressApp.post('', this.app);
        this.productIntents.intents(this.app); 
    }

    private config(): void {
        // support application/json type post data
        this.expressApp.use(bodyParser.json());
    }

    public initialize(): void {
        console.log('initialize');
    }
}

