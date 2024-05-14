import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const addCardCss = ".sc-tp-add-card-h{cursor:pointer;display:block}.tp-add-card__container.sc-tp-add-card{--border-radius:8px;--background:var(--tp-color-neutral-2);display:flex;align-items:center;max-width:366px}.tp-add-card__icon.sc-tp-add-card{color:var(--tp-color-neutral-10);width:24px;height:24px}.tp-color.sc-tp-add-card-h .tp-add-card__container.sc-tp-add-card{--background:var(--tp-color-base)}.tp-color.sc-tp-add-card-h .tp-add-card__icon.sc-tp-add-card{color:var(--tp-color-contrast)}.tp-color.sc-tp-add-card-h .tp-add-card__text.sc-tp-add-card{color:var(--tp-color-contrast)}";
const TpAddCardStyle0 = addCardCss;

const TpAddCard$1 = /*@__PURE__*/ proxyCustomElement(class TpAddCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.color = undefined;
        this.titulo = undefined;
        this.iconName = undefined;
    }
    render() {
        const { titulo, iconName, color } = this;
        return (h(Host, { key: '1c62ff96ac7565902a267a56a200396d336120a7', class: createColorClasses(color, {
                'tp-add-card': true,
            }) }, h("ion-item", { key: '911883614c8b3cdf840e4bbf3186c7eb418a88ae', class: "tp-add-card__container", "tp-spacingx": "s16", "tp-spacingy": "s16" }, h("ion-icon", { key: 'd4d284c4e7a1c4447d9875bfbf4d22895def9263', slot: "start", class: "tp-add-card__icon", src: iconName }), h("ion-text", { key: 'cda45fb53fc81889d95a865c6b9adaa4ac3d4b2b', class: "tp-add-card__text", "tp-type": "p16xb" }, h("span", { key: '5407b3108f844b6bbfdb7903f1a6607f8026d1bc' }, titulo)))));
    }
    static get style() { return TpAddCardStyle0; }
}, [2, "tp-add-card", {
        "color": [513],
        "titulo": [513],
        "iconName": [513, "icon-name"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-add-card"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-add-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpAddCard$1);
            }
            break;
    } });
}

const TpAddCard = TpAddCard$1;
const defineCustomElement = defineCustomElement$1;

export { TpAddCard, defineCustomElement };

//# sourceMappingURL=tp-add-card.js.map