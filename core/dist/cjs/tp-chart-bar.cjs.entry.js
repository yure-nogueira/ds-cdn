'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const chartBarCss = ":host{display:block;width:calc(var(--width) * 1px);height:max-content;color:var(--tp-color-neutral-10);border-radius:2px}.tp-chart-bar__container{display:flex;flex-direction:column;align-items:center;width:100%;height:100%;height:calc(var(--height) + var(--height-label) * 1px);overflow:hidden;border-radius:2px}.tp-chart-bar__label{display:flex;margin-bottom:6px;transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}.tp-chart-bar__progress{width:100%;height:calc(var(--height) * 1px);background:var(--tp-color-brand-4);border-radius:2px;animation:load-chart-bar forwards 400ms ease-in-out}:host(.tp-chart-bar--no-label){background:var(--tp-color-neutral-2)}:host(.tp-color) .tp-chart-bar__progress{background:var(--tp-color-base)}@keyframes load-chart-bar{0%{transform:translateY(calc(var(--height) * 1px))}100%{transform:translateY(calc(var(--height) * 1px - var(--value) * 1px))}}";
const TpChartBarStyle0 = chartBarCss;

const TpChartBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.value = 0;
        this.width = 32;
        this.height = 50;
        this.noLabel = false;
    }
    render() {
        const { color, value, height, width, noLabel } = this;
        const percentage = (height * Math.min(Math.max(0, value), 100)) / 100;
        return (index.h(index.Host, { key: '1f6af6697223a62c1b3c3d59f3cad52ae8e3f0ad', class: color_function.createColorClasses(color, {
                'tp-chart-bar': true,
                'tp-chart-bar--no-label': noLabel,
            }), style: {
                '--value': `${percentage}`,
                '--height': `${height}`,
                '--width': `${width}`,
            } }, index.h("div", { key: 'cf6eb7eee3ecc942e579470df2f5e2041c90813f', class: "tp-chart-bar__container" }, !noLabel && (index.h("div", { key: '1ab315a2f7675e971530927b567d0893b98faed1', class: "tp-chart-bar__label" }, index.h("slot", { key: 'cee21bf9393643df29e6873e54480b38090a7186' }))), index.h("div", { key: 'e5c782e5acf26da11fa86c45330e9d6946e14636', class: "tp-chart-bar__progress" }))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpChartBar.style = TpChartBarStyle0;

exports.tp_chart_bar = TpChartBar;

//# sourceMappingURL=tp-chart-bar.cjs.entry.js.map