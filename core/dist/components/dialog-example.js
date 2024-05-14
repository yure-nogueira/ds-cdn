import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const dialogExampleCss = ".sc-dialog-example-h{display:block}";
const DialogExampleStyle0 = dialogExampleCss;

const DialogExample$1 = /*@__PURE__*/ proxyCustomElement(class DialogExample extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '0525784c33d7f5a704a47ef2c0c8a96310f9eea5' }, h("ion-header", { key: '55578faf50777b4e2e3a0784208bd5d9f7125f5d', class: "tp-dialog__header" }, h("ion-button", { key: 'ffb2b081cd0bc4cbb9a4965d9f79a1d2b06da6fc', fill: "clear" }, h("ion-icon", { key: 'cfa74be6678fc9c901736ef3d461aee0c58bc1c5', class: "tp-dialog__icon", slot: "icon-only", src: "./assets/tp-x.svg" }))), h("div", { key: 'efe3fb34e7ed64c6bff37272486b00a03d9b7cd0', class: "tp-dialog__content" }, h("ion-text", { key: 'dcbe3d8ef67198f4f64e58c09739b2ce96a32911', "tp-type": "p16b" }, h("p", { key: 'b67ce36cdd22c74cda79123dc41b53b249705133' }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti cumque adipisci, voluptatibus facilis odio tenetur. In deleniti aliquam, unde facilis reiciendis suscipit laudantium numquam!"))), h("ion-footer", { key: 'bfdf9881b8071f2cbdcd11ff1fa338bbcdc070cd', class: "tp-dialog__footer" }, h("ion-button", { key: '3f18f67ae7d883f8e0d6fefc9940d3d7c5c44c13', class: "tp-dialog__button", fill: "outline" }, "Cancelar"), h("ion-button", { key: 'e5ae878f893ed5ade9e7435877b54419d068d260', class: "tp-dialog__button" }, "Salvar"))));
    }
    static get style() { return DialogExampleStyle0; }
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