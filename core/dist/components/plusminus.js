import { proxyCustomElement, HTMLElement, createEvent, getAssetPath, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

var TpPlusMinusStatus;
(function (TpPlusMinusStatus) {
    TpPlusMinusStatus["MINUS"] = "minus";
    TpPlusMinusStatus["PLUS"] = "plus";
})(TpPlusMinusStatus || (TpPlusMinusStatus = {}));
var TpPlusMinusDisabled;
(function (TpPlusMinusDisabled) {
    TpPlusMinusDisabled["MINUS"] = "minus";
    TpPlusMinusDisabled["PLUS"] = "plus";
    TpPlusMinusDisabled["BOTH"] = "both";
})(TpPlusMinusDisabled || (TpPlusMinusDisabled = {}));

const plusminusCss = ".sc-tp-plusminus-h{--tp-color:var(--tp-color-neutral-10);--tp-pointer-events:initial}.tp-plusminus.sc-tp-plusminus-h{font-size:32px;font-weight:600;line-height:32px;color:var(--tp-color);max-height:400px;width:100%;display:flex;justify-content:center;align-items:center}.tp-plusminus.sc-tp-plusminus-h .tp-plusminus__icon.sc-tp-plusminus{cursor:pointer;stroke:var(--tp-color);width:24px;height:24px}.tp-plusminus.sc-tp-plusminus-h .tp-plusminus__icon--minus.sc-tp-plusminus{margin-right:16px}.tp-plusminus.sc-tp-plusminus-h .tp-plusminus__icon--plus.sc-tp-plusminus{margin-left:16px}.tp-plusminus--disabled-minus.sc-tp-plusminus-h .tp-plusminus__icon--minus.sc-tp-plusminus,.tp-plusminus--disabled-plus.sc-tp-plusminus-h .tp-plusminus__icon--plus.sc-tp-plusminus{opacity:0.5;pointer-events:var(--tp-pointer-events)}.tp-plusminus--disabled-both.sc-tp-plusminus-h .tp-plusminus__icon--minus.sc-tp-plusminus,.tp-plusminus--disabled-both.sc-tp-plusminus-h .tp-plusminus__icon--plus.sc-tp-plusminus{opacity:0.5;pointer-events:var(--tp-pointer-events)}.tp-plusminus--xl.sc-tp-plusminus-h{font-size:48px}.tp-plusminus--xl.sc-tp-plusminus-h .tp-plusminus__icon.sc-tp-plusminus{width:48px;height:48px}.tp-color.sc-tp-plusminus-h{--tp-color:var(--tp-color-base);stroke:var(--tp-color-base)}";
const TpPlusminusStyle0 = plusminusCss;

const TpPlusMinus = /*@__PURE__*/ proxyCustomElement(class TpPlusMinus extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.tpChange = createEvent(this, "tpChange", 7);
        this.tpChangeAlt = createEvent(this, "tpChangeAlt", 7);
        this.iconMinus = getAssetPath('./assets/tp-minus-circle.svg');
        this.iconPlus = getAssetPath('./assets/tp-plus-circle.svg');
        this.onClick = (status) => {
            if (this.min === undefined ||
                this.max === undefined ||
                this.value === undefined ||
                !this.automaticDisabled) {
                return this.tpChange.emit(status);
            }
            if (status === TpPlusMinusStatus.MINUS && this.value === this.min)
                return;
            if (status === TpPlusMinusStatus.PLUS && this.value === this.max)
                return;
            const increment = status === TpPlusMinusStatus.MINUS ? -1 : 1;
            this.tpChangeAlt.emit(this.value + increment);
        };
        this.color = undefined;
        this.size = undefined;
        this.disabled = undefined;
        this.automaticDisabled = false;
        this.useSlot = true;
        this.value = undefined;
        this.min = undefined;
        this.max = undefined;
    }
    disabledHandler(newValue, _) {
        if (this.min === undefined ||
            this.max === undefined ||
            this.value === undefined ||
            !this.automaticDisabled)
            return;
        if (newValue === this.min && newValue === this.max) {
            return (this.disabled = 'both');
        }
        if (newValue === this.min) {
            return (this.disabled = 'minus');
        }
        if (newValue === this.max) {
            return (this.disabled = 'plus');
        }
        this.disabled = undefined;
    }
    componentDidLoad() {
        var _a;
        this.disabledHandler((_a = this.value) !== null && _a !== void 0 ? _a : 0, 0);
    }
    render() {
        const { iconMinus, iconPlus, size, color, disabled, useSlot, value } = this;
        return (h(Host, { key: '5511c82c3171f6155b5024c1d1debec225cad976', "from-stencil": true, class: createColorClasses(color, {
                'tp-plusminus': true,
                [`tp-plusminus--disabled-${disabled}`]: disabled !== undefined,
                [`tp-plusminus--${size}`]: size !== undefined,
            }) }, h("ion-icon", { key: '8d731659cbcc26f92ed5286abb6aaf4153e9c183', class: "tp-plusminus__icon tp-plusminus__icon--minus", src: iconMinus, onClick: () => this.onClick(TpPlusMinusStatus.MINUS) }), useSlot ? h("slot", null) : value !== null && value !== void 0 ? value : 0, h("ion-icon", { key: 'e8402cb37eef56824bbe8b34618d02447944b376', class: "tp-plusminus__icon tp-plusminus__icon--plus", src: iconPlus, onClick: () => this.onClick(TpPlusMinusStatus.PLUS) })));
    }
    static get assetsDirs() { return ["assets"]; }
    static get watchers() { return {
        "value": ["disabledHandler"]
    }; }
    static get style() { return TpPlusminusStyle0; }
}, [6, "tp-plusminus", {
        "color": [513],
        "size": [513],
        "disabled": [513],
        "automaticDisabled": [516, "automatic-disabled"],
        "useSlot": [516, "use-slot"],
        "value": [514],
        "min": [514],
        "max": [514]
    }, undefined, {
        "value": ["disabledHandler"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-plusminus"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-plusminus":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpPlusMinus);
            }
            break;
    } });
}

export { TpPlusMinus as T, defineCustomElement as d };

//# sourceMappingURL=plusminus.js.map