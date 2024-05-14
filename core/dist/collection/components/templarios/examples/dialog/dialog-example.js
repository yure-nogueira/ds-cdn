import { Host, h } from "@stencil/core";
/* import { IonButton } from '@ionic/core/components/ion-button';
import { TpIonButton } from '../../../ionic/button/utils/button.type'; */
export class DialogExample {
    render() {
        return (h(Host, null, h("ion-header", { class: "tp-dialog__header" }, h("ion-button", { fill: "clear" }, h("ion-icon", { class: "tp-dialog__icon", slot: "icon-only", src: "./assets/tp-x.svg" }))), h("div", { class: "tp-dialog__content" }, h("ion-text", { "tp-type": "p16b" }, h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), h("ion-footer", { class: "tp-dialog__footer" }, h("ion-button", { class: "tp-dialog__button", fill: "outline" }, "Cancelar"), h("ion-button", { class: "tp-dialog__button" }, "Salvar"))));
    }
    static get is() { return "dialog-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["dialog-example.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dialog-example.css"]
        };
    }
}
//# sourceMappingURL=dialog-example.js.map
