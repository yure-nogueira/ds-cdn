import { r as registerInstance, h, H as Host } from './index-e49e9bf4.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const alertFixedCss = "[tp-type=h64],[tp-type=h64] *{font-size:64px !important;font-weight:600 !important;line-height:64px !important;margin:0}[tp-type=h48],[tp-type=h48] *{font-size:48px !important;font-weight:600 !important;line-height:48px !important;margin:0}[tp-type=h48x],[tp-type=h48x] *{font-size:48px !important;font-weight:600 !important;line-height:64px !important;margin:0}[tp-type=h32],[tp-type=h32] *{font-size:32px !important;font-weight:600 !important;line-height:32px !important;margin:0}[tp-type=h32x],[tp-type=h32x] *{font-size:32px !important;font-weight:600 !important;line-height:40px !important;margin:0}[tp-type=h24],[tp-type=h24] *{font-size:24px !important;font-weight:600 !important;line-height:24px !important;margin:0}[tp-type=h24x],[tp-type=h24x] *{font-size:24px !important;font-weight:600 !important;line-height:32px !important;margin:0}[tp-type=h20],[tp-type=h20] *{font-size:20px !important;font-weight:600 !important;line-height:20px !important;margin:0}[tp-type=h20x],[tp-type=h20x] *{font-size:20px !important;font-weight:600 !important;line-height:24px !important;margin:0}[tp-type=p20],[tp-type=p20] *{font-size:20px !important;font-weight:400 !important;line-height:24px !important;margin:0}[tp-type=p18x],[tp-type=p18x] *{font-size:18px !important;font-weight:400 !important;line-height:32px !important;margin:0}[tp-type=p18xb],[tp-type=p18xb] *{font-size:18px !important;font-weight:600 !important;line-height:32px !important;margin:0}[tp-type=p16],[tp-type=p16] *{font-size:16px !important;font-weight:400 !important;line-height:16px !important;margin:0}[tp-type=p16b],[tp-type=p16b] *{font-size:16px !important;font-weight:600 !important;line-height:16px !important;margin:0}[tp-type=p16x],[tp-type=p16x] *{font-size:16px !important;font-weight:400 !important;line-height:24px !important;margin:0}[tp-type=p16xb],[tp-type=p16xb] *{font-size:16px !important;font-weight:600 !important;line-height:24px !important;margin:0}[tp-type=p14],[tp-type=p14] *{font-size:14px !important;font-weight:400 !important;line-height:16px !important;margin:0}[tp-type=p14b],[tp-type=p14b] *{font-size:14px !important;font-weight:600 !important;line-height:16px !important;margin:0}[tp-type=p14x],[tp-type=p14x] *{font-size:14px !important;font-weight:400 !important;line-height:20px !important;margin:0}[tp-type=p14xb],[tp-type=p14xb] *{font-size:14px !important;font-weight:600 !important;line-height:20px !important;margin:0}[tp-type=p12],[tp-type=p12] *{font-size:12px !important;font-weight:400 !important;line-height:12px !important;margin:0}[tp-type=p12b],[tp-type=p12b] *{font-size:12px !important;font-weight:600 !important;line-height:12px !important;margin:0}[tp-type=p12x],[tp-type=p12x] *{font-size:12px !important;font-weight:400 !important;line-height:16px !important;margin:0}[tp-type=p12xb],[tp-type=p12xb] *{font-size:12px !important;font-weight:600 !important;line-height:16px !important;margin:0}[tp-type=p10],[tp-type=p10] *{font-size:10px !important;font-weight:400 !important;line-height:12px !important;margin:0}[tp-type=p10b],[tp-type=p10b] *{font-size:10px !important;font-weight:600 !important;line-height:12px !important;margin:0}:host{display:flex;align-items:center;justify-content:center;width:100%;background:var(--tp-color-neutral-2)}.tp-alert-fixed__container{display:flex;align-items:center;justify-content:center;padding:12px}::slotted([slot=icon]){min-width:16px;margin-right:16px}::slotted([slot=text]){color:var(--tp-color-neutral-10);text-align:center}:host(.tp-color){background:var(--tp-color-base)}:host(.tp-color) ::slotted([slot=icon]){color:var(--tp-color-contrast)}:host(.tp-color) ::slotted([slot=text]){color:var(--tp-color-contrast) !important}:host(.tp-color-warning) ::slotted([slot=icon]),:host(.tp-color-provas-4) ::slotted([slot=icon]){color:var(--tp-color-neutral-10)}:host(.tp-color-warning) ::slotted([slot=text]),:host(.tp-color-provas-4) ::slotted([slot=text]){color:var(--tp-color-neutral-10) !important}";
const TpAlertFixedStyle0 = alertFixedCss;

const TpAlertFixed = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = undefined;
    }
    render() {
        const { color } = this;
        return (h(Host, { key: '9f433a935a5c204939579c89c3fa342a602a3d34', class: createColorClasses(color, {
                'tp-alert-fixed': true,
            }) }, h("div", { key: 'bf428cc2db214ff4fd8f05bed3c30ea8d660689d', class: "tp-alert-fixed__container" }, h("slot", { key: '9842230871c45efe9c9cfe6cecef1d4b0cad0cf8', name: "icon" }), h("slot", { key: '91595cff05c87c6c04fad80606126262ece4f198', name: "text" }))));
    }
};
TpAlertFixed.style = TpAlertFixedStyle0;

export { TpAlertFixed as tp_alert_fixed };

//# sourceMappingURL=tp-alert-fixed.entry.js.map