import { r as registerInstance, h, H as Host } from './index-7946b89c.js';

const dialogExampleCss = ".sc-dialog-example-h{display:block}";

const DialogExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("ion-header", { class: "tp-dialog__header" }, h("ion-button", { fill: "clear" }, h("ion-icon", { class: "tp-dialog__icon", slot: "icon-only", src: "./assets/tp-x.svg" }))), h("div", { class: "tp-dialog__content" }, h("ion-text", { "tp-type": "p16b" }, h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), h("ion-footer", { class: "tp-dialog__footer" }, h("ion-button", { class: "tp-dialog__button", fill: "outline" }, "Cancelar"), h("ion-button", { class: "tp-dialog__button" }, "Salvar"))));
    }
};
DialogExample.style = dialogExampleCss;

export { DialogExample as dialog_example };

//# sourceMappingURL=dialog-example.entry.js.map