import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const modalExampleCss = ".sc-modal-example-h{display:block}";
const ModalExampleStyle0 = modalExampleCss;

const ModalExample$1 = /*@__PURE__*/ proxyCustomElement(class ModalExample extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'b2750cab8aa03072f1c5c6095d040c4d5e9b4301' }, h("ion-header", { key: '0e3f81aacfedb6b2a94bd519da29a9bf63a48ff0', class: "tp-modal__header" }, h("ion-button", { key: '00ce5e96a1b7fdd308ee6d84cbd07e9f69c8e3f3', fill: "clear" }, h("ion-icon", { key: '86123714d1f360e6dc9f9d6462d8e2ec3ea08533', slot: "icon-only", src: "./assets/tp-x.svg" }))), h("div", { key: '6137cca7e6d9a9fb775b02df09f3c8350f909efa', class: "tp-modal__content" }, h("ion-text", { key: 'b1d9007231173810965bd468b320ef70cee07110', "tp-type": "p16b" }, h("p", { key: 'ba649f50e0cbe7a65e1fc4e192bf60e38c7280f1' }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), h("ion-footer", { key: '2977044f1d16d73ccbe29482e691f5da00c80cba', class: "tp-modal__footer" }, h("ion-button", { key: 'ee24031c56a875f942cec088bf07c7c7de8a661a', class: "tp-modal__button", fill: "outline" }, "Cancelar"), h("ion-button", { key: '792c952c0643f05990e7dbd1fb14af0e0deba49f', class: "tp-modal__button" }, "Salvar"))));
    }
    static get style() { return ModalExampleStyle0; }
}, [2, "modal-example"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["modal-example"];
    components.forEach(tagName => { switch (tagName) {
        case "modal-example":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ModalExample$1);
            }
            break;
    } });
}

const ModalExample = ModalExample$1;
const defineCustomElement = defineCustomElement$1;

export { ModalExample, defineCustomElement };

//# sourceMappingURL=modal-example.js.map