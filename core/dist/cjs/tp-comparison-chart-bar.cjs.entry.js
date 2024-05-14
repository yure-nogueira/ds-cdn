'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');
const color_function = require('./color.function-2f28fd83.js');

const comparisonChartBarCss = "@charset \"UTF-8\";:host{--tp-skeleton-height:var(--tp-container-height);--tp-skeleton-background-rgb:var(--tp-color-neutral-10-rgb);display:inline-block}.tp-comparison-chart-bar__container{position:relative;width:8px;height:var(--tp-container-height);margin:0 auto;background:var(--tp-color-neutral-2);border-radius:4px}.tp-comparison-chart-bar__bar{position:absolute;bottom:0;left:0;width:100%;height:0%;background:var(--tp-color-brand-4);border-radius:4px;animation:load-comparison-chart-bar 1s forwards ease-in-out}.tp-comparison-chart-bar__marker{position:absolute;bottom:var(--tp-marker-value);left:0;display:none;width:24px;height:6px;background:var(--tp-color-caution);border-radius:3px;transform:translate(-8px, 50%)}.tp-comparison-chart-bar__label{display:flex;margin-top:10px}.tp-comparison-chart-bar__skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:4px;width:8px;height:var(--tp-skeleton-height);margin:0 auto}.tp-comparison-chart-bar__marker-skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:3px;position:absolute;bottom:50%;left:0;width:24px;height:6px;margin:0;transform:translate(-8px, 50%)}.tp-comparison-chart-bar__label-skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:2px;width:26px;height:12px;margin:10px 0 0}:host(.tp-color) .tp-comparison-chart-bar__container{background:rgba(var(--tp-color-base-rgb), 0.4)}:host(.tp-color) .tp-comparison-chart-bar__bar{background:var(--tp-color-base)}:host(.tp-color) .tp-comparison-chart-bar__marker{background:var(--tp-marker-color, var(--tp-color-caution))}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__container{background:var(--tp-color-neutral-15)}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__bar{background:var(--tp-color-neutral-3)}:host(.tp-comparison-chart-bar--disabled) .tp-comparison-chart-bar__marker{background:var(--tp-color-neutral-35)}:host(.tp-comparison-chart-bar--has-marker) .tp-comparison-chart-bar__marker{display:initial}:host(.tp-comparison-chart-bar--loading) .tp-comparison-chart-bar__container{background:transparent}@keyframes load-comparison-chart-bar{from{height:0%}to{height:var(--tp-bar-value)}}";

const TpComparisonChartBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.containerHeight = 200;
        this.barValue = 0;
        this.hasMarker = false;
        this.markerValue = 0;
        this.disabled = false;
        this.noLabel = false;
        this.loading = undefined;
    }
    render() {
        const { color, containerHeight, barValue, hasMarker, markerValue, noLabel, disabled, loading, } = this;
        let content;
        if (loading) {
            content = (index.h("div", null, index.h("div", { class: "tp-comparison-chart-bar__container" }, index.h("ion-skeleton-text", { class: "tp-comparison-chart-bar__skeleton", animated: true }), hasMarker && (index.h("ion-skeleton-text", { class: "tp-comparison-chart-bar__marker-skeleton", animated: true }))), !noLabel && (index.h("ion-skeleton-text", { class: "tp-comparison-chart-bar__label-skeleton", animated: true }))));
        }
        else {
            content = (index.h("div", null, index.h("div", { class: "tp-comparison-chart-bar__container" }, index.h("div", { class: "tp-comparison-chart-bar__bar" }), hasMarker && index.h("div", { class: "tp-comparison-chart-bar__marker" })), !noLabel && (index.h("div", { class: "tp-comparison-chart-bar__label" }, index.h("slot", null)))));
        }
        return (index.h(index.Host, { class: color_function.createColorClasses(color, {
                'tp-comparison-chart-bar': true,
                'tp-comparison-chart-bar--disabled': disabled,
                'tp-comparison-chart-bar--has-marker': hasMarker,
                'tp-comparison-chart-bar--loading': loading,
            }), style: {
                '--tp-container-height': `${containerHeight}px`,
                '--tp-bar-value': `${barValue}%`,
                '--tp-marker-value': `${markerValue}%`,
            } }, content));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpComparisonChartBar.style = comparisonChartBarCss;

exports.tp_comparison_chart_bar = TpComparisonChartBar;

//# sourceMappingURL=tp-comparison-chart-bar.cjs.entry.js.map