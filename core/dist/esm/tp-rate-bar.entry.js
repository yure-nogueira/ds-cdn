import { r as registerInstance, h, H as Host } from './index-e49e9bf4.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const rateBarCss = ":host{--tp-spacing:8px 16px;--tp-background:var(--tp-color-neutral-2);--tp-font-size:16px;--tp-font-weight:600;--tp-line-height:100%;--tp-color:var(--tp-color-neutral-10);padding:var(--tp-spacing);background:var(--tp-background);font-size:var(--tp-font-size);font-weight:var(--tp-font-weight);line-height:var(--tp-line-height);color:var(--tp-color);display:flex;justify-content:space-between;align-items:center}:host(.tp-color){--tp-background:var(--tp-color-base);--tp-color:var(--tp-color-contrast)}:host(.tp-color) ::slotted(tp-rate-like){--tp-color-rate-like:var(--tp-color-contrast)}";
const TpRateBarStyle0 = rateBarCss;

const TpRateBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const { color } = this;
        return (h(Host, { key: '2d3c1898ab6f898623c9f9941f428d07dc4e328b', "from-stencil": true, class: createColorClasses(color, {
                'tp-rate-bar': true,
            }) }, h("slot", { key: 'ccf9ebb37ef7c56c4dc97a393e55aa7fd85ff468' }), h("slot", { key: '67ce19e87500d88af7c9896d1ec7197cdc6e5b16', name: "avaliacao" })));
    }
};
TpRateBar.style = TpRateBarStyle0;

export { TpRateBar as tp_rate_bar };

//# sourceMappingURL=tp-rate-bar.entry.js.map