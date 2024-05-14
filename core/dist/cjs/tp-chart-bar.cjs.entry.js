'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');
const color_function = require('./color.function-2f28fd83.js');

const chartBarCss = ":host{--tp-skeleton-height:calc(var(--height) * 1px);--tp-skeleton-width:calc(var(--width) * 1px);--tp-skeleton-background-rgb:var(--tp-color-neutral-10-rgb);display:block;width:calc(var(--width) * 1px);height:max-content;color:var(--tp-color-neutral-10);border-radius:2px}.tp-chart-bar__container{display:flex;flex-direction:column;align-items:center;width:100%;height:100%;height:calc(var(--height) + var(--height-label) * 1px);overflow:hidden;border-radius:2px}.tp-chart-bar__label{display:flex;margin-bottom:6px;transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}.tp-chart-bar__progress{width:100%;height:calc(var(--height) * 1px);background:var(--tp-color-brand-4);border-radius:2px;animation:load-chart-bar forwards 400ms ease-in-out}.tp-chart-bar__label-skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:2px;width:var(--tp-skeleton-width);height:12px;margin:0 0 6px}.tp-chart-bar__skeleton{--background-rgb:var(--tp-skeleton-background-rgb);--border-radius:2px;width:var(--tp-skeleton-width);height:var(--tp-skeleton-height);margin:0}:host(.tp-chart-bar--no-label){background:var(--tp-color-neutral-2)}:host(.tp-chart-bar--loading){background:transparent}:host(.tp-color) .tp-chart-bar__progress{background:var(--tp-color-base)}@keyframes load-chart-bar{0%{transform:translateY(calc(var(--height) * 1px))}100%{transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}}";

const TpChartBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.value = 0;
        this.height = 50;
        this.width = 32;
        this.noLabel = false;
        this.loading = undefined;
    }
    render() {
        const { color, value, height, width, noLabel, loading } = this;
        const percentage = (height * Math.min(Math.max(0, value), 100)) / 100;
        let content;
        if (loading) {
            content = (index.h("div", { class: "tp-chart-bar__container" }, !noLabel && (index.h("ion-skeleton-text", { class: "tp-chart-bar__label-skeleton", animated: true })), index.h("ion-skeleton-text", { class: "tp-chart-bar__skeleton", animated: true })));
        }
        else {
            content = (index.h("div", { class: "tp-chart-bar__container" }, !noLabel && (index.h("div", { class: "tp-chart-bar__label" }, index.h("slot", null))), index.h("div", { class: "tp-chart-bar__progress" })));
        }
        return (index.h(index.Host, { class: color_function.createColorClasses(color, {
                'tp-chart-bar': true,
                'tp-chart-bar--no-label': noLabel,
                'tp-chart-bar--loading': loading,
            }), style: {
                '--value': `${percentage}`,
                '--height': `${height}`,
                '--width': `${width}`,
            } }, content));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpChartBar.style = chartBarCss;

exports.tp_chart_bar = TpChartBar;

//# sourceMappingURL=tp-chart-bar.cjs.entry.js.map