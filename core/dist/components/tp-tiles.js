import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const tilesCss = ":host{--tp-padding:16px;--tp-background:var(--tp-color-neutral-2);--tp-border-radius:8px;--tp-border-background:var(--tp-color-neutral-5);--tp-border-background-selected:var(--tp-color-brand-3);--tp-font-size-title:24px;--tp-color-title:var(--tp-color-neutral-10);--tp-font-size-label:12px;--tp-color-label:var(--tp-color-neutral-10);--tp-text-transform:uppercase}:host(.tp-tiles){display:flex;background:var(--tp-background);border-radius:var(--tp-border-radius)}:host(.tp-tiles) .tp-tiles__content{padding:var(--tp-padding);display:flex;flex-direction:column;text-align:left;width:100%}:host(.tp-tiles) .tp-tiles__border{border-top-left-radius:var(--tp-border-radius);border-bottom-left-radius:var(--tp-border-radius);width:8px;min-height:100%;background:var(--tp-border-background)}:host(.tp-tiles) .tp-tiles__title{font-size:var(--tp-font-size-title);font-weight:600;line-height:24px;color:var(--tp-color-title);padding-bottom:4px}:host(.tp-tiles) .tp-tiles__label{font-size:var(--tp-font-size-label);font-weight:400;line-height:12px;color:var(--tp-color-label);padding-bottom:16px;text-transform:var(--tp-text-transform)}::slotted(*){margin-left:auto}:host(.tp-tiles--selected) .tp-tiles__border{background:var(--tp-border-background-selected)}:host(.tp-color){--tp-border-background-selected:var(--tp-color-base)}";
const TpTilesStyle0 = tilesCss;

const TpTiles$1 = /*@__PURE__*/ proxyCustomElement(class TpTiles extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
        this.titulo = undefined;
        this.label = undefined;
        this.solid = false;
        this.selected = false;
    }
    render() {
        const { color, titulo, label, selected, solid } = this;
        return (h(Host, { key: 'be8fd62b7396b6ba717770a659597ef9cbac882d', class: createColorClasses(color, {
                'tp-tiles': true,
                'tp-tiles--solid': solid,
                'tp-tiles--selected': selected,
            }) }, h("div", { key: '4bd7b27f31eee8c42f681ac4920f1787c7c1498c', class: "tp-tiles__border" }), h("div", { key: '22af9cbb49cc5d917a10c73426d3718259783d78', class: "tp-tiles__content" }, h("ion-text", { key: '48021d962b71fdf6da532c3778320ebea931c83c', class: "tp-tiles__title", innerHTML: titulo }), h("ion-text", { key: '3a306c426766aea259ea10ba1ed7619656a7c30f', class: "tp-tiles__label", innerHTML: label }), h("slot", { key: '491e904848c63480f2287a4491c64a9df636d444' }))));
    }
    static get style() { return TpTilesStyle0; }
}, [1, "tp-tiles", {
        "color": [513],
        "titulo": [1],
        "label": [1],
        "solid": [4],
        "selected": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-tiles"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-tiles":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpTiles$1);
            }
            break;
    } });
}

const TpTiles = TpTiles$1;
const defineCustomElement = defineCustomElement$1;

export { TpTiles, defineCustomElement };

//# sourceMappingURL=tp-tiles.js.map