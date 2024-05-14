import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const horizontalChartBarCss = ":host{display:block;width:100%}:host(.tp-horizontal-chart-bar--spill) .tp-horizontal-chart-bar__progress{background-image:linear-gradient(-45deg, var(--tp-color-brand-4) 50%, rgba(var(--tp-color-neutral-2-rgb), 0.2) 50%, rgba(var(--tp-color-neutral-2-rgb), 0.2) 75%, var(--tp-color-brand-4) 75%, var(--tp-color-brand-4) 100%, rgba(var(--tp-color-neutral-2-rgb), 0.2) 100%, rgba(var(--tp-color-neutral-2-rgb), 0.2) 100%);background-size:24px 24px;animation:load-horizontal-chart-bar 1s forwards ease-in-out, progress-spill 15s linear infinite}.tp-horizontal-chart-bar__container{display:flex;align-items:center;width:100%}.tp-horizontal-chart-bar__track{width:100%;height:8px;background-color:var(--tp-track-color, var(--tp-color-neutral-15));border-radius:4px}.tp-horizontal-chart-bar__track--skeleton{--background-rgb:var(\n    --tp-skeleton-background-rgb,\n    var(--tp-color-neutral-10-rgb)\n  );margin:0}.tp-horizontal-chart-bar__progress{width:0%;min-width:8px;height:100%;background-color:var(--tp-color-brand-4);border-radius:4px;animation:load-horizontal-chart-bar 1s forwards ease-in-out}.tp-horizontal-chart-bar__label-container{display:flex;margin-left:12px}.tp-horizontal-chart-bar__label-container--skeleton{--border-radius:2px;--background-rgb:var(\n    --tp-skeleton-background-rgb,\n    var(--tp-color-neutral-10-rgb)\n  );width:var(--tp-skeleton-label-width, 36px);height:12px;margin:0 0 0 12px}:host(.tp-color.tp-horizontal-chart-bar--spill) .tp-horizontal-chart-bar__progress{background-image:linear-gradient(-45deg, var(--tp-color-base) 50%, rgba(var(--tp-color-neutral-2-rgb), 0.2) 50%, rgba(var(--tp-color-neutral-2-rgb), 0.2) 75%, var(--tp-color-base) 75%, var(--tp-color-base) 100%, rgba(var(--tp-color-neutral-2-rgb), 0.2) 100%, rgba(var(--tp-color-neutral-2-rgb), 0.2) 100%)}:host(.tp-color) .tp-horizontal-chart-bar__progress{background-color:var(--tp-color-base)}:host(.tp-horizontal-chart-bar--md) .tp-horizontal-chart-bar__track{height:12px;border-radius:6px}:host(.tp-horizontal-chart-bar--md) .tp-horizontal-chart-bar__progress{min-width:12px;border-radius:6px}@keyframes load-horizontal-chart-bar{0%{width:0%}100%{width:var(--tp-fill-percentage)}}@keyframes progress-spill{0%{background-position:0% 0%}100%{background-position:100% 0%}}";

const TpHorizontalChartBar$1 = /*@__PURE__*/ proxyCustomElement(class TpHorizontalChartBar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
        this.size = undefined;
        this.value = 0;
        this.maxCount = 100;
        this.noLabel = false;
        this.loading = undefined;
    }
    render() {
        const { color, size, value, maxCount, noLabel, loading } = this;
        const percentage = Math.min(Math.max(0, (value / maxCount) * 100), 100);
        const content = loading ? (h("div", { class: "tp-horizontal-chart-bar__container" }, h("ion-skeleton-text", { class: "tp-horizontal-chart-bar__track tp-horizontal-chart-bar__track--skeleton", animated: true }), !noLabel && (h("ion-skeleton-text", { class: "tp-horizontal-chart-bar__label-container tp-horizontal-chart-bar__label-container--skeleton", animated: true })))) : (h("div", { class: "tp-horizontal-chart-bar__container" }, h("div", { class: "tp-horizontal-chart-bar__track" }, h("div", { class: "tp-horizontal-chart-bar__progress" })), !noLabel && (h("div", { class: "tp-horizontal-chart-bar__label-container" }, h("slot", null)))));
        return (h(Host, { class: createColorClasses(color, {
                'tp-horizontal-chart-bar': true,
                'tp-horizontal-chart-bar--spill': percentage >= 100,
                [`tp-horizontal-chart-bar--${size}`]: Boolean(size),
            }), style: { '--tp-fill-percentage': `${percentage}%` } }, content));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return horizontalChartBarCss; }
}, [1, "tp-horizontal-chart-bar", {
        "color": [513],
        "size": [513],
        "value": [514],
        "maxCount": [514, "max-count"],
        "noLabel": [516, "no-label"],
        "loading": [1540]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-horizontal-chart-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-horizontal-chart-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpHorizontalChartBar$1);
            }
            break;
    } });
}

const TpHorizontalChartBar = TpHorizontalChartBar$1;
const defineCustomElement = defineCustomElement$1;

export { TpHorizontalChartBar, defineCustomElement };

//# sourceMappingURL=tp-horizontal-chart-bar.js.map