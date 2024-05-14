'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f62d7467.js');

const offlineCss = ".sc-tp-offline-h{--tp-z-index:1000;--tp-background:var(--tp-color-neutral-1);display:block;width:100vw;height:100vh;position:fixed;z-index:var(--tp-z-index)}.sc-tp-offline-h .offline.sc-tp-offline{background:var(--tp-background);position:fixed;width:100%;height:100%;top:0px}.sc-tp-offline-h .offline__content.sc-tp-offline{pointer-events:none;width:100%;height:calc(100% - 50px);display:flex;justify-content:center;align-items:center;flex-direction:column}.sc-tp-offline-h .offline__icon.sc-tp-offline{width:48px;height:48px;margin-bottom:24px;color:var(--tp-color-neutral-10)}.sc-tp-offline-h .offline__title.sc-tp-offline{display:block;margin-bottom:8px}";
const TpOfflineStyle0 = offlineCss;

const TpOffline = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tpClick = index.createEvent(this, "tpClick", 7);
        this.iconLeft = index.getAssetPath('./assets/tp-chevron-left.svg');
        this.iconOffline = index.getAssetPath('./assets/tp-wi-fi-off-2.svg');
        this.offlineTitle = undefined;
        this.offlineText = undefined;
    }
    onClick() {
        this.tpClick.emit();
    }
    render() {
        const { iconLeft, iconOffline, offlineTitle, offlineText, onClick } = this;
        return (index.h(index.Host, { key: '5bebbb1f43f0d93efdab393bfbbd5d929afa710b', "from-stencil": true }, index.h("div", { key: '1a1b1cd323e99bf472ff506b778919e62f6a4deb', class: "offline" }, index.h("tp-header", { key: 'd5797b829f40705da3918185f8bf955f5000dd10' }, index.h("tp-navbar", { key: 'c42169958d291dbb4247ba50cd4a04fd264ce90d', name: "transparent", slot: "navbar" }, index.h("ion-button", { key: '2fea96d65fe18a119091d117d34ed2a8e04b777f', fill: "clear",
            // @ts-ignore
            size: "sm", slot: "left", onClick: () => onClick() }, index.h("ion-icon", { key: 'c98643e016fc2c13ea5121b24de0a018ad996b21', slot: "icon-only", src: iconLeft })))), index.h("div", { key: 'df6335c9c791fb9ffba4b0c790aeeaf8977da19d', class: "offline__content" }, index.h("ion-icon", { key: '36ce28622ecd1e28fb76c6f6d5a382e9a5a8f085', class: "offline__icon", src: iconOffline }), index.h("ion-text", { key: '0e3dc291e488f8827c7fb8669f82c3625ae98693', "tp-type": "p16b" }, index.h("p", { key: '7db351c5cb008476a74a7289d1865e716a1e5c3a', class: "offline__title" }, offlineTitle)), index.h("ion-text", { key: 'aaf2e383c4cdf11350b7735e663b42c5bf941ecf' }, index.h("p", { key: '74d0c7ede3e8037eae7057b5e2d27100f1afb428', "tp-type": "p16" }, offlineText))))));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpOffline.style = TpOfflineStyle0;

exports.tp_offline = TpOffline;

//# sourceMappingURL=tp-offline.cjs.entry.js.map