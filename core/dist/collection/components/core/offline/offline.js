import { getAssetPath, h, Host, } from "@stencil/core";
export class TpOffline {
    constructor() {
        this.iconLeft = getAssetPath('./assets/tp-chevron-left.svg');
        this.iconOffline = getAssetPath('./assets/tp-wi-fi-off-2.svg');
        this.offlineTitle = undefined;
        this.offlineText = undefined;
    }
    onClick() {
        this.tpClick.emit();
    }
    render() {
        const { iconLeft, iconOffline, offlineTitle, offlineText, onClick } = this;
        return (h(Host, { key: '5bebbb1f43f0d93efdab393bfbbd5d929afa710b', "from-stencil": true }, h("div", { key: '1a1b1cd323e99bf472ff506b778919e62f6a4deb', class: "offline" }, h("tp-header", { key: 'd5797b829f40705da3918185f8bf955f5000dd10' }, h("tp-navbar", { key: 'c42169958d291dbb4247ba50cd4a04fd264ce90d', name: "transparent", slot: "navbar" }, h("ion-button", { key: '2fea96d65fe18a119091d117d34ed2a8e04b777f', fill: "clear",
            // @ts-ignore
            size: "sm", slot: "left", onClick: () => onClick() }, h("ion-icon", { key: 'c98643e016fc2c13ea5121b24de0a018ad996b21', slot: "icon-only", src: iconLeft })))), h("div", { key: 'df6335c9c791fb9ffba4b0c790aeeaf8977da19d', class: "offline__content" }, h("ion-icon", { key: '36ce28622ecd1e28fb76c6f6d5a382e9a5a8f085', class: "offline__icon", src: iconOffline }), h("ion-text", { key: '0e3dc291e488f8827c7fb8669f82c3625ae98693', "tp-type": "p16b" }, h("p", { key: '7db351c5cb008476a74a7289d1865e716a1e5c3a', class: "offline__title" }, offlineTitle)), h("ion-text", { key: 'aaf2e383c4cdf11350b7735e663b42c5bf941ecf' }, h("p", { key: '74d0c7ede3e8037eae7057b5e2d27100f1afb428', "tp-type": "p16" }, offlineText))))));
    }
    static get is() { return "tp-offline"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["offline.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["offline.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "offlineTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o title do componente"
                },
                "attribute": "offline-title",
                "reflect": true
            },
            "offlineText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o title do componente"
                },
                "attribute": "offline-text",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "tpClick",
                "name": "tpClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=offline.js.map
