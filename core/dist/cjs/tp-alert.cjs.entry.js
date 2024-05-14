'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');
const color_function = require('./color.function-2f28fd83.js');

const alertCss = "[tp-type=h64],[tp-type=h64] *{font-size:64px !important;font-weight:600 !important;line-height:64px !important;margin:0}[tp-type=h48],[tp-type=h48] *{font-size:48px !important;font-weight:600 !important;line-height:48px !important;margin:0}[tp-type=h48x],[tp-type=h48x] *{font-size:48px !important;font-weight:600 !important;line-height:64px !important;margin:0}[tp-type=h32],[tp-type=h32] *{font-size:32px !important;font-weight:600 !important;line-height:32px !important;margin:0}[tp-type=h32x],[tp-type=h32x] *{font-size:32px !important;font-weight:600 !important;line-height:40px !important;margin:0}[tp-type=h24],[tp-type=h24] *{font-size:24px !important;font-weight:600 !important;line-height:24px !important;margin:0}[tp-type=h24x],[tp-type=h24x] *{font-size:24px !important;font-weight:600 !important;line-height:32px !important;margin:0}[tp-type=h20],[tp-type=h20] *{font-size:20px !important;font-weight:600 !important;line-height:20px !important;margin:0}[tp-type=h20x],[tp-type=h20x] *{font-size:20px !important;font-weight:600 !important;line-height:24px !important;margin:0}[tp-type=p20],[tp-type=p20] *{font-size:20px !important;font-weight:400 !important;line-height:24px !important;margin:0}[tp-type=p18x],[tp-type=p18x] *{font-size:18px !important;font-weight:400 !important;line-height:32px !important;margin:0}[tp-type=p18xb],[tp-type=p18xb] *{font-size:18px !important;font-weight:600 !important;line-height:32px !important;margin:0}[tp-type=p16],[tp-type=p16] *{font-size:16px !important;font-weight:400 !important;line-height:16px !important;margin:0}[tp-type=p16b],[tp-type=p16b] *{font-size:16px !important;font-weight:600 !important;line-height:16px !important;margin:0}[tp-type=p16x],[tp-type=p16x] *{font-size:16px !important;font-weight:400 !important;line-height:24px !important;margin:0}[tp-type=p16xb],[tp-type=p16xb] *{font-size:16px !important;font-weight:600 !important;line-height:24px !important;margin:0}[tp-type=p14],[tp-type=p14] *{font-size:14px !important;font-weight:400 !important;line-height:16px !important;margin:0}[tp-type=p14b],[tp-type=p14b] *{font-size:14px !important;font-weight:600 !important;line-height:16px !important;margin:0}[tp-type=p14x],[tp-type=p14x] *{font-size:14px !important;font-weight:400 !important;line-height:20px !important;margin:0}[tp-type=p14xb],[tp-type=p14xb] *{font-size:14px !important;font-weight:600 !important;line-height:20px !important;margin:0}[tp-type=p12],[tp-type=p12] *{font-size:12px !important;font-weight:400 !important;line-height:12px !important;margin:0}[tp-type=p12b],[tp-type=p12b] *{font-size:12px !important;font-weight:600 !important;line-height:12px !important;margin:0}[tp-type=p12x],[tp-type=p12x] *{font-size:12px !important;font-weight:400 !important;line-height:16px !important;margin:0}[tp-type=p12xb],[tp-type=p12xb] *{font-size:12px !important;font-weight:600 !important;line-height:16px !important;margin:0}[tp-type=p10],[tp-type=p10] *{font-size:10px !important;font-weight:400 !important;line-height:12px !important;margin:0}[tp-type=p10b],[tp-type=p10b] *{font-size:10px !important;font-weight:600 !important;line-height:12px !important;margin:0}:host{display:flex;align-items:center;justify-content:center;width:100%;background:var(--tp-color-neutral-2)}.tp-alert__container{display:flex;align-items:center;justify-content:center;padding:12px;color:var(--tp-color-neutral-10)}.tp-alert__skeleton{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:0;width:100%;height:40px;margin:0}::slotted([slot=icon]){min-width:16px;margin-right:16px}::slotted([slot=text]){color:var(--tp-color-neutral-10);text-align:center}:host(.tp-color){background:var(--tp-color-base)}:host(.tp-color) ::slotted([slot=icon]){color:var(--tp-color-contrast)}:host(.tp-color) ::slotted([slot=text]){color:var(--tp-color-contrast) !important}:host(.tp-color-warning) ::slotted([slot=icon]),:host(.tp-color-provas-4) ::slotted([slot=icon]){color:var(--tp-color-neutral-10)}:host(.tp-color-warning) ::slotted([slot=text]),:host(.tp-color-provas-4) ::slotted([slot=text]){color:var(--tp-color-neutral-10) !important}:host(.tp-alert--loading){background:transparent}";

const TpAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.color = undefined;
        this.loading = undefined;
    }
    render() {
        const { color, loading } = this;
        let content;
        if (loading) {
            content = (index.h("ion-skeleton-text", { class: "tp-alert__skeleton", animated: true }));
        }
        else {
            content = (index.h("div", { class: "tp-alert__container" }, index.h("slot", { name: "icon" }), index.h("slot", { name: "text" })));
        }
        return (index.h(index.Host, { class: color_function.createColorClasses(color, {
                'tp-alert': true,
                'tp-alert--loading': loading,
            }) }, content));
    }
};
TpAlert.style = alertCss;

exports.tp_alert = TpAlert;

//# sourceMappingURL=tp-alert.cjs.entry.js.map