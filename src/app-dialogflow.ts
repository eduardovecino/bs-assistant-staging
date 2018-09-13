import { ProductIntents } from "./dialogflow/intents/products";
import { dialogflow, Dialogflow } from "../node_modules/actions-on-google";

export default class AppDialogFlow {

    public app: Dialogflow;
    public productIntents: ProductIntents = new ProductIntents();

    constructor() {
        console.log('AppDialogFlow constructor');
        this.app = dialogflow({ debug: true });
        this.config();
        this.productIntents.intents(this.app); 
    }

    private config(): void {
    }

    public initialize(): void {
        console.log('initialize');
    }
}

