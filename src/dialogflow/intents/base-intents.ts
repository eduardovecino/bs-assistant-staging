import { Suggestions } from "actions-on-google";
import { SUGGESTIONS } from "../../constants/suggestions";

export class BaseIntents {

    public logged = '0';

    constructor() {
    }

    suggestions(conv) {
        if (this.logged === '1') {
            conv.ask(new Suggestions(SUGGESTIONS.LOGGED_SUGGESTIONS));
        } else {
            conv.ask(new Suggestions(SUGGESTIONS.NOT_LOGGED_SUGGESTIONS));
        }
    }
}