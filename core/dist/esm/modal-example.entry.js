import { r as registerInstance, h, H as Host } from './index-7946b89c.js';

const modalExampleCss = ".sc-modal-example-h{display:block}";

const ModalExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("ion-header", { class: "tp-modal__header" }, h("ion-button", { fill: "clear" }, h("ion-icon", { slot: "icon-only", src: "./assets/tp-x.svg" }))), h("div", { class: "tp-modal__content" }, h("ion-text", { "tp-type": "p16b" }, h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), h("ion-footer", { class: "tp-modal__footer" }, h("ion-button", { class: "tp-modal__button", fill: "outline" }, "Cancelar"), h("ion-button", { class: "tp-modal__button" }, "Salvar"))));
    }
};
ModalExample.style = modalExampleCss;

export { ModalExample as modal_example };

//# sourceMappingURL=modal-example.entry.js.map