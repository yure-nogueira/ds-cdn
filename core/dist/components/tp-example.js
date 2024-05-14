import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const exampleCss = ".sc-tp-example-h{--background:var(--tp-color-neutral-2);--color:var(--tp-color-neutral-10);--icon-stroke:var(--tp-color-neutral-10);--background-hover:var(--tp-color-neutral-2-shade);--background-focus:var(--tp-color-neutral-2-tint)}.sc-tp-example-h{display:block;padding:1rem 2rem;color:var(--color);background:var(--background);transition:background-color 250ms}.tp-example__container.sc-tp-example{display:flex;align-items:center;justify-content:space-between}.tp-example__icon.sc-tp-example{--stroke:var(--icon-stroke)}.sc-tp-example-h:hover{background:var(--background-hover)}.sc-tp-example-h:focus{background:var(--background-focus)}.tp-color.sc-tp-example-h{--background:var(--tp-color-base);--color:var(--tp-color-contrast);--icon-stroke:var(--tp-color-contrast);--background-hover:var(--tp-color-shade);--background-focus:var(--tp-color-tint)}";

const TpExample$1 = /*@__PURE__*/ proxyCustomElement(class TpExample extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.color = undefined;
        this.icon = undefined;
        this.defaultIcon = getAssetPath('./assets/tp-x.svg');
    }
    render() {
        const { color, icon, defaultIcon } = this;
        return (h(Host, { tabindex: "0", class: createColorClasses(color, {
                'tp-example': true,
            }) }, h("div", { class: "tp-example__container" }, h("span", null, "Lorem ipsum, dolor sit amet consectetur."), h("ion-button", null, "ion button"), h("ion-icon", { class: "tp-example__icon", src: icon !== null && icon !== void 0 ? icon : defaultIcon, "aria-hidden": "true" })), h("ion-radio-group", { class: "story__ion-radio-group" }, h("ion-radio", { value: "1" }, h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { value: "2" }, h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { value: "3" }, h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")))));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return exampleCss; }
}, [2, "tp-example", {
        "color": [513],
        "icon": [513],
        "defaultIcon": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-example"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-example":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpExample$1);
            }
            break;
    } });
}

const TpExample = TpExample$1;
const defineCustomElement = defineCustomElement$1;

export { TpExample, defineCustomElement };

//# sourceMappingURL=tp-example.js.map