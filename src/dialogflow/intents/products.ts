import { Request, Response } from "express";
import { ProductService } from "../../services/products.service";
import { Permission, Suggestions, SignIn } from "../../../node_modules/actions-on-google";
import { SUGGESTIONS } from "../../../constants/suggestions";

export class ProductIntents {

    private productsService: ProductService;

    constructor() {
        this.productsService = new ProductService();
    }

    public intents(app): void {
        console.log('Registering Products Intents');

        var logged = '0';

        function suggestions(conv) {
            if (logged === '1') {
                conv.ask(new Suggestions(SUGGESTIONS.LOGGED_SUGGESTIONS));
            } else {
                conv.ask(new Suggestions(SUGGESTIONS.NOT_LOGGED_SUGGESTIONS));
            }
        }

        app.intent('Default Welcome Intent', conv => {
            conv.ask(`Bienvenido a Banco Sabadell`); 
            // suggestions(conv);       
        });

        // app.intent('Default Welcome Intent', conv => {
        //     conv.ask(new Permission({
        //         context: 'Para dirigirme a usted por su nombre y conocer su ubicación,',
        //         permissions: ['NAME', 'DEVICE_PRECISE_LOCATION', 'DEVICE_COARSE_LOCATION'],
        //     }));
        // });

        // Create a Dialogflow intent with the `actions_intent_PERMISSION` event
        // app.intent('Get Permission', (conv, params, confirmationGranted) => {
        //     console.log("get permission 1");

        //     conv.ask(`Bienvenido a Banco Sabadell`);

        //     console.log("get permission 1");
        //     const { name } = conv.user;
        //     if (confirmationGranted) {
        //         console.log("get permission 2");
        //         if (name) {
        //             console.log("get permission 3");
        //             conv.ask(`Bienvenido a Banco Sabadell, ${name.display}`);
        //             // suggestions(conv);
        //         }
        //     } else {
        //         conv.ask(`I can't read your mind right now! My mystical powers have failed!`);
        //     }
        // });

        //Iniciar Sesión
        app.intent('Iniciar Sesion', (conv) => {
            conv.ask(`Vamos a iniciar sesión`);
            conv.ask(new SignIn());
        });

        app.intent('Get Signin', (conv, params, signin) => {
            logged = '1'; //TEST
            if (signin.status === 'OK') {
                const access = conv.user.access.token;  //possibly do something with access token
                conv.ask(`¡Genial, gracias por iniciar sesión! ${access}`);
                suggestions(conv);
            } else {
                //${signin.status}
                conv.ask(`No podré guardar tus datos, pero ¿qué quieres hacer a continuación?`);
                suggestions(conv);
            }
        });

        app.intent('Saldo cuenta', (conv, { tipo_cuenta }) => {
            console.log('INTENT: Saldo cuenta');
            const data = this.productsService.getProducts();
            conv.ask('El saldo  de la cuenta es de ' + data.num);
        });
    }
}