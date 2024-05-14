import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const exampleCss = ".sc-tp-example-h{--background:var(--tp-color-neutral-2);--color:var(--tp-color-neutral-10);--icon-stroke:var(--tp-color-neutral-10);--background-hover:var(--tp-color-neutral-2-shade);--background-focus:var(--tp-color-neutral-2-tint)}.sc-tp-example-h{display:block;padding:1rem 2rem;color:var(--color);background:var(--background);transition:background-color 250ms}.tp-example__container.sc-tp-example{display:flex;align-items:center;justify-content:space-between}.tp-example__icon.sc-tp-example{--stroke:var(--icon-stroke)}.sc-tp-example-h:hover{background:var(--background-hover)}.sc-tp-example-h:focus{background:var(--background-focus)}.tp-color.sc-tp-example-h{--background:var(--tp-color-base);--color:var(--tp-color-contrast);--icon-stroke:var(--tp-color-contrast);--background-hover:var(--tp-color-shade);--background-focus:var(--tp-color-tint)}";
const TpExampleStyle0 = exampleCss;

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
        return (h(Host, { key: '2db9445b70bd471844bc3d8d09aa83e2a3e814c5', tabindex: "0", class: createColorClasses(color, {
                'tp-example': true,
            }) }, h("div", { key: '0fc3d15312acf7e3c2580f8017e68705cf37593d', class: "tp-example__container" }, h("span", { key: '96b2c9cfe8fa49b25cf2f28f73f6b807dfd8a7fe' }, "Lorem ipsum, dolor sit amet consectetur."), h("ion-button", { key: '3171415858342197cd39100ca7ccba50d1c3cad3' }, "ion button"), h("ion-icon", { key: '068fb06ee3c320e03a4f8b234e020b8ae5b2074b', class: "tp-example__icon", src: icon !== null && icon !== void 0 ? icon : defaultIcon, "aria-hidden": "true" })), h("ion-radio-group", { key: '705407e2d322a87e3c72188c47fd01f41f0a5084', class: "story__ion-radio-group" }, h("ion-radio", { key: 'd318a7f4321273a2165d5326f4ec15058a3ecce1', value: "1" }, h("ion-text", { key: '022b801dbba9dc7b8ab4acfaf878a89f4ba9b2e3' }, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { key: 'b58241f0f94306ff693f48d6bdf3f74548c4d69e', value: "2" }, h("ion-text", { key: 'bd08d7a235285641408599d54795e13b602bc1ad' }, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { key: '6e91c61d5078b7f39d7ad9cb1f1fbb9fcce0d080', value: "3" }, h("ion-text", { key: '0b6d2fb592a1bb7477fb6321cf83698a3b087782' }, "Lorem ipsum, dolor sit amet consectetur.")))));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return TpExampleStyle0; }
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