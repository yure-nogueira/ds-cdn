import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const chartRadialCss = "@charset \"UTF-8\";:host{position:relative;display:flex;width:var(--tp-size, 56px);height:var(--tp-size, 56px)}.tp-chart-radial__container{width:var(--tp-size, 56px);height:var(--tp-size, 56px)}.tp-chart-radial__track,.tp-chart-radial__progress{transform:rotate(-90deg);transform-origin:18px 18px;transition:1s ease-in-out;fill:none;stroke-dashoffset:0;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.tp-chart-radial__track{stroke:var(--tp-color-neutral-2)}.tp-chart-radial__progress{stroke-dasharray:var(--tp-progress-percentage) 100}.tp-chart-radial__text-container{position:absolute;top:50%;left:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;transform:translate(-50%, -50%)}.tp-chart-radial__text-container ::slotted(ion-label[slot=title]){font-weight:600 !important;font-size:14px !important;line-height:16px !important}.tp-chart-radial__text-container ::slotted(ion-label[slot=subtitle]){display:none;font-weight:400 !important}:host(.tp-color) .tp-chart-radial__track{stroke:var(--tp-color-base)}:host(.tp-chart-radial--xs){--tp-size:48px;--tp-title-font-size:12px;--tp-title-line-height:12px}:host(.tp-chart-radial--xs) .tp-chart-radial__text-container ::slotted(ion-label[slot=title]){font-size:var(--tp-title-font-size) !important;line-height:var(--tp-title-line-height) !important}:host(.tp-chart-radial--xs) .tp-chart-radial__text-container ::slotted(ion-label[slot=subtitle]){font-size:var(--tp-subtitle-font-size) !important;line-height:var(--tp-subtitle-line-height) !important;display:none}:host(.tp-chart-radial--sm){--tp-size:56px;--tp-title-font-size:14px;--tp-title-line-height:16px}:host(.tp-chart-radial--sm) .tp-chart-radial__text-container ::slotted(ion-label[slot=title]){font-size:var(--tp-title-font-size) !important;line-height:var(--tp-title-line-height) !important}:host(.tp-chart-radial--sm) .tp-chart-radial__text-container ::slotted(ion-label[slot=subtitle]){font-size:var(--tp-subtitle-font-size) !important;line-height:var(--tp-subtitle-line-height) !important;display:none}:host(.tp-chart-radial--md){--tp-size:80px;--tp-title-font-size:16px;--tp-title-line-height:16px;--tp-subtitle-font-size:10px;--tp-subtitle-line-height:12px}:host(.tp-chart-radial--md) .tp-chart-radial__text-container ::slotted(ion-label[slot=title]){font-size:var(--tp-title-font-size) !important;line-height:var(--tp-title-line-height) !important}:host(.tp-chart-radial--md) .tp-chart-radial__text-container ::slotted(ion-label[slot=subtitle]){font-size:var(--tp-subtitle-font-size) !important;line-height:var(--tp-subtitle-line-height) !important;display:initial}:host(.tp-chart-radial--lg){--tp-size:108px;--tp-title-font-size:20px;--tp-title-line-height:20px;--tp-subtitle-font-size:12px;--tp-subtitle-line-height:12px}:host(.tp-chart-radial--lg) .tp-chart-radial__text-container ::slotted(ion-label[slot=title]){font-size:var(--tp-title-font-size) !important;line-height:var(--tp-title-line-height) !important}:host(.tp-chart-radial--lg) .tp-chart-radial__text-container ::slotted(ion-label[slot=subtitle]){font-size:var(--tp-subtitle-font-size) !important;line-height:var(--tp-subtitle-line-height) !important;display:initial}";

const TpChartRadial$1 = /*@__PURE__*/ proxyCustomElement(class TpChartRadial extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
        this.size = undefined;
        this.items = [];
    }
    updateTrackColors() {
        const progresses = this.host.shadowRoot.querySelectorAll('.tp-chart-radial__progress');
        progresses.forEach((progress) => {
            const itemIndex = Number(progress.dataset['index']);
            const item = this.items[itemIndex];
            progress.style.stroke = `var(--tp-color-${item.color})`;
        });
    }
    componentDidLoad() {
        this.updateTrackColors();
    }
    render() {
        const { color, size, items } = this;
        const progressesData = {
            total: 0,
            singles: [],
        };
        items.forEach((item) => {
            progressesData.total += item.quantity;
            progressesData.singles.push(progressesData.total);
        });
        const reversedItems = items.slice(0).reverse();
        return (h(Host, { class: createColorClasses(color, {
                'tp-chart-radial': true,
                [`tp-chart-radial--${size}`]: Boolean(size),
            }) }, h("svg", { class: "tp-chart-radial__container", viewBox: "0 0 36 36" }, h("circle", { class: "tp-chart-radial__track", cx: "18", cy: "18", r: "16" }), reversedItems.map((item, index) => {
            const originalIndex = items.length - index - 1;
            const progressPercentage = (progressesData.singles[originalIndex] / progressesData.total) *
                100;
            if (!item.ignore && item.quantity) {
                return (h("circle", { cx: "18", cy: "18", r: "16", "data-index": originalIndex, class: "tp-chart-radial__progress", style: {
                        '--tp-progress-percentage': `${progressPercentage}`,
                    } }));
            }
        })), h("div", { class: "tp-chart-radial__text-container" }, h("slot", { name: "title" }), h("slot", { name: "subtitle" }))));
    }
    static get assetsDirs() { return ["assets"]; }
    get host() { return this; }
    static get watchers() { return {
        "items": ["updateTrackColors"]
    }; }
    static get style() { return chartRadialCss; }
}, [1, "tp-chart-radial", {
        "color": [513],
        "size": [513],
        "items": [16]
    }, undefined, {
        "items": ["updateTrackColors"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-chart-radial"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-chart-radial":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpChartRadial$1);
            }
            break;
    } });
}

const TpChartRadial = TpChartRadial$1;
const defineCustomElement = defineCustomElement$1;

export { TpChartRadial, defineCustomElement };

//# sourceMappingURL=tp-chart-radial.js.map