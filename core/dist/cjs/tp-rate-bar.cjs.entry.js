'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');
const color_function = require('./color.function-2f28fd83.js');

const rateBarCss = ":host{--tp-spacing:8px 16px;--tp-background:var(--tp-color-neutral-2);--tp-font-size:16px;--tp-font-weight:600;--tp-line-height:100%;--tp-color:var(--tp-color-neutral-10);padding:var(--tp-spacing);background:var(--tp-background);font-size:var(--tp-font-size);font-weight:var(--tp-font-weight);line-height:var(--tp-line-height);color:var(--tp-color);display:flex;justify-content:space-between;align-items:center}:host(.tp-color){--tp-background:var(--tp-color-base);--tp-color:var(--tp-color-contrast)}:host(.tp-color) ::slotted(tp-rate-like){--tp-color-rate-like:var(--tp-color-contrast)}";
const TpRateBarStyle0 = rateBarCss;

const TpRateBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const { color } = this;
        return (index.h(index.Host, { key: '2d3c1898ab6f898623c9f9941f428d07dc4e328b', "from-stencil": true, class: color_function.createColorClasses(color, {
                'tp-rate-bar': true,
            }) }, index.h("slot", { key: 'ccf9ebb37ef7c56c4dc97a393e55aa7fd85ff468' }), index.h("slot", { key: '67ce19e87500d88af7c9896d1ec7197cdc6e5b16', name: "avaliacao" })));
    }
};
TpRateBar.style = TpRateBarStyle0;

exports.tp_rate_bar = TpRateBar;

//# sourceMappingURL=tp-rate-bar.cjs.entry.js.map