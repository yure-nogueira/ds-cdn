import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpAlertFixed {
    constructor() {
        this.color = undefined;
    }
    render() {
        const { color } = this;
        return (h(Host, { key: '9f433a935a5c204939579c89c3fa342a602a3d34', class: createColorClasses(color, {
                'tp-alert-fixed': true,
            }) }, h("div", { key: 'bf428cc2db214ff4fd8f05bed3c30ea8d660689d', class: "tp-alert-fixed__container" }, h("slot", { key: '9842230871c45efe9c9cfe6cecef1d4b0cad0cf8', name: "icon" }), h("slot", { key: '91595cff05c87c6c04fad80606126262ece4f198', name: "text" }))));
    }
    static get is() { return "tp-alert-fixed"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["alert-fixed.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["alert-fixed.css"]
        };
    }
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
                            "path": "../../../utils/types/color.type",
                            "id": "src/utils/types/color.type.ts::TpColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=alert-fixed.js.map
