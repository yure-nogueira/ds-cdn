import { Host, h } from "@stencil/core";
/* import { IonButton } from '@ionic/core/components/ion-button';
import { TpIonButton } from '../../../ionic/button/utils/button.type'; */
export class ModalExample {
    render() {
        return (h(Host, null, h("ion-header", { class: "tp-modal__header" }, h("ion-button", { fill: "clear" }, h("ion-icon", { slot: "icon-only", src: "./assets/tp-x.svg" }))), h("div", { class: "tp-modal__content" }, h("ion-text", { "tp-type": "p16b" }, h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), h("ion-footer", { class: "tp-modal__footer" }, h("ion-button", { class: "tp-modal__button", fill: "outline" }, "Cancelar"), h("ion-button", { class: "tp-modal__button" }, "Salvar"))));
    }
    static get is() { return "modal-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["modal-example.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["modal-example.css"]
        };
    }
}
//# sourceMappingURL=modal-example.js.map
