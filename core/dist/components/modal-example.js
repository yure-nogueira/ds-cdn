import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const modalExampleCss = ".sc-modal-example-h{display:block}";

const ModalExample$1 = /*@__PURE__*/ proxyCustomElement(class ModalExample extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, null, h("ion-header", { class: "tp-modal__header" }, h("ion-button", { fill: "clear" }, h("ion-icon", { slot: "icon-only", src: "./assets/tp-x.svg" }))), h("div", { class: "tp-modal__content" }, h("ion-text", { "tp-type": "p16b" }, h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), h("ion-footer", { class: "tp-modal__footer" }, h("ion-button", { class: "tp-modal__button", fill: "outline" }, "Cancelar"), h("ion-button", { class: "tp-modal__button" }, "Salvar"))));
    }
    static get style() { return modalExampleCss; }
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