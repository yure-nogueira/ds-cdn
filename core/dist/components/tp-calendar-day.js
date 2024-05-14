import { getAssetPath, proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const TP_CALENDAR_DAY = {
    icons: {
        check: getAssetPath('./assets/tp-check.svg'),
    },
};

const calendarDayCss = ".tp-calendar-day__date{display:flex;align-items:center;justify-content:center;height:48px;cursor:pointer}.tp-calendar-day__container{border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:transparent}.tp-calendar-day__container:hover{background:var(--tp-color-neutral-3)}.tp-calendar-day__text{font-size:12px;font-weight:600;line-height:12px}.tp-calendar-day__checked-icon{display:none;width:16px;height:16px}:host(.tp-calendar-day--active) .tp-calendar-day__container{background:var(--tp-active-background, var(--tp-color-brand-3));color:var(--tp-active-color)}:host(.tp-calendar-day--outlined) .tp-calendar-day__container{border:1px solid var(--tp-color-warning)}:host(.tp-calendar-day--checked) .tp-calendar-day__container{border:1px solid var(--tp-color-neutral-3)}:host(.tp-calendar-day--checked) .tp-calendar-day__text{display:none}:host(.tp-calendar-day--checked) .tp-calendar-day__checked-icon{display:block}:host(.tp-calendar-day--disabled){color:var(--tp-color-neutral-4)}:host(.tp-calendar-day--disabled:hover) .tp-calendar-day__container{background:transparent}:host(.tp-calendar-day--disabled:hover) .tp-calendar-day__date{cursor:initial}";
const TpCalendarDayStyle0 = calendarDayCss;

const TpCalendarDay$1 = /*@__PURE__*/ proxyCustomElement(class TpCalendarDay extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.active = false;
        this.checked = false;
        this.disabled = false;
        this.outlined = false;
    }
    render() {
        const { active, checked, outlined, disabled } = this;
        return (h(Host, { key: '616205625c62dc047c90c9cf49862bfb087fbb76', class: {
                'tp-calendar-day': true,
                'tp-calendar-day--active': active,
                'tp-calendar-day--checked': checked,
                'tp-calendar-day--disabled': disabled,
                'tp-calendar-day--outlined': outlined,
            } }, h("div", { key: '3c3cc80be721384a1a8e7cb52d8480f11fdbc8ea', class: "tp-calendar-day__date" }, h("div", { key: 'f54a61381dcc4fde6b146e6de5442ad85312997f', class: "tp-calendar-day__container" }, h("ion-text", { key: 'ab0f7807a43e13a8172ef66012376221e5cba8d6', class: "tp-calendar-day__text" }, h("slot", { key: '2954aab84b1823ef6cd8d3a63276289e2bd1df0e' })), h("ion-icon", { key: '8762e4c3870538b779e561e0c188bdc245e4dedf', class: "tp-calendar-day__checked-icon", src: TP_CALENDAR_DAY.icons.check })))));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return TpCalendarDayStyle0; }
}, [1, "tp-calendar-day", {
        "active": [516],
        "checked": [516],
        "disabled": [516],
        "outlined": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-calendar-day"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-calendar-day":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpCalendarDay$1);
            }
            break;
    } });
}

const TpCalendarDay = TpCalendarDay$1;
const defineCustomElement = defineCustomElement$1;

export { TpCalendarDay, defineCustomElement };

//# sourceMappingURL=tp-calendar-day.js.map