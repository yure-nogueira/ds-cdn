import { Host, h } from "@stencil/core";
/* import { IonButton } from '@ionic/core/components/ion-button';
import { TpIonButton } from '../../../ionic/button/utils/button.type'; */
export class SnackbarExample {
    render() {
        return (h(Host, { key: 'e7e73e4abd8829e5cd39d3e50aada7c57320f267' }, h("div", { key: '9cf454d8aa3f463b1bae20de38745947efba188d', class: "tp-snackbar__container" }, h("ion-avatar", { key: '4e8b384b8e9081b6d2a3606eafc128ee35a51fe2', "tp-color": "brand-3", "tp-size": "xxs" }, h("ion-label", { key: '82bc7253f10534780379df4dc2a040a66cdfb874' }, "AB")), h("ion-text", { key: '65f5ae5ae954fe774a1ee6f12c4bbe2e1b71dc15', class: "tp-snackbar__text", "tp-type": "p16b" }, h("p", { key: '92353129a68d7e616932353339d8ebb1dcb6c331' }, "1.341 alunos fizeram o simulado")))));
    }
    static get is() { return "snackbar-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["snackbar-example.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["snackbar-example.css"]
        };
    }
}
//# sourceMappingURL=snackbar-example.js.map
