import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const baseCss = ".sc-tp-base-h{--tp-background:var(--tp-color-neutral-2);--tp-text-color:var(--tp-color-neutral-10);--tp-border-radius:8px;--tp-padding-horizontal:16px;--tp-padding-vertical:16px;--tp-gap:8px}.sc-tp-base-h{display:flex;background:var(--tp-background);border-radius:var(--tp-border-radius);padding:var(--tp-padding-vertical) var(--tp-padding-horizontal);color:var(--color)}.sc-tp-base-s>ion-text{color:var(--tp-text-color)}.sc-tp-base-s>[slot=middle]{flex-grow:1}.sc-tp-base-h.sc-tp-base-s>[slot=middle]{padding-left:var(--tp-gap);padding-right:var(--tp-gap)}.tp-color.sc-tp-base-h{--tp-background:var(--tp-color-base);--tp-text-color:var(--tp-color-contrast)}.tp-base--radius-s00.sc-tp-base-h{--tp-border-radius:0px}.tp-base--radius-s02.sc-tp-base-h{--tp-border-radius:2px}.tp-base--radius-s04.sc-tp-base-h{--tp-border-radius:4px}.tp-base--radius-s08.sc-tp-base-h{--tp-border-radius:8px}.sc-tp-base-h.tp-base--tp-gap-s00.sc-tp-base-s>[slot=middle]{--tp-gap:0}.sc-tp-base-h.tp-base--tp-gap-s02.sc-tp-base-s>[slot=middle]{--tp-gap:1px}.sc-tp-base-h.tp-base--tp-gap-s04.sc-tp-base-s>[slot=middle]{--tp-gap:2px}.sc-tp-base-h.tp-base--tp-gap-s08.sc-tp-base-s>[slot=middle]{--tp-gap:4px}.sc-tp-base-h.tp-base--tp-gap-s12.sc-tp-base-s>[slot=middle]{--tp-gap:6px}.sc-tp-base-h.tp-base--tp-gap-s16.sc-tp-base-s>[slot=middle]{--tp-gap:8px}.sc-tp-base-h.tp-base--tp-gap-s20.sc-tp-base-s>[slot=middle]{--tp-gap:10px}.sc-tp-base-h.tp-base--tp-gap-s24.sc-tp-base-s>[slot=middle]{--tp-gap:12px}.tp-base--spacing-h-s00.sc-tp-base-h{--tp-padding-horizontal:0}.tp-base--spacing-h-s02.sc-tp-base-h{--tp-padding-horizontal:2px}.tp-base--spacing-h-s04.sc-tp-base-h{--tp-padding-horizontal:4px}.tp-base--spacing-h-s08.sc-tp-base-h{--tp-padding-horizontal:8px}.tp-base--spacing-h-s12.sc-tp-base-h{--tp-padding-horizontal:12px}.tp-base--spacing-h-s16.sc-tp-base-h{--tp-padding-horizontal:16px}.tp-base--spacing-h-s20.sc-tp-base-h{--tp-padding-horizontal:20px}.tp-base--spacing-h-s24.sc-tp-base-h{--tp-padding-horizontal:24px}.tp-base--spacing-v-s00.sc-tp-base-h{--tp-padding-vertical:0}.tp-base--spacing-v-s02.sc-tp-base-h{--tp-padding-vertical:2px}.tp-base--spacing-v-s04.sc-tp-base-h{--tp-padding-vertical:4px}.tp-base--spacing-v-s08.sc-tp-base-h{--tp-padding-vertical:8px}.tp-base--spacing-v-s12.sc-tp-base-h{--tp-padding-vertical:12px}.tp-base--spacing-v-s16.sc-tp-base-h{--tp-padding-vertical:16px}.tp-base--spacing-v-s20.sc-tp-base-h{--tp-padding-vertical:20px}.tp-base--spacing-v-s24.sc-tp-base-h{--tp-padding-vertical:24px}";
const TpBaseStyle0 = baseCss;

const TpBase$1 = /*@__PURE__*/ proxyCustomElement(class TpBase extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.color = undefined;
        this.radius = undefined;
        this.gap = undefined;
        this.spacingV = undefined;
        this.spacingH = undefined;
    }
    render() {
        const { color, radius, gap, spacingV, spacingH } = this;
        return (h(Host, { key: 'aa9b6c972cf8b386905a6532015b9d5a33f50594', class: createColorClasses(color, {
                'tp-base': true,
                [`tp-base--radius-${radius}`]: radius !== undefined,
                [`tp-base--gap-${gap}`]: gap !== undefined,
                [`tp-base--spacing-v-${spacingV}`]: spacingV !== undefined,
                [`tp-base--spacing-h-${spacingH}`]: spacingH !== undefined,
            }) }, h("slot", { key: '05a187d8c6546fbff3af9be24906a730593b4f95', name: "start" }), h("slot", { key: 'bd30bf6cb980936beaa11d62a400f89fd0e4227d', name: "middle" }), h("slot", { key: '92b041ddab7e82f651a5f809daf7202f07d476d7', name: "end" }), h("slot", { key: 'fc61ebe2c0619ec6d284be367bc1cdb799836e11' })));
    }
    static get style() { return TpBaseStyle0; }
}, [6, "tp-base", {
        "color": [513],
        "radius": [513],
        "gap": [513],
        "spacingV": [513, "spacing-v"],
        "spacingH": [513, "spacing-h"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-base"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-base":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpBase$1);
            }
            break;
    } });
}

const TpBase = TpBase$1;
const defineCustomElement = defineCustomElement$1;

export { TpBase, defineCustomElement };

//# sourceMappingURL=tp-base.js.map