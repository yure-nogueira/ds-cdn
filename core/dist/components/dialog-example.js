import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const dialogExampleCss = ".sc-dialog-example-h{display:block}";

const DialogExample$1 = /*@__PURE__*/ proxyCustomElement(class DialogExample extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, null, h("ion-header", { class: "tp-dialog__header" }, h("ion-button", { fill: "clear" }, h("ion-icon", { class: "tp-dialog__icon", slot: "icon-only", src: "./assets/tp-x.svg" }))), h("div", { class: "tp-dialog__content" }, h("ion-text", { "tp-type": "p16b" }, h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), h("ion-footer", { class: "tp-dialog__footer" }, h("ion-button", { class: "tp-dialog__button", fill: "outline" }, "Cancelar"), h("ion-button", { class: "tp-dialog__button" }, "Salvar"))));
    }
    static get style() { return dialogExampleCss; }
}, [2, "dialog-example"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dialog-example"];
    components.forEach(tagName => { switch (tagName) {
        case "dialog-example":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DialogExample$1);
            }
            break;
    } });
}

const DialogExample = DialogExample$1;
const defineCustomElement = defineCustomElement$1;

export { DialogExample, defineCustomElement };

//# sourceMappingURL=dialog-example.js.map