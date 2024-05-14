import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const toolbarCss = ":host{--tp-background:var(--tp-color-neutral-2);--tp-center-width:auto;--tp-center-margin:0 16px;--tp-justify-content:space-between;padding:8px 16px;background:var(--tp-background);min-height:48px;height:auto;display:block;display:flex;align-items:center}.tp-toolbar__container{max-width:1200px;width:100%;margin:0 auto;display:flex;align-items:center;justify-content:var(--tp-justify-content)}.tp-toolbar__center{margin:var(--tp-center-margin);width:var(--tp-center-width)}:host(.tp-color.tp-toolbar){--tp-background:var(--tp-color-base)}:host(.tp-color.tp-toolbar) ::slotted(ion-button){color:var(--tp-color-contrast) !important}";
const TpToolbarStyle0 = toolbarCss;

const TpToolbar$1 = /*@__PURE__*/ proxyCustomElement(class TpToolbar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
    }
    render() {
        const { color } = this;
        return (h(Host, { key: 'd7bfddd4fb0fb89b727a652aa8ae3f895c216037', "from-stencil": true, class: createColorClasses(color, {
                'tp-toolbar': true,
            }) }, h("div", { key: '81a132d215d4eca9029fa6f494f88d9194ce891d', class: "tp-toolbar__container" }, h("slot", { key: 'da256225059a01a4cb2d23f7f8bbf5102a431a97', name: "start" }), h("div", { key: 'e8dbbc017e502efbd3e81bf94f3581856cb4c32f', class: "tp-toolbar__center" }, h("slot", { key: 'a28a9c58e641a4fcd3b6dffbe9fc2b4fcceff996' })), h("slot", { key: '0be1755de9f9a055dfaec686ad362c7aa6e24c57', name: "end" }))));
    }
    static get style() { return TpToolbarStyle0; }
}, [1, "tp-toolbar", {
        "color": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-toolbar"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-toolbar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpToolbar$1);
            }
            break;
    } });
}

const TpToolbar = TpToolbar$1;
const defineCustomElement = defineCustomElement$1;

export { TpToolbar, defineCustomElement };

//# sourceMappingURL=tp-toolbar.js.map