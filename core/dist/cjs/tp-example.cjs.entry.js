'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');
const color_function = require('./color.function-2f28fd83.js');

const exampleCss = ".sc-tp-example-h{--background:var(--tp-color-neutral-2);--color:var(--tp-color-neutral-10);--icon-stroke:var(--tp-color-neutral-10);--background-hover:var(--tp-color-neutral-2-shade);--background-focus:var(--tp-color-neutral-2-tint)}.sc-tp-example-h{display:block;padding:1rem 2rem;color:var(--color);background:var(--background);transition:background-color 250ms}.tp-example__container.sc-tp-example{display:flex;align-items:center;justify-content:space-between}.tp-example__icon.sc-tp-example{--stroke:var(--icon-stroke)}.sc-tp-example-h:hover{background:var(--background-hover)}.sc-tp-example-h:focus{background:var(--background-focus)}.tp-color.sc-tp-example-h{--background:var(--tp-color-base);--color:var(--tp-color-contrast);--icon-stroke:var(--tp-color-contrast);--background-hover:var(--tp-color-shade);--background-focus:var(--tp-color-tint)}";

const TpExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.icon = undefined;
        this.defaultIcon = index.getAssetPath('./assets/tp-x.svg');
    }
    render() {
        const { color, icon, defaultIcon } = this;
        return (index.h(index.Host, { tabindex: "0", class: color_function.createColorClasses(color, {
                'tp-example': true,
            }) }, index.h("div", { class: "tp-example__container" }, index.h("span", null, "Lorem ipsum, dolor sit amet consectetur."), index.h("ion-button", null, "ion button"), index.h("ion-icon", { class: "tp-example__icon", src: icon !== null && icon !== void 0 ? icon : defaultIcon, "aria-hidden": "true" })), index.h("ion-radio-group", { class: "story__ion-radio-group" }, index.h("ion-radio", { value: "1" }, index.h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")), index.h("ion-radio", { value: "2" }, index.h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")), index.h("ion-radio", { value: "3" }, index.h("ion-text", null, "Lorem ipsum, dolor sit amet consectetur.")))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpExample.style = exampleCss;

exports.tp_example = TpExample;

//# sourceMappingURL=tp-example.cjs.entry.js.map