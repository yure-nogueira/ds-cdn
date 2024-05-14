import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const snackbarExampleCss = ".sc-snackbar-example-h{display:block}";
const SnackbarExampleStyle0 = snackbarExampleCss;

const SnackbarExample$1 = /*@__PURE__*/ proxyCustomElement(class SnackbarExample extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'e7e73e4abd8829e5cd39d3e50aada7c57320f267' }, h("div", { key: '9cf454d8aa3f463b1bae20de38745947efba188d', class: "tp-snackbar__container" }, h("ion-avatar", { key: '4e8b384b8e9081b6d2a3606eafc128ee35a51fe2', "tp-color": "brand-3", "tp-size": "xxs" }, h("ion-label", { key: '82bc7253f10534780379df4dc2a040a66cdfb874' }, "AB")), h("ion-text", { key: '65f5ae5ae954fe774a1ee6f12c4bbe2e1b71dc15', class: "tp-snackbar__text", "tp-type": "p16b" }, h("p", { key: '92353129a68d7e616932353339d8ebb1dcb6c331' }, "1.341 alunos fizeram o simulado")))));
    }
    static get style() { return SnackbarExampleStyle0; }
}, [2, "snackbar-example"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["snackbar-example"];
    components.forEach(tagName => { switch (tagName) {
        case "snackbar-example":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SnackbarExample$1);
            }
            break;
    } });
}

const SnackbarExample = SnackbarExample$1;
const defineCustomElement = defineCustomElement$1;

export { SnackbarExample, defineCustomElement };

//# sourceMappingURL=snackbar-example.js.map