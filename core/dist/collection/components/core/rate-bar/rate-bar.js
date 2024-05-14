import { h, Host } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpRateBar {
    constructor() {
        this.color = undefined;
    }
    render() {
        const { color } = this;
        return (h(Host, { key: '2d3c1898ab6f898623c9f9941f428d07dc4e328b', "from-stencil": true, class: createColorClasses(color, {
                'tp-rate-bar': true,
            }) }, h("slot", { key: 'ccf9ebb37ef7c56c4dc97a393e55aa7fd85ff468' }), h("slot", { key: '67ce19e87500d88af7c9896d1ec7197cdc6e5b16', name: "avaliacao" })));
    }
    static get is() { return "tp-rate-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["rate-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["rate-bar.css"]
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "todo"
                },
                "attribute": "color",
                "reflect": true
            }
        };
    }
}
//# sourceMappingURL=rate-bar.js.map
