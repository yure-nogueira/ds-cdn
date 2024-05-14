'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const addCardCss = ".sc-tp-add-card-h{cursor:pointer;display:block}.tp-add-card__container.sc-tp-add-card{--border-radius:8px;--background:var(--tp-color-neutral-2);display:flex;align-items:center;max-width:366px}.tp-add-card__icon.sc-tp-add-card{color:var(--tp-color-neutral-10);width:24px;height:24px}.tp-color.sc-tp-add-card-h .tp-add-card__container.sc-tp-add-card{--background:var(--tp-color-base)}.tp-color.sc-tp-add-card-h .tp-add-card__icon.sc-tp-add-card{color:var(--tp-color-contrast)}.tp-color.sc-tp-add-card-h .tp-add-card__text.sc-tp-add-card{color:var(--tp-color-contrast)}";
const TpAddCardStyle0 = addCardCss;

const TpAddCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.titulo = undefined;
        this.iconName = undefined;
    }
    render() {
        const { titulo, iconName, color } = this;
        return (index.h(index.Host, { key: '1c62ff96ac7565902a267a56a200396d336120a7', class: color_function.createColorClasses(color, {
                'tp-add-card': true,
            }) }, index.h("ion-item", { key: '911883614c8b3cdf840e4bbf3186c7eb418a88ae', class: "tp-add-card__container", "tp-spacingx": "s16", "tp-spacingy": "s16" }, index.h("ion-icon", { key: 'd4d284c4e7a1c4447d9875bfbf4d22895def9263', slot: "start", class: "tp-add-card__icon", src: iconName }), index.h("ion-text", { key: 'cda45fb53fc81889d95a865c6b9adaa4ac3d4b2b', class: "tp-add-card__text", "tp-type": "p16xb" }, index.h("span", { key: '5407b3108f844b6bbfdb7903f1a6607f8026d1bc' }, titulo)))));
    }
};
TpAddCard.style = TpAddCardStyle0;

exports.tp_add_card = TpAddCard;

//# sourceMappingURL=tp-add-card.cjs.entry.js.map