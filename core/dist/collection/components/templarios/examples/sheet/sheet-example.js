import { Host, getAssetPath, h } from "@stencil/core";
/* import { IonButton } from '@ionic/core/components/ion-button';
import { TpIonButton } from '../../../ionic/button/utils/button.type'; */
export class SheetExample {
    constructor() {
        this.closeIcon = getAssetPath('./assets/tp-x.svg');
    }
    render() {
        const { closeIcon } = this;
        return (h(Host, null, h("ion-header", { class: "tp-sheet__header" }, h("ion-button", { fill: "clear" }, h("ion-icon", { slot: "icon-only", src: closeIcon }))), h("ion-content", { class: "tp-sheet__content" }, h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?"), h("ion-text", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam, at inventore laborum nesciunt adipisci? Voluptas illum omnis recusandae quasi, labore soluta voluptate eaque placeat?")), h("ion-footer", { class: "tp-sheet__footer" }, h("ion-button", { class: "tp-sheet__button", expand: "block" }, "Salvar"))));
    }
    static get is() { return "sheet-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["sheet-example.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["sheet-example.css"]
        };
    }
}
//# sourceMappingURL=sheet-example.js.map
