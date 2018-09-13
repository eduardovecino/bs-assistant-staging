"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./dialogflow/intents/products");
const actions_on_google_1 = require("../node_modules/actions-on-google");
class AppDialogFlow {
    constructor() {
        this.productIntents = new products_1.ProductIntents();
        console.log('AppDialogFlow constructor');
        this.app = actions_on_google_1.dialogflow({ debug: true });
        this.config();
        this.productIntents.intents(this.app);
    }
    config() {
    }
    initialize() {
        console.log('initialize');
    }
}
exports.default = AppDialogFlow;
//# sourceMappingURL=app-dialogflow.js.map