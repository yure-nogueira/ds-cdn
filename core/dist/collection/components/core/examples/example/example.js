import { Host, getAssetPath, h } from "@stencil/core";
import { createColorClasses } from "../../../../utils/functions/color.function";
export class TpExample {
    constructor() {
        this.color = undefined;
        this.icon = undefined;
        this.defaultIcon = getAssetPath('./assets/tp-x.svg');
    }
    render() {
        const { color, icon, defaultIcon } = this;
        return (h(Host, { key: '2db9445b70bd471844bc3d8d09aa83e2a3e814c5', tabindex: "0", class: createColorClasses(color, {
                'tp-example': true,
            }) }, h("div", { key: '0fc3d15312acf7e3c2580f8017e68705cf37593d', class: "tp-example__container" }, h("span", { key: '96b2c9cfe8fa49b25cf2f28f73f6b807dfd8a7fe' }, "Lorem ipsum, dolor sit amet consectetur."), h("ion-button", { key: '3171415858342197cd39100ca7ccba50d1c3cad3' }, "ion button"), h("ion-icon", { key: '068fb06ee3c320e03a4f8b234e020b8ae5b2074b', class: "tp-example__icon", src: icon !== null && icon !== void 0 ? icon : defaultIcon, "aria-hidden": "true" })), h("ion-radio-group", { key: '705407e2d322a87e3c72188c47fd01f41f0a5084', class: "story__ion-radio-group" }, h("ion-radio", { key: 'd318a7f4321273a2165d5326f4ec15058a3ecce1', value: "1" }, h("ion-text", { key: '022b801dbba9dc7b8ab4acfaf878a89f4ba9b2e3' }, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { key: 'b58241f0f94306ff693f48d6bdf3f74548c4d69e', value: "2" }, h("ion-text", { key: 'bd08d7a235285641408599d54795e13b602bc1ad' }, "Lorem ipsum, dolor sit amet consectetur.")), h("ion-radio", { key: '6e91c61d5078b7f39d7ad9cb1f1fbb9fcce0d080', value: "3" }, h("ion-text", { key: '0b6d2fb592a1bb7477fb6321cf83698a3b087782' }, "Lorem ipsum, dolor sit amet consectetur.")))));
    }
    static get is() { return "tp-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["example.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["example.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpColor",
                    "resolved": "\"orange\" | \"orange-1\" | \"orange-2\" | \"orange-3\" | \"orange-4\" | \"orange-5\" | TpColors | TpColorsMedgrupo | (string & Record<never, never>)",
                    "references": {
                        "TpColor": {
                            "location": "import",
                            "path": "../../../../utils/types/color.type",
                            "id": "src/utils/types/color.type.ts::TpColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "color",
                "reflect": true
            },
            "icon": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "icon",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "defaultIcon": {}
        };
    }
}
//# sourceMappingURL=example.js.map
