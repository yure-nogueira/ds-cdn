import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const comparisonChartBarCss = "@charset \"UTF-8\";:host{display:inline-block}.tp-comparison-chart-bar__container{position:relative;width:8px;height:var(--tp-container-height);margin:0 auto;background:var(--tp-color-neutral-2);border-radius:4px}.tp-comparison-chart-bar__bar{position:absolute;bottom:0;left:0;width:100%;height:0%;background:var(--tp-color-brand-4);border-radius:4px;animation:load-comparison-chart-bar 1s forwards ease-in-out}.tp-comparison-chart-bar__marker{position:absolute;bottom:var(--tp-marker-value);left:0;display:none;width:24px;height:6px;background:var(--tp-color-caution);border-radius:3px;transform:translate(-8px, 50%)}.tp-comparison-chart-bar__label{display:flex;margin-top:10px}:host(.tp-color) .tp-comparison-chart-bar__container{background:rgba(var(--tp-color-base-rgb), 0.4)}:host(.tp-color) .tp-comparison-chart-bar__bar{background:var(--tp-color-base)}:host(.tp-color) .tp-comparison-chart-bar__marker{background:var(--tp-marker-color, var(--tp-color-caution))}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__container{background:var(--tp-color-neutral-15)}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__bar{background:var(--tp-color-neutral-3)}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__marker{background:var(--tp-color-neutral-35)}:host(.tp-comparison-chart-bar--has-marker) .tp-comparison-chart-bar__marker{display:initial}@keyframes load-comparison-chart-bar{from{height:0%}to{height:var(--tp-bar-value)}}";
const TpComparisonChartBarStyle0 = comparisonChartBarCss;

const TpComparisonChartBar$1 = /*@__PURE__*/ proxyCustomElement(class TpComparisonChartBar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.color = undefined;
        this.containerHeight = 200;
        this.barValue = 0;
        this.hasMarker = false;
        this.markerValue = 0;
        this.disabled = false;
        this.noLabel = false;
    }
    render() {
        const { color, containerHeight, barValue, hasMarker, markerValue, noLabel, disabled, } = this;
        return (h(Host, { key: '376d12e00e570804e5210fec96bd55a70c8d0054', class: createColorClasses(color, {
                'tp-comparison-chart-bar': true,
                'tp-comparison-chart-bar--disabled': disabled,
                'tp-comparison-chart-bar--has-marker': hasMarker,
            }), style: {
                '--tp-container-height': `${containerHeight}px`,
                '--tp-bar-value': `${barValue}%`,
                '--tp-marker-value': `${markerValue}%`,
            } }, h("div", { key: '06e34b96b5473919113c3e18d75eaa76d765f190', class: "tp-comparison-chart-bar__container" }, h("div", { key: '25c4e408221b763806a94f535c0ef29d97f89fb9', class: "tp-comparison-chart-bar__bar" }), hasMarker && h("div", { key: 'd0ccc3110365b706a3adcc4f66e28c7d274e8ca5', class: "tp-comparison-chart-bar__marker" })), !noLabel && (h("div", { key: '403e63af016d8ee30ba249d2e2b786ef72add848', class: "tp-comparison-chart-bar__label" }, h("slot", { key: 'fff655735321dab416a1ce917831f93307e779ef' })))));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return TpComparisonChartBarStyle0; }
}, [1, "tp-comparison-chart-bar", {
        "color": [513],
        "containerHeight": [514, "container-height"],
        "barValue": [514, "bar-value"],
        "hasMarker": [516, "has-marker"],
        "markerValue": [514, "marker-value"],
        "disabled": [516],
        "noLabel": [516, "no-label"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-comparison-chart-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-comparison-chart-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpComparisonChartBar$1);
            }
            break;
    } });
}

const TpComparisonChartBar = TpComparisonChartBar$1;
const defineCustomElement = defineCustomElement$1;

export { TpComparisonChartBar, defineCustomElement };

//# sourceMappingURL=tp-comparison-chart-bar.js.map