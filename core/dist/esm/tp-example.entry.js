import { r as registerInstance, g as getAssetPath, h, H as Host } from './index-7946b89c.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const exampleCss = ".sc-tp-example-h{--background:var(--tp-color-neutral-2);--color:var(--tp-color-neutral-10);--icon-stroke:var(--tp-color-neutral-10);--background-hover:var(--tp-color-neutral-2-shade);--background-focus:var(--tp-color-neutral-2-tint)}.sc-tp-example-h{display:block;padding:1rem 2rem;color:var(--color);background:var(--background);transition:background-color 250ms}.tp-example__container.sc-tp-example{display:flex;align-items:center;justify-content:space-between}.tp-example__icon.sc-tp-example{--stroke:var(--icon-stroke)}.sc-tp-example-h:hover{background:var(--background-hover)}.sc-tp-example-h:focus{background:var(--background-focus)}.tp-color.sc-tp-example-h{--background:var(--tp-color-base);--color:var(--tp-color-contrast);--icon-stroke:var(--tp-color-contrast);--background-hover:var(--tp-color-shade);--background-focus:var(--tp-color-tint)}";

const TpExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TpExample.style = exampleCss;

export { TpExample as tp_example };

//# sourceMappingURL=tp-example.entry.js.map